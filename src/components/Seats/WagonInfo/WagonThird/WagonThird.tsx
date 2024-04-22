import React, { useEffect, useState } from "react";
import styles from './wagonSecond.module.css'
import { TCoach } from "../../../../types";
type TWagonSeatsProps ={
  coach: TCoach, 
  wifi: boolean,
  air: boolean,
  food: boolean,
  linen: boolean
}
export const WagonThird:React.FunctionComponent<TWagonSeatsProps> = ({coach, wifi, linen}) => {
  const [finishPrice, setFinishPrice] = useState<number>(0);
  const [choosenSeats, setChoosenSeats] = useState<{index: number, price:number }[]>([]);
  const changeSeats = (ind:number, price:number) => {
    if(choosenSeats.filter(item => item.index === ind).length){
      setChoosenSeats(prev => prev.filter(item => item.index !== ind))
    }else{
      setChoosenSeats(prev => [...prev, {index:ind, price: price}])
    }

  }
  useEffect(()=>{
    let sum = choosenSeats.reduce((acc, el) => {
      return acc + el.price
    },0)

    setFinishPrice((wifi ? coach.coach.wifi_price : 0) + 
    (linen && !coach.coach.is_linens_included ? coach.coach.linens_price : 0) + sum)
  },[wifi, linen, choosenSeats])
 const seatsSecond =[
    {left:133},
    {left:193},
    {left:223},
    {left:282},
    {left:312},
    {left:372},
    {left:402},
    {left:461},
    {left:491},
    {left:551},
    {left:581},
    {left:640},
    {left:669},
    {left:730},
    {left:759},
    {left:820},
  ]
  return (
  <div className={styles.wagonSecondWrap}>
    <div className={styles.wagonSecond}>
      <div className={styles.wagonSecondNumCoach}>{coach.coach._id.slice(-2)}</div>
      <div className={styles.wagonSecondSeats}>
      
      <button className={styles.wagonSecondNum}
      style={{
        top:`28px`,
        left:`${seatsSecond[12].left}px`
        }} disabled>26</button>
      <button className={styles.wagonSecondNum} style={{
        top:`58px`,
        left:`${seatsSecond[13].left}px`
        }} disabled>27</button>
            <button className={styles.wagonSecondNum} style={{
        top:`28px`,
        left:`${seatsSecond[13].left}px`
        }} disabled>28</button>
            <button className={styles.wagonSecondNum} style={{
        top:`58px`,
        left:`${seatsSecond[14].left}px`
        }} disabled>29</button>
            <button className={styles.wagonSecondNum} style={{
        top:`28px`,
        left:`${seatsSecond[14].left}px`
        }} disabled>30</button>
            <button className={styles.wagonSecondNum} style={{
        top:`58px`,
        left:`${seatsSecond[15].left}px`
        }} disabled>31</button>
            <button className={styles.wagonSecondNum} style={{
        top:`28px`,
        left:`${seatsSecond[15].left}px`
        }} disabled>32</button>
        {coach?.seats.map((el, ind) => {
        return (
            <button className={`${styles.wagonSecondNum} ${choosenSeats.filter(item => item.index === el.index).length ? 
              styles.wagonSecondNumAdded : ''}` }
            style={{
              top:`${el.index % 2 === 0 ? '29' : '59'}px`,
              left:`${seatsSecond[ind - Math.ceil(ind/2)].left}px`
          }} disabled={!el.available} 
          onClick={() => changeSeats(el.index, el.index % 2 === 0 ? coach.coach.top_price : coach.coach.bottom_price)}>{el.index}</button>
        )
      })}
      </div>

    </div>
    <div className={styles.wagonSecondPrice}>
      {finishPrice}<span>&#8381;</span>
    </div>
  </div>
  )

}
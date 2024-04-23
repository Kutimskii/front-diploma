import React, { useEffect, useState } from "react";
import styles from './wagonFirst.module.css'
import { TCoach } from "../../../../types";
type TWagonSeatsProps ={
  coach:TCoach, 
  wifi: boolean,
  air: boolean,
  food: boolean,
  linen:boolean
}
export const WagonFirst:React.FunctionComponent<TWagonSeatsProps> = ({coach, wifi, air, food, linen}) => {
  const [finishPrice, setFinishPrice] = useState<number>(0);
  const [choosenSeats, setChoosenSeats] = useState<{index: number, price:number }[]>([]);
  let seats = Array.from(coach.seats)
  if (seats.length < 18) {
      for (let i = seats.length + 1; i <= 18; i++){
        seats.push({index: i, available: false})      
    }   
  }
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
 const seatsFirst =[
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
    {left:0},
    {left:0},

  ]
  return (
  <div className={styles.wagonFirstWrap}>
    <div className={styles.wagonFirst}>
      <div className={styles.wagonFirstNumCoach}>{coach.coach._id.slice(-2)}</div>
      <div className={styles.wagonFirstSeats}>
        {seats.map((el, ind) => {
        return (
            <button className={`${styles.wagonFirstNum} ${choosenSeats.filter(item => item.index === el.index).length ? 
              styles.wagonFirstNumAdded : ''}` }
            style={{
              top:`29px`,
              left:`${seatsFirst[ind]}px`
          }} disabled={!el.available} 
          onClick={() => changeSeats(el.index, el.index % 2 === 0 ? coach.coach.top_price : coach.coach.bottom_price)}>{el.index}</button>
        )
      })}
      </div>

    </div>
    <div className={styles.wagonFirstPrice}>
      {finishPrice}<span>&#8381;</span>
    </div>
  </div>
  )

}
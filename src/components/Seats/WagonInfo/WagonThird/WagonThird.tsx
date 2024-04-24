import React, { useEffect, useState } from "react";
import styles from './wagonThird.module.css'
import { TCoach } from "../../../../types";
import { useDispatch, useSelector } from "react-redux";
import { savePassengers } from "../../../../store/slicers/passengers";
import { RootState } from "../../../../store/store";
type TWagonSeatsProps ={
  coach: TCoach, 
  wifi: boolean,
  air: boolean,
  food: boolean,
  linen: boolean
}
export const WagonThird:React.FunctionComponent<TWagonSeatsProps> = ({coach, wifi, linen}) => {
  const dispatch = useDispatch()
  const [finishPrice, setFinishPrice] = useState<number>(0);
  const [choosenSeats, setChoosenSeats] = useState<{index: number, price:number }[]>([]);
  let seats = Array.from(coach.seats)
  if (seats.length < 48) {
      for (let i = seats.length + 1; i <= 48; i++){
        seats.push({index: i, available: true})      
    }   
  }
  const passengers = useSelector((state:RootState) => state.savePassengers)
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
  
  useEffect(() => {
    let sum = choosenSeats.reduce((acc, el) => {
      return acc + el.price
    },0)
    dispatch(savePassengers({
      seats:choosenSeats,
      facilities: finishPrice - sum
    }))
  },[choosenSeats, finishPrice])
  // console.log(passengers)
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
  const seatsThirdSide = [
    {left:133},
    {left:177},
    {left:223},
    {left:266},
    {left:312},
    {left:356},
    {left:402},
    {left:445},
    {left:491},
    {left:535},
    {left:581},
    {left:624},
    {left:669},
    {left:714},
    {left:759},
    {left:802},
  ]
  return (
  <div className={styles.wagonThirdWrap}>
    <div className={styles.wagonThird}>
      <div className={styles.wagonSecondNumCoach}>{coach.coach._id.slice(-2)}</div>
      <div className={styles.wagonSecondSeats}>
        {seats.map((el, ind, arr) => {
        if(el.index <= 32 ){
          return (
            <button className={`${styles.wagonSecondNum} ${choosenSeats.filter(item => item.index === el.index).length ? 
              styles.wagonSecondNumAdded : ''}` }
            style={{
              top:`${el.index % 2 === 0 ? '29' : '59'}px`,
              left:`${seatsSecond[ind - Math.ceil(ind/2)].left}px`
          }} disabled={!el.available} 
          onClick={() => changeSeats(el.index, el.index % 2 === 0 ? coach.coach.top_price : coach.coach.bottom_price)}
          key={ind}>{el.index}</button>
          )
        }else {
          return (
            <button className={`${styles.wagonThirdNum} ${choosenSeats.filter(item => item.index === el.index).length ? 
              styles.wagonThirdNumAdded : ''}` }
            style={{
              top:`113px`,
              left:`${seatsThirdSide[ind - 32].left}px`
          }} disabled={!el.available} 
          onClick={() => changeSeats(el.index, el.index > 32 ? coach.coach.side_price :
            el.index % 2 === 0 ? coach.coach.top_price : coach.coach.bottom_price)}>{el.index}</button>
          )
        }
        
      })}
      </div>

    </div>
    <div className={styles.wagonSecondPrice}>
      {finishPrice}<span>&#8381;</span>
    </div>
  </div>
  )

}
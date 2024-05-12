import React, { useEffect, useState } from "react";
import styles from './wagonFourth.module.css'
import { TCoach } from "../../../../types";
import { useDispatch } from "react-redux";
import { savePassengers } from "../../../../store/slicers/passengers";
type TWagonSeatsProps ={
  coach:TCoach, 
  wifi: boolean,
  air: boolean,
  food: boolean,
  linen:boolean
}
export const WagonFourth:React.FunctionComponent<TWagonSeatsProps> = ({coach, wifi, linen}) => {
  const dispatch = useDispatch()
  const [finishPrice, setFinishPrice] = useState<number>(0);
  const [choosenSeats, setChoosenSeats] = useState<{index: number, price:number }[]>([]);
  const seats = Array.from(coach.seats)
  if (seats.length < 62) {
      for (let i = seats.length + 1; i <= 62; i++){
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
    const sum = choosenSeats.reduce((acc, el) => {
      return acc + el.price
    },0)

    setFinishPrice((wifi ? coach.coach.wifi_price : 0) + 
    (linen && !coach.coach.is_linens_included ? coach.coach.linens_price : 0) + sum)
  },[wifi, linen, choosenSeats])
  useEffect(() => {
    const sum = choosenSeats.reduce((acc, el) => {
      return acc + el.price
    },0)
    dispatch(savePassengers({
      seats:choosenSeats,
      facilities: finishPrice - sum
    }))
  },[choosenSeats, finishPrice])
 const seatsFourth =[
    {left:142},
    {left:190},
    {left:232},
    {left:275},
    {left:319},
    {left:366},
    {left:408},
    {left:452},
    {left:496},
    {left:541},
    {left:584},
    {left:628},
    {left:671},
    {left:718},
    {left:758},
    {left:803},
    {left:188},
    {left:190},
    {left:232},
    {left:276},
    {left:320},
    {left:365},
    {left:407},
    {left:452},
    {left:496},
    {left:541},
    {left:584},
    {left:628},
    {left:671},
    {left:718},
    {left:758},
  ]
  return (
  <div className={styles.wagonFourthWrap}>
    <div className={styles.wagonFourth}>
      <div className={styles.wagonFourthNumCoach}>{coach.coach._id.slice(-2)}</div>
      <div className={styles.wagonFourthSeats}>
        {seats.map((el, ind) => {
          if (el.index <= 32){
            return (
              <button className={`${styles.wagonFourthNum} ${choosenSeats.filter(item => item.index === el.index).length ? 
                styles.wagonFourthNumAdded : ''}` }
              style={{
                top:`${el.index % 2 === 0 ? '33' : '54'}px`,
                left:`${seatsFourth[ind - Math.ceil(ind/2)].left}px`
            }} disabled={!el.available} 
            onClick={() => changeSeats(el.index, el.index % 2 === 0 ? 
              coach.coach.top_price : coach.coach.bottom_price)} key={ind}>{el.index}</button>
          )}else if (el.index > 33 && el.index < 62){
            return (
              <button className={`${styles.wagonFourthNum} ${choosenSeats.filter(item => item.index === el.index).length ? 
                styles.wagonFourthNumAdded : ''}` }
              style={{
                top:`${el.index % 2 === 0 ? '93' : '114'}px`,
                left:`${seatsFourth[ind - Math.floor(ind/2)].left}px`
            }} disabled={!el.available} 
            onClick={() => changeSeats(el.index, el.index % 2 === 0 ? 
              coach.coach.top_price : coach.coach.bottom_price)} key={ind}>{el.index}</button>)
          }else if (el.index === 33 || el.index === 62){
            return (
              <button className={`${styles.wagonFourthNum} ${choosenSeats.filter(item => item.index === el.index).length ? 
                styles.wagonFourthNumAdded : ''}` }
              style={{
                top:`114px`,
                left:`${el.index === 62 ? 803 : 142}px`
            }} disabled={!el.available} 
            onClick={() => changeSeats(el.index, el.index % 2 === 0 ? 
              coach.coach.top_price : coach.coach.bottom_price)} key={ind}>{el.index}</button>)
          }
        
      })}
      </div>

    </div>
    <div className={styles.wagonFourthPrice}>
      {finishPrice}<span>&#8381;</span>
    </div>
  </div>
  )

}
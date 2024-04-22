import styles from '../seats.module.css'
import React from "react";
import { useState } from 'react';
import { TCoach } from '../../../types';
import { Tooltip } from 'antd';
import { WagonSecond } from './WagonSecond/WagonSecond';
import { WagonThird } from './WagonThird/WagonThird';
export const WagonInfo:React.FunctionComponent<{currentCoach:TCoach, wagonId:string}> = ({currentCoach, wagonId}) => {
  const [activeWifi, setActiveWifi] = useState (false)
  const [activeAir, setActiveAir] = useState (false)
  const [activeLinen, setActiveLinen] = useState (false)
  const [activeFood, setActiveFood] = useState (false)
  return (
  <>
  <div className = {styles.trainToWagonInfo}>
    <div className = {styles.trainToWagonInfoNum}>
      <h2 className = {styles.trainToWagonInfoNumHead}>{wagonId.slice(-2)}</h2>
      <p className = {styles.trainToWagonInfoNumDescrip}>вагон</p>
    </div>
    <div className = {styles.trainToWagonInfoSeats}>
      <h3>Meста <span>{currentCoach?.coach.available_seats}</span></h3>
      <p>Верхние <span>{currentCoach?.seats.filter((el) => el.index % 2 === 0 && el.available).length}</span></p>
      <p>Нижние <span>{currentCoach?.seats.filter((el) => el.index % 2 !== 0 && el.available).length}</span></p>
      {currentCoach?.coach.class_type ==='third' &&
      <p>Боковые <span>{currentCoach?.seats.filter((el) => el.index > 32 ).length}</span></p>
      }
    </div>
    <div className = {styles.trainToWagonInfoPrice}>
      <h3 >Стоимость</h3>
      <p> {currentCoach?.coach.top_price} <span>&#8381;</span></p>
      <p> {currentCoach?.coach.bottom_price} <span>&#8381;</span></p>
    </div>
    <div className = {styles.trainToWagonInfoServise}>
      <h3 className = {styles.trainToWagonInfoServiseHead}>Обслуживание</h3>
      <div className = {styles.trainToWagonInfoServiseFacilities}>
        {currentCoach?.coach.have_wifi && 
        <Tooltip title='WI-FI' color='#F7F5F9' placement='bottom' overlayInnerStyle={{color:'black'}}>
          <button className = {`${styles.trainToWagonInfoServiseFacilitiesWifi} ${activeWifi ? styles.activeWagonFacility : '' }`} 
          onClick={() => setActiveWifi(prev => !prev)}></button>
        </Tooltip>}
        {currentCoach?.coach.have_air_conditioning &&
        <Tooltip title='кондиционер' color='#F7F5F9' placement='bottom' overlayInnerStyle={{color:'black'}}>
          <button className = {`${styles.trainToWagonInfoServiseFacilitiesAir} ${activeAir? styles.activeWagonFacility : '' }`} 
          onClick={() => setActiveAir(prev => !prev)} disabled={currentCoach?.coach.have_air_conditioning}></button>
        </Tooltip>}
         <Tooltip title='питание' color='#F7F5F9' placement='bottom' overlayInnerStyle={{color:'black'}}>
          <button className = {`${styles.trainToWagonInfoServiseFacilitiesTea} 
          ${activeFood ? styles.activeWagonFacility : '' }`} 
          onClick={() => setActiveFood(prev => !prev)}></button>
        </Tooltip>
        <Tooltip title='белье' color='#F7F5F9' placement='bottom' overlayInnerStyle={{color:'black'}}>
          <button disabled = {currentCoach.coach.is_linens_included} 
          className = {`${styles.trainToWagonInfoServiseFacilitiesLinen} ${activeLinen ? styles.activeWagonFacility : '' }`}
          onClick={() => setActiveLinen(prev => !prev)}></button>
        </Tooltip>
      </div>
      <p className = {styles.trainToWagonInfoServisePeople}>{currentCoach?.coach.available_seats} человек
          выбирают места в этом поезде</p>
    </div>
  </div>
  {currentCoach.coach.class_type ==='second' ? 
    <WagonSecond
      coach = {currentCoach}
      wifi={activeWifi}
      linen={activeLinen}
      air={activeAir}
      food={activeFood}
    /> : null}
      {currentCoach.coach.class_type ==='third' ? 
    <WagonThird
      coach = {currentCoach}
      wifi={activeWifi}
      linen={activeLinen}
      air={activeAir}
      food={activeFood}
    /> : null}
    </>


  )
}
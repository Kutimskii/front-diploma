import styles from './seats.module.css'
import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LastTickets } from '../Tickets/LastTickets/LastTickets';
import { TicketsFilter } from '../share/TicketsFilter/TicketsFilter';
import { useGetSeatsQuery } from '../../store/slicers/seats';
import { RootState } from '../../store/store';
import { TSeatsArgs } from '../../types';
import { InputNumber } from 'antd';
import { TWagonType } from '../../types';
import { ConfigProvider } from 'antd';
import { WagonInfo } from './WagonInfo/WagonInfo';
import  { savePassengers } from '../../store/slicers/passengers';
export const Seats:React.FunctionComponent = () => {
  const wagonType:TWagonType = {
    first: 'Люкс',
    second: 'Купе',
    third: 'Плацкарт',
    fourth: 'Сидячий'
  }
  const dispatch = useDispatch();
  const seatsArgs:TSeatsArgs = useSelector((state:RootState) => state.saveTrain)
  const passengers = useSelector((state:RootState) => state.savePassengers)
  const navigate = useNavigate();
  const {data} = useGetSeatsQuery(seatsArgs);
  const [adultCount, setAdultCount] = useState<number | null>(0);
  const [childCount, setchildCount] = useState<number | null>(0);
  const [freeChildCount, setfreeChildCount] = useState<number | null>(0);

  const [activeType, setActiveType] = useState<string>('');
  const [activeWagons, setActiveWagon] = useState<Array<string>>([]);
  const avaliableTypes = Array.from(new Set(data?.map((el) => el.coach.class_type)))
  const changeActiveWagon = (currentWagon: string) => {
    if(activeWagons.includes(currentWagon)){
      setActiveWagon(prev => prev.filter(el => el !== currentWagon))
    }else {
      setActiveWagon(prev => [...prev, currentWagon])
    }

  }
  useEffect(() => {
    dispatch(savePassengers({
      passengers:{
        adult: adultCount,
        child: childCount,
        toddler: freeChildCount
      }
    }))
  },[adultCount, childCount, freeChildCount])
  console.log(passengers)
  return (
    <section className={styles.seats}>
      <main className={styles.seatsTrains}>
        <div>
          <TicketsFilter/>
          
          <LastTickets/>
        </div>
        <div className={styles.seatsChoice}>
            <h1 className={styles.seatsChoiceHeader}>ВЫБОР МЕСТ</h1>
              <div className={styles.seatsChoiceTrainTo}>
                <div className={styles.trainToOtherTrain}>
                  <div className={styles.trainToOtherTrainIcon}>
                  </div>
                  <button className={`${styles.trainToOtherTrainBtn} btn`} onClick={() => navigate('/choosetrain')}>Выбрать другой поезд</button>
                </div>
                <div className={styles.trainToTimeInfo}>
                  <div className={styles.trainToTimeInfoIcon}></div>
                  <div>
                    <h2>{seatsArgs.trainName}</h2>
                    <div>{seatsArgs.cityFrom} &#8594;</div> 
                    <div>{seatsArgs.cityTo}</div> 
                  </div>
                  <div className = {styles.seatsDepartInfo}>
                    <h2>{seatsArgs.timeDepart}</h2>
                    <div className = {styles.seatsCity}>{seatsArgs.cityFrom}</div>
                    <div className = {styles.seatsRailway}>{seatsArgs.railwayFrom}</div>
                  </div>
                  <div className = {styles.seatsFromVector}></div>
                  <div className = {styles.seatsArriveInfo}>
                    <h2>{seatsArgs.timeArriv}</h2>
                    <div className = {styles.seatsCity}>{seatsArgs.cityTo}</div>
                    <div className = {styles.seatsRailway}>{seatsArgs.railwayTo}</div>
                  </div>
                  <div className = {styles.seatsDuration}>
                    <div className = {styles.seatsDurationIcon}></div>
                    <div>
                      <div>{seatsArgs.durationH} часов</div>
                      <div>{seatsArgs.durationM} минут</div>
                    </div>
                  </div>
                </div>
                <div className={styles.trainToQuantityTickets}>
                  <h2 className={styles.trainToQuantityTicketsHeader}>Количество билетов</h2>
                  <div className={styles.trainToQuantityTicketsWrap}>
                    <ConfigProvider
                      theme={{
                        components: {
                          InputNumber: {
                            colorPrimary:'#FFA800',
                            handleHoverColor:'#FFA800',
                            hoverBorderColor:'#FFA800',
                            activeBorderColor:'#FFA800',
                          },
                        },
                      }}
                    >
                      <div className={styles.trainToQuantityTicketsAge}>
                        <InputNumber 
                        onChange={(e) => setAdultCount(e)}
                        min={0}
                        max={5}
                        prefix="Взрослыx - " 
                        style = {{
                          width: '240px',
                          height: '50px'
                        }}/>
                        <p className={styles.trainToQuantityTicketsAgeDescrip}>{`Можно добавить еще ${adultCount ? 5 - adultCount : 5 } пассажиров`}</p>
                      </div>
                      <div className={styles.trainToQuantityTicketsAge}>
                        <InputNumber 
                        onChange={(e) => setchildCount(e)}
                        min={0}
                        max={5}
                        prefix="Детских - " 
                        style = {{
                          width: '240px',
                          height: '50px'
                        }} />
                        <p className={`${styles.trainToQuantityTicketsAgeDescrip} ${styles.trainToQuantityTicketsAgeDescripChild}`}>
                          {`Можно добавить еще ${childCount ? 5 - childCount : 5 } детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%`}
                        </p>
                      </div>
                      <div className={styles.trainToQuantityTicketsAge}>
                      < InputNumber 
                        onChange={(e) => setfreeChildCount(e)}
                        min={0}
                        max={5}
                        prefix="Детских «без места» - " 
                        style = {{
                          width: '240px',
                          height: '50px'
                        }} />
                      </div>
                    </ConfigProvider>
                  </div>
                  
                </div>
                <div className={styles.trainToWagonType}>
                  <h2 className={styles.trainToQuantityTicketsHeader}>Тип вагона</h2>
                  <ul className={styles.trainToWagons}>
                    {avaliableTypes?.map((item, ind) => {
                      return (
                        <li className={`${styles.trainToWagonsItem} ${activeType.includes(item) ? styles.activeWagonsItem : ''}`}
                        onClick={() => setActiveType(item)} key = {ind}>
                          <div className = {styles[item]} ></div>
                          <p>{wagonType[item as keyof TWagonType]}</p>
                        </li>)})}
                  </ul>
                </div>
                <div className={styles.trainToWagonChoose}>
                  <div>Вагоны {data?.map((el, ind ) => {
                    if (activeType.includes(el.coach.class_type)){
                      return <span key={ind} className={`${styles.trainToWagonChooseItem} ${activeWagons.includes(el.coach._id) ? 
                      styles.activeWagonItem : ''}`}
                      onClick={() => changeActiveWagon(el.coach._id)}
                    >{el.coach._id.slice(-2)}</span>
                    }
                  })}</div>
                  <div>Нумерация вагонов начинается с головы поезда</div>
                </div>
                {activeWagons.map((wagon, ind) => {
                  let currentCoach = data?.filter(el => el.coach._id === wagon)[0]
                  return (
                    <WagonInfo
                    currentCoach = {currentCoach!}
                    wagonId = {wagon}
                    key={ind}
                    />
                    
                  )
                })}

              </div>
              <div className={styles.seatsButtonWrap}><button className={`${styles.seatsButton} btn`}
              disabled={passengers.seats.length === 0 || 
              passengers.seats.length !== (passengers.passengers.adult + passengers.passengers.child)}
              onClick={() => navigate('/passengers')}
              >ДАЛЕЕ</button></div>
        </div>
      </main>


    </section>
  )
}

import styles from './seats.module.css'
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LastTickets } from '../Tickets/LastTickets/LastTickets';
import { TicketsFilter } from '../share/TicketsFilter/TicketsFilter';
import { useGetSeatsQuery } from '../../store/slicers/seats';
import { RootState } from '../../store/store';
import { TSeatsArgs } from '../../types';
import { InputNumber } from 'antd';
import { TWagonType } from '../../types';
import { ConfigProvider } from 'antd';
export const Seats:React.FunctionComponent = () => {
  const wagonType:TWagonType = {
    first: 'Сидячий',
    second: 'Плацкарт',
    third: 'Купе',
    fourth: 'Люкс'
  }
  const seatsArgs:TSeatsArgs = useSelector((state:RootState) => state.saveTrain)
  const navigate = useNavigate();
  const {data} = useGetSeatsQuery(seatsArgs);
  const [adultCount, setAdultCount] = useState<number | null>(0);
  const [childCount, setchildCount] = useState<number | null>(0);
  const [freeChildCount, setfreeChildCount] = useState<number | null>(0);
  const [firstClass, setFirstClass] = useState(false);
  const [secondClass, setSecondClassClass] = useState(false);
  const [thirdClass, setThirdClass] = useState(false);
  const [fourthClass, setFourthClass] = useState(false);
  console.log(data)
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
                    {data?.map(item => {
                      return (
                        <li className={styles.trainToWagonsItem} onClick={}>
                          <div className={styles[item.coach.class_type]}></div>
                          <p>{wagonType[item.coach.class_type as keyof TWagonType]}</p>
                        </li>
                        
                      )
                    })}
                  </ul>
                </div>
              </div>

        </div>
      </main>


    </section>
  )
}

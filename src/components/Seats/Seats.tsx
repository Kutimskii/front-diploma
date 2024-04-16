import styles from './seats.module.css'
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LastTickets } from '../Tickets/LastTickets/LastTickets';
import { TicketsFilter } from '../share/TicketsFilter/TicketsFilter';
import { useGetSeatsQuery } from '../../store/slicers/seats';
import { RootState } from '../../store/store';
export const Seats:React.FunctionComponent = () => {
  const seatsArgs = useSelector((state:RootState) => state.saveTrain)
  const navigate = useNavigate()
  const {data} = useGetSeatsQuery(seatsArgs)
  console.log(data)
  return (
    <section className={styles.seats}>
      <main className={styles.seatsTrains}>
        <div>
          <TicketsFilter/>
          <LastTickets/>
        </div>
        <div className={styles.seatsChoice}>
            <h1>Выбор мест</h1>
            {data?.map((item, index) => {
              return(
              <div className={styles.seatsChoiceTrainTo} key={index}>
                <div className={styles.trainToOtherTrain}>
                  <div className={styles.trainToOtherTrainIcon}>
                  </div>
                  <button className={`${styles.trainToOtherTrainBtn} btn`} onClick={() => navigate('/choosetrain')}>Выбрать другой поезд</button>
                </div>
                <div className={styles.trainToTimeInfo}>
                  <div className={styles.trainToTimeInfoIcon}></div>
                  <div>
                    <h2>{item.coach.name}</h2>
                    <div> &#8594;</div> 
                  </div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div></div>
                <div></div>
              </div>)
            })}

        </div>
      </main>


    </section>
  )
}

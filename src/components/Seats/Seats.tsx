import styles from './seats.module.css'
import React from "react";
import { TicketsFilter } from '../share/TicketsFilter/TicketsFilter';
export const Seats:React.FunctionComponent = () => {
  return (
    <section className={styles.seats}>
      <main className={styles.seatsTrains}>
          <TicketsFilter/>
          <div className={styles.seatsChoice}>
            <h1>Выбор мест</h1>
            <div className={styles.seatsChoiceTrainTo}>
              <div className={styles.trainToOtherTrain}>
                <div className={styles.trainToOtherTrainIcon}>
                </div>
                <button className={`${styles.trainToOtherTrainBtn} btn`}>Выбрать другой поезд</button>
              </div>
              <div className={styles.trainToTimeInfo}>
                <div className={styles.trainToTimeInfoIcon}></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
      </main>


    </section>
  )
}

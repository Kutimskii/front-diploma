import { useState } from 'react'
import { saveArgs } from '../../../store/slicers/tickets'
import { RootState } from '../../../store/store'
import styles from './tripDetails.module.css'
import { useSelector } from 'react-redux'

export const TripDetails:React.FunctionComponent = () => {
  const [tripStartBar, setTripStartBar] = useState<boolean>(false);
  const [tripEndBar, setTripEndBar] = useState<boolean>(false);
  const filledData = useSelector((state:RootState) => state.saveArgs)
  const dateStart = new Date(filledData.date_start as string).toLocaleDateString('ru');
  const dateEnd = new Date(filledData.date_end as string).toLocaleDateString('ru')
  console.log(filledData)
  console.log(dateStart, dateEnd)
  return (
    <section className={styles.tripDetails}>
      <h1 className={styles.tripDetailsHead}>ДЕТАЛИ ПОЕЗДКИ</h1>
      <div className={styles.tripDetailsTo}>
        <div className={styles.tripDetailsToWrap}>
          <div  className={styles.tripDetailsToIconArrow}></div>
          <h2 className={styles.tripDetailsToTitle}>Туда</h2>
          <div className={styles.tripDetailsToDate}>{dateStart}</div>
          <div className={tripStartBar ? styles.tripDetailsStartIconMinus : styles.tripDetailsStartIconPlus}
            onClick={() => setTripStartBar(prev => !prev)}></div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
  )
}

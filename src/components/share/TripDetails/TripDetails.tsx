import { useEffect, useState } from 'react'
import { RootState } from '../../../store/store'
import styles from './tripDetails.module.css'
import { savePassengers } from '../../../store/slicers/passengers'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames/bind'
const cn = classNames.bind(styles)

export const TripDetails:React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [tripStartBar, setTripStartBar] = useState<boolean>(true);
  const [tripPassengers, setTripPassengers] = useState<boolean>(true);
  const filledData = useSelector((state:RootState) => state.saveArgs)
  const passengers = useSelector((state:RootState) => state.savePassengers)
  const train = useSelector((state:RootState) => state.saveTrain)
  const dateStart = filledData.date_start ? new Date(filledData.date_start as string).toLocaleDateString('ru') : new Date().toLocaleDateString('ru');
  const dateEndFunc = () => {
    const date = filledData.date_start ? new Date(filledData.date_start as string) : new Date();
    if (filledData.date_end){
      return new Date(filledData.date_end as string).toLocaleDateString('ru');
    }
    date.setHours((+train?.departure.from.timeDeparture?.slice(0,2)! + (train?.departure.durationH! + (train?.departure.durationM!/60))))
    return date.toLocaleDateString('ru')
  }
  const adultPrice = passengers.seats.slice(0, passengers.passengers.adult).reduce((acc: number, el:{index:number, price: number}) => {
    acc += el.price
    return acc
  },0)
  const childPrice = Math.ceil(passengers.seats.slice(passengers.passengers.adult).reduce((acc:number, el:{index:number, price: number}) => {
    acc += el.price * 0.5
    return acc
  },0))
  const dateEnd = dateEndFunc();
  useEffect(()=>{
    dispatch(savePassengers({
      resultPrice:adultPrice + childPrice + passengers.facilities!
    }
    ))

  },[])
  const minusIconStartCls = cn({
    tripDetailsStartIconMinus: tripStartBar,
    tripDetailsStartIconPlus: !tripStartBar,
  });
  const passengersIcontCls = cn({
    tripDetailsStartIconMinus: tripPassengers,
    tripDetailsStartIconPlus: !tripPassengers
  });
  const passengersAdultCls = cn({
    tripDetailsPassengersInfoNone: !passengers.passengers.adult,
    tripDetailsPassengersInfoAdult: passengers.passengers.adult

  });
  const passengersChildCls = cn({
    tripDetailsPassengersInfoNone: !passengers.passengers.child,
    tripDetailsPassengersInfoChild: passengers.passengers.child,
  });
  const passengersToddlerCls = cn({
    tripDetailsPassengersInfoNone: !passengers.passengers.toddler,
    tripDetailsPassengersInfoChild: passengers.passengers.toddler,
  })
  const tripDetailsCls = cn({
    hideDetails: !tripStartBar,
  });
  const tripDetailsPassengersCls = cn({
    hideDetails: !tripPassengers,
  });

  return (
    <section className={styles.tripDetails}>
      <h1 className={styles.tripDetailsHead}>ДЕТАЛИ ПОЕЗДКИ</h1>
      <div className={styles.tripDetailsTo}>
        <div className={styles.tripDetailsToWrap}>
          <div  className={styles.tripDetailsToIconArrow}></div>
          <h2 className={styles.tripDetailsToTitle}>Туда</h2>
          <div className={styles.tripDetailsToDate}>{dateStart}</div>
          <div className={minusIconStartCls} onClick={() => setTripStartBar(prev => !prev)}></div>
        </div>
        <div className={tripDetailsCls}>
          <div className={styles.tripDetailsToNumb}>
              <p>№ Поезда</p>
              <p>{train?.departure.train.name}</p>
          </div>
          <div className={styles.tripDetailsToName}>
              <p>Название</p>
              <p className={styles.tripDetailsToNameDetails}>
                <p>{train?.departure.from.city.name}</p>
                <p>{train?.departure.to.city.name}</p>
              </p>
          </div>
          <div className = {styles.tripDetailsToTime}>
          <div className = {styles.tripDetailsToTimeDepart}>
            <h2>{train?.departure.from.timeDeparture}</h2>
            <p>{dateStart}</p>
          </div>
          <div className = {styles.tripDetailsToTimeDuration}>
            <p>{train.departure.durationH} : {train.departure.durationM}</p>
            <div className={styles.tripDetailsToTimeArriveVec}></div>
          </div>
          <div className = {styles.tripDetailsToTimeArrive}>
            <h2>{train?.departure.to.timeArrival}</h2>
            <p>{dateEnd}</p>
          </div>
        </div>
        <div className = {styles.tripDetailsToInfo}>
          <div className = {styles.tripDetailsToInfoDepart}>
            <h2>{train.departure.from.city.name}</h2>
            <p>{train.departure.from.railway_station_name}</p>
          </div>
          <div className = {styles.tripDetailsToInfoArrive}>
            <h2>{train.departure.to.city.name}</h2>
            <p>{train.departure.to.railway_station_name}</p>
          </div>
        </div>
        </div>
        
      </div>
      <div className={styles.tripDetailsPassengers}>
        <div className={styles.tripDetailsPassengersIconWrap}>        
          <div className={styles.tripDetailsPassengersIcon}></div>
          <h2 className={styles.tripDetailsPassengersTitle}>Пассажиры</h2>
        </div>
        <div className={passengersIcontCls} onClick={() => setTripPassengers(prev => !prev)}></div>
      </div>
      <div className={tripDetailsPassengersCls}>
        <div className={passengersAdultCls}>
          <p><span>{passengers.passengers.adult} </span>{passengers.passengers.adult > 1 ? 'Взрослый ' : 'Взрослых '}</p>
          <p className={styles.tripDetailspassengersPrice}>{adultPrice} <span>&#8381;</span></p>
        </div>
        <div className={passengersChildCls}>
        <p><span>{passengers.passengers.child} </span>{passengers.passengers.child > 1 ? 'Ребенка ' : 'Ребенок '}</p>
          <p className={styles.tripDetailspassengersPrice}>{childPrice} <span>&#8381;</span></p>
        </div>
        <div className={passengersToddlerCls}>
        <p><span>{passengers.passengers.toddler} </span>{passengers.passengers.toddler > 1 ? 'Ребенка ' : 'Ребенок '}
        без места
        </p>
          <p className={styles.tripDetailspassengersPrice}> 0 <span>&#8381;</span></p>
        </div>
      </div>
      <div className={styles.tripDetailsPassengersResult}>
        <p>ИТОГ</p>
        <div>{adultPrice + childPrice + passengers.facilities!}<span>&#8381;</span></div>
      </div>
    </section>
  )
}

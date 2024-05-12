
import { RootState } from '../../../store/store'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PassengerCard } from '../PassengerCard/PassengerCard'
import { TPassengersState } from '../../../types'
import styles from './dataPassengers.module.css'
export const DataPassengers:React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { passengersData } = useSelector((state:RootState) => state.addPassenger);
  const passengers = useSelector((state:RootState) => state.savePassengers)
  return (
  <section className={styles.passengersCards}>
    {passengers.seats.slice(0,passengers.passengers.adult).map((el:TPassengersState, ind: number) => {
      el
      return <PassengerCard
      number = {ind + 1}
      type = 'adult'
      key={ind}
      />
    })}
      {passengers.seats.slice(passengers.passengers.adult).map((el:TPassengersState, ind: number) => {
        el
      return <PassengerCard
      number = {ind + 1 + passengers.passengers.adult}
      type = 'child'
      key={ind}
      />
    })}
    <div className={`${styles.passengersButtons}`}>
        <button
          type="button"
          className={`${styles.passengersButton}`}
          onClick={() => navigate('/order')}
          disabled={passengers.seats.length !== passengersData.length}
        >
          Далее
        </button>
      
    </div>
  </section>)
}
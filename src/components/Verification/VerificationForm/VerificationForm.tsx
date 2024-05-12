
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { nanoid } from 'nanoid';
import moment from 'moment';
import { TicketTrain } from '../../Tickets/TicketTrain/TicketTrain';
import styles from './verificationForm.module.css'
import { RootState } from '../../../store/store';
import passenger from '../../../../src/img/icons/passengerOrder_icon.png';
import { TPassengersData } from '../../../types';
import { useMakeOrderMutation } from '../../../store/slicers/makeOrder';
import { useEffect } from 'react';
export const VerificationForm = () => {
  const navigate = useNavigate();
  const [makeOrder, { data, error, isLoading },] = useMakeOrderMutation();
  const  train  = useSelector((state:RootState) => state.saveTrain);

  const  passengersSeats  = useSelector((state:RootState) => state.savePassengers);
  const  { passengersData }  = useSelector((state:RootState) => state.addPassenger);
  const { payer } = useSelector((state:RootState)  => state.addPayerData);
  console.log(passengersData)
  type TUser ={
    first_name: string,
    last_name: string
    patronymic: string
    phone: string
    email: string
    payment_method: string
  }
  const currentUser:TUser = {
    first_name: payer.name,
    last_name: payer.surname,
    patronymic: payer.lastname,
    phone: payer.phone,
    email: payer.email,
    payment_method: payer.pay,
  };

  const currentDeparture = {
    route_direction_id: train.departure._id,
    seats: passengersData.map((el:TPassengersData) => {
      return {
        coach_id: train.departure.train._id,
        person_info: {
          is_adult: el.data?.type === 'adult' ? true : false,
          first_name: el.data?.name,
          last_name: el.data?.surname,
          patronymic: el.data?.lastname,
          gender: el.data?.sex === 'male' ? true : false,
          birthday: el.data?.birth,
          document_type: el.data?.type === 'adult' ? 'passport' : 'certificate',
          document_data: `${el.data?.series} + ${el.data?.document}`
        },
        seat_number: el.data?.seatIndex,
        is_child: el.data?.type === 'child' ? true : false,
        include_children_seat: el.data?.includeChildrenSeat
      }
    })
  }
useEffect(() => {
  if (data?.status === true) {
      localStorage.removeItem('passengersStorage')
      localStorage.removeItem('passengersSeats')
      localStorage.removeItem('payer')
      navigate('/success');
      document.documentElement.scrollTop = 0;
    }
  },[data])
  console.log(data,error,isLoading)

  const handleClick = (event:React.FormEvent) => {
    event.preventDefault();
    makeOrder({user: currentUser, departure: currentDeparture});
  };

  const handlePassengers = () => {
    navigate('/passengers');
  };

  const handlePayment = () => {
    navigate('/order');
  };

  return (
    <section className={styles.orderVerification}>
      <div className={styles.verificationSection}>
        <h4 className={`${styles.title} ${styles.verificationTitle}`}>Поезд</h4>
        <ul>
          <TicketTrain wagon = {train} orderStage = {true}/>
        </ul>
      </div>

      <div className={styles.verificationSection}>
        <h4 className={`${styles.title} ${styles.verificationTitle}`}>Пассажиры</h4>

        <div className={styles.verificationPassenger}>
          <div className={styles.verificationPassengerPersons}>
            {passengersData.map((el:TPassengersData) => (
              <div className={styles.passengerCard} key={nanoid()}>
                <div className={styles.passengerCardHeader}>
                  <img src={passenger} alt="passenger" />
                  <h5 className={styles.passengerCardTitle}>
                    {el.data?.type === 'adult' ? 'Взрослый' : 'Детский'}
                  </h5>
                </div>
                <div className={styles.passengerCardContent}>
                  <h6 className={styles.passengerCardContentTitle}>
                    {el.data?.surname.trim()} {el.data?.name.trim()}{' '}
                    {el.data?.lastname.trim()}
                  </h6>
                  <p className={styles.passengerCardContentText}>
                    Пол {el.data?.sex === 'male' ? 'мужской' : 'женский'}
                  </p>
                  <p className={styles.passengerCardContentText}>
                    Дата рождения {moment(el.data?.birth, 'YYYY-MM-DD').format('DD.MM.YYYY')}
                  </p>
                  <p className={styles.passengerCardContentText}>
                    {el.data?.type === 'adult'
                      ? `Паспорт РФ  ${el.data.series} ${el.data?.document}`
                      : `Свидетельство о рождении ${el.data?.document}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.verificationPrice}>
            <div className={styles.verificationPriceWrapper}>
              <p className={styles.verificationPriceName}>Всего</p>
              <span className={`${styles.verificationPriceSumValue} ${styles.currencyItem}`}>
                {passengersSeats.resultPrice}
              </span>
              <span className={styles.verificationCurrency}>&#8381;</span>
            </div>
            <button
              type="button"
              className={styles.verificationButton}
              onClick={handlePassengers}
            >
              Изменить
            </button>
          </div>
        </div>
      </div>

      <div className={styles.verificationSection}>
        <h4 className={`${styles.title} ${styles.verificationTitle}`}>Способ оплаты</h4>

        <div className={styles.verificationContent}>
          <div className={styles.verificationPayment}>
            {payer.pay === 'cash' ? 'Наличными' : 'Онлайн'}
          </div>

          <div className={styles.verifPaymentBtnWrapper}>
            <button
              type="button"
              className={`${styles.verificationButton} ${styles.verificationPaymentButton}`}
              onClick={handlePayment}
            >
              Изменить
            </button>
          </div>
        </div>
      </div>

      <div className={styles.verificationButtons}>
        <button
          type="button"
          className={styles.verificationButtonNext}
          onClick={handleClick}
        >
          Подтвердить
        </button>
      </div>
    </section>
  );
}
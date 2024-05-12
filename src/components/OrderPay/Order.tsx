import { TripDetails } from '../share/TripDetails/TripDetails';
import { OrderForm } from './OrderForm/OrderForm';
import styles from '../Passengers/passengers.module.css'
export const Order = () => {
  return (
      <section className={styles.passengers}>
        <main className={styles.passengersWrap}>
            <TripDetails/>
            <OrderForm/>
        </main>
      </section>
  );
}
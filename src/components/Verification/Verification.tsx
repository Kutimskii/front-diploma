import { TripDetails } from '../share/TripDetails/TripDetails';
import { VerificationForm } from './VerificationForm/VerificationForm';
import styles from '../Passengers/passengers.module.css'
export const Verification = () => {
  return (
      <section className={styles.passengers}>
        <main className={styles.passengersWrap}>
            <TripDetails/>
            <VerificationForm/>
        </main>
      </section>
  );
}
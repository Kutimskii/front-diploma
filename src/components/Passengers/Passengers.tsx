import { TripDetails } from "../share/TripDetails/TripDetails"
import { DataPassengers } from "./DataPassengers/DataPassengers"
import styles from './passengers.module.css'
export const Passengers:React.FunctionComponent = () => {
  return (
    <section className={styles.passengers}>
      <main className={styles.passengersWrap}>
          <TripDetails/>
          <DataPassengers/>
      </main>


    </section>)
}
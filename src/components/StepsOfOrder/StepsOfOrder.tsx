import styles from './stepsOfOrder.module.css'
import { TStepsStateProp } from '../../types'
export const StepsOfOrder:React.FunctionComponent<{stepsState:TStepsStateProp}> = ({stepsState}) => {
console.log(stepsState)
  return (
    <div className={styles.stepsOfOrder}>
      <div className={`${styles.step} ${styles.step_one} ${styles[stepsState[1]]} ${stepsState[2] ? styles.full : ''}`}>
        <div className={styles.step_number}>1</div> <h2 className={styles.step_text}>Билеты</h2>
      </div>
      <div className={`${styles.step} ${styles.step_two} ${styles[stepsState[2]]}`}>
      <div className={styles.step_number}>2</div> <h2 className={styles.step_text}>Пассажиры</h2>
      </div>
      <div className={`${styles.step} ${styles.step_three} ${styles[stepsState[3]]}`}>
      <div className={styles.step_number}>3</div> <h2 className={styles.step_text}>Оплата</h2>
      </div>
      <div className={`${styles.step} ${styles.step_four} ${styles[stepsState[4]]}`}>
      <div className={styles.step_number}>4</div> <h2 className={styles.step_text}>Проверка</h2>
      </div>
    </div>
  )

}
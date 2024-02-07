import styles from './stepsOfOrder.module.css'

export const Tickets:React.FunctionComponent = () => {

  return (
    <div className={styles.stepsOfOrder}>
      <div className={`${styles.step} ${styles.step_one} ${styles.active_step}`}>
        <div className={styles.step_number}>1</div> <h2 className={styles.step_text}>Билеты</h2>
      </div>
      <div className={`${styles.step} ${styles.step_two}`}>
      <div className={styles.step_number}>2</div> <h2 className={styles.step_text}>Пассажиры</h2>
      </div>
      <div className={`${styles.step} ${styles.step_three}`}>
      <div className={styles.step_number}>3</div> <h2 className={styles.step_text}>Оплата</h2>
      </div>
      <div className={`${styles.step} ${styles.step_four}`}>
      <div className={styles.step_number}>4</div> <h2 className={styles.step_text}>Проверка</h2>
      </div>
    </div>
  )

  }
import styles from "./howItwork.module.css"
export const HowItWork:React.FunctionComponent = () => {
  return(
    <section className={styles.howItWork}>
      <div className={styles.howItWork_info}>
        <h1 className={styles.howItWork_title}>КАК ЭТО РАБОТАЕТ</h1>
        <button type="button" className={styles.howItWork_btnMore}>Узнать больше</button>
      </div>
      <div className={styles.howItWork_advantages}>
        <ul className={styles.howItWork_advantages_wrap}>
          <li className={styles.howItWork_advantages_item}>
            <div className={styles.howItWork_advantages_item_icon_comp}></div>
            <p className={styles.howItWork_advantages_item_text}>Удобный заказ<br/> на сайте</p>
          </li>
          <li className={styles.howItWork_advantages_item}>
            <div className={styles.howItWork_advantages_item_icon_build}></div>
            <p className={styles.howItWork_advantages_item_text}>Нет необходимости<br/>ехать в офис</p>
          </li>
          <li className={styles.howItWork_advantages_item}>
            <div className={styles.howItWork_advantages_item_icon_huge}></div>
            <p className={styles.howItWork_advantages_item_text}>Огромный выбор<br/> направлений</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
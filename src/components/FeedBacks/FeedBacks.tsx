import styles from "./feedbacks.module.css"
export const FeedBacks:React.FunctionComponent = () => {
  return(
    <section className={styles.feedbacks}>
      <h1 className={styles.feedbacks_title}>ОТЗЫВЫ</h1>
      <ul className={styles.feedbacks_items_wrap}>
        <li className={styles.feedbacks_item}>
          <div className={styles.feedbacks_item_icon_kate}></div>
          <div className={styles.feedbacks_item_describe}>
            <h2 className={styles.feedbacks_item_describe_title}>Екатерина Вальнова</h2>
            <p className={styles.feedbacks_item_describe_text}>
            <span className={styles.feedbacks_item_describe_text_quote}>“</span>Доброжелательные подсказки на всех этапах помогут правильно заполнить
              поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые. 
              <span className={styles.feedbacks_item_describe_text_quoteEnd}>”</span>
            </p>
          </div>
        </li>
        <li className={styles.feedbacks_item}>
          <div className={styles.feedbacks_item_icon_eugen}></div>
            <div className={styles.feedbacks_item_describe}>
              <h2 className={styles.feedbacks_item_describe_title}>Евгений Стрыкало</h2>
              <p className={styles.feedbacks_item_describe_text}>
              <span className={styles.feedbacks_item_describe_text_quote}>“</span>СМС - сопровождение до посадки Сразу после оплаты
                ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.
                 <span className={styles.feedbacks_item_describe_text_quoteEnd}> ”</span></p>
            </div>
        </li>
      </ul>
      <ul className={styles.feedbacks_slider}>
        <li className={`${styles.feedbacks_slider_dot} ${styles.feedbacks_slider_active_dot}`}></li>
        <li className={styles.feedbacks_slider_dot}></li>
        <li className={styles.feedbacks_slider_dot}></li>
        <li className={styles.feedbacks_slider_dot}></li>
        <li className={styles.feedbacks_slider_dot}></li>
      </ul>
    </section>
  )
}
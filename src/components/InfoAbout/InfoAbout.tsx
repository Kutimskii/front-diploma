import styles from "./infoAbout.module.css"

export const InfoAbout:React.FunctionComponent = () => {
  return (<section className={styles.infoAbout}>
    <h1 className={styles.infoAbout_title}>О НАС</h1>
    <div className={styles.infoAbout_text}>
      <p>Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем 
        все больше людей заказывают жд билеты через интернет.</p> 
      <p>Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? 
      Мы расскажем о преимуществах заказа через интернет.
      </p>
      <p className={styles.infoAbout_text_imp}> Покупать жд билеты дешево можно за 90 суток до отправления поезда. 
        Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.
      </p>
    </div>
  </section>
  );
}
import styles from "./footer.module.css"
export const Footer:React.FunctionComponent = () => {
  return(
    <footer className={styles.footer}>
      <div className={styles.footer_container}>

      
        <section className={styles.contacts}>
          <h2 className={styles.contacts_title}>Свяжитесь с нами</h2>
          <div className={styles.contacts_telephone}>
            <span className={styles.contacts_telephone_icon}></span>
            <span className={styles.contacts_telephone_number}><a href="tel:8 (800) 000 00 00">8 (800) 000 00 00</a></span>
          </div>
          <div className={styles.contacts_mail}>
            <span className={styles.contacts_mail_icon}></span>
            <span className={styles.contacts_mail_adress}><a href="mailto:inbox@mail.ru">inbox@mail.ru</a></span>
          </div>
          <div className={styles.contacts_skype}>
            <span className={styles.contacts_skype_icon}></span>
            <span className={styles.contacts_skype_adress}><a href="skype:tu.train.tickets">tu.train.tickets</a></span>
          </div>
          <div className={styles.contacts_location}>
            <span className={styles.contacts_location_icon}></span>
            <span className={styles.contacts_location_adress}><a href="adress:tu.train.tickets">г. Москва<br/> ул. Московская 27-35<br/> 
  555 555</a></span>
          </div>
        </section>
        <section className={styles.subscribe}>
          <h2 className={styles.subscribe_title}>Подписка</h2>
          <label htmlFor="subscribe" className={styles.subscribe_text_label}>Будьте в курсе событий</label>
          <form className={styles.subscribe_form}>
            <input type="mail" placeholder="e-mail" id={styles.subscribe_input}/>
            <button type="button" className={styles.subscribe_form_btn}>ОТПРАВИТЬ</button>
          </form>
          <h2 className={styles.subscribe_title}>Подписывайся на нас</h2>
          <div className={styles.subscribe_social_networks}>
            <span className={styles.subscribe_social_networks_youtube}></span>
            <span className={styles.subscribe_social_networks_linkedin}></span>
            <span className={styles.subscribe_social_networks_google}></span>
            <span className={styles.subscribe_social_networks_facebook}></span>
            <span className={styles.subscribe_social_networks_x}></span>
          </div>
        </section>
      </div>
      <section className={styles.footer_logo}>
        <div className={styles.footer_logo_wrap}>
          <p className={styles.footer_logo_text}>Лого</p>
          <span className={styles.footer_logo_arrow}></span>
          <p className={styles.footer_logo_year}>2018 Web</p>
        </div>
      </section>
    </footer>
  )
}
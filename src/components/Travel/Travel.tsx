import styles from './travel.module.css'
import { FindTicketVidget } from '../FindTicketVidget/FindTicketVidget'
export const Travel:React.FunctionComponent<{slogan:boolean}> = ({slogan}) => {

  return (
    <section className={styles.vidget_slogan_wrap}>
      <div className={slogan ? styles.slogan : styles.slogan_none}>
        <p className={styles.slogan_text}>Вся жизнь - <span>путешествие!</span></p>
      </div>
      <FindTicketVidget
      slogan={slogan}/>
    </section>
    
    )

  }
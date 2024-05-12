import styles from './travel.module.css'
import { FindTicketVidget } from '../share/FindTicketVidget/FindTicketVidget'
export const Travel:React.FunctionComponent<{slogan:boolean | string}> = ({slogan}) => {

  return (
    <section className={styles.vidget_slogan_wrap}>
      <div className={!slogan || slogan === 'success' ? styles.slogan_none: styles.slogan }>
        <p className={styles.slogan_text}>Вся жизнь - <span>путешествие!</span></p>
      </div>
      {slogan === 'success' ? '' : 
        <FindTicketVidget
        slogan={slogan}/>
      }
    </section>
    
    )

  }
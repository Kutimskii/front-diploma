import styles from "./header.module.css";
import { Travel } from "../Travel/Travel";
type THeaderProps = {
  headerBckgAlt:boolean,
  travelSlogan:boolean
}
export const Header:React.FunctionComponent<THeaderProps> = ({headerBckgAlt,travelSlogan}) => {

  return (
  <header className={headerBckgAlt ? styles.header_headerBckgAlt : styles.header}>
    <div>
      <div className={styles.header_logo}>
        <p className={styles.header_logo_text}>Лого</p>
      </div>
      <nav>
        <ul className={styles.header_menu}>
          <li className={styles.header_menu_link}>
            О нас
          </li>
          <li className={styles.header_menu_link}>
            Как это работает 
          </li>
          <li className={styles.header_menu_link}>
            Отзывы
          </li>
          <li className={styles.header_menu_link}>
            Контакты
          </li>
        </ul>
      </nav>
    </div>
    <Travel
      slogan = {travelSlogan}
    />

  </header>)
}
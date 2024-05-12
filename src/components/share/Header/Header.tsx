import styles from "./header.module.css";
import React from "react";
import { Travel } from "../../Travel/Travel";
type THeaderProps = {
  headerBckgAlt: string | boolean
  travelSlogan: string | boolean
}
import classNames from "classnames/bind";
const cn = classNames.bind(styles)
export const Header:React.FunctionComponent<THeaderProps> = ({ headerBckgAlt, travelSlogan}) => {
const headerCls = cn ({
  header_headerBckgAlt: headerBckgAlt === true,
  header: headerBckgAlt === false,
  header_success:headerBckgAlt === 'success'
}) 
  return (
  <header className={headerCls}>
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
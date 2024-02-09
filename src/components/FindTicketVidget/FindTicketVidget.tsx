import styles from "./findTicketVidget.module.css"
import ru from 'antd/es/date-picker/locale/ru_RU';
import 'dayjs/locale/ru'
import { DatePicker } from 'antd';
import { useNavigate } from "react-router-dom";
export const FindTicketVidget:React.FunctionComponent<{slogan:boolean}> = ({slogan}) => {
  ru.lang.monthFormat="MMMM";
  const navigate = useNavigate();
  return (
    <div className={slogan ? styles.vidget_container : styles.vidget_container_alt}>
      <form className={slogan ? styles.form_find_ticket : styles.form_find_ticket}>
        <div className={slogan ? styles.vidget_input_container : styles.vidget_input_container_alt}>
          <div className={styles.vidget_direction_container}>
            <p className={styles.vidget_direction_title}>Направление</p>
            <div className={styles.direction_wrap}>
              <div className={styles.input_direction_from_wrap}>
                <input type="text" placeholder="Откуда" name="from" id="direction_from" className={styles.input_direction}/>
              </div>
              <button type="button" className={styles.btn_change_direction}><span className={styles.icon_change}></span></button>
              <div className={styles.input_direction_to_wrap}>
                <input type="text" placeholder="Куда" name="to" id="direction_to" className={styles.input_direction}/>
              </div>
            </div>
            </div>
            <div className= {styles.vidget_directionDate_container}>
            <p className={styles.vidget_direction_title}>Дата</p>
            <div className={styles.date_wrap}>
            <div className='date_from_wrap_dp'>
                  <DatePicker 
                    locale={ru}
                    popupClassName="date_picker"
                    popupStyle={{ 
                      width: '352px',
                    }}
                    getPopupContainer={(trigger:HTMLElement):HTMLElement => trigger.parentElement!}
                    // placement="bottomRight"
                    placeholder="ДД/ММ/ГГ"
                    suffixIcon={<div className='input_date_from_wrap_dp'></div>} 
                    style={{
                      width: '325px',
                      height: '60px',
                      padding: '0 30px 0 30px',
                      border: '1px solid rgba(41, 41, 41, 0.8)',
                      borderRadius: '3px',
                      fontSize:'20px',
                    }}
                  />
            </div>
              <div className={styles.input_date_to_wrap}>
              <DatePicker 
                    locale={ru}
                    popupClassName="date_picker"
                    popupStyle={{ 
                      width: '352px',
                    }}
                    getPopupContainer={(trigger:HTMLElement):HTMLElement => trigger.parentElement!}
                    placement="bottomRight"
                    placeholder="ДД/ММ/ГГ"
                    suffixIcon={<div className={styles.input_date_to_wrap_dp}></div>} 
                    style={{
                      width: '325px',
                      height: '60px',
                      padding: '0 30px 0 30px',
                      border: '1px solid rgba(41, 41, 41, 0.8)',
                      borderRadius: '3px',
                      fontSize:'20px',
                    }}
                  />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.vidget_btn_wrap}>
            <button type="button" className={styles.btn_find_ticket} onClick={(e)=> {
              e.preventDefault();
              navigate('/choosetrain')
              }}>НАЙТИ БИЛЕТЫ</button>
        </div>
      </form>
    </div>
    
  )
}
import styles from "./directions_date.module.css";
import ru from 'antd/es/date-picker/locale/ru_RU';
ru.lang.monthFormat="MMMM";
import { DatePicker } from 'antd';
import { TDirectionsDateProps } from "../../../types";

export const DirectionsDate:React.FunctionComponent<TDirectionsDateProps> = ({dateFrom, dateTo, setDateFrom, setDateTo }) => {
    return (<div className= {styles.vidget_directionDate_container}>
      <p className={styles.vidget_direction_title}>Дата</p>
      <div className={styles.date_wrap}>
        <div className={styles.input_date_from_wrap}>
              <DatePicker 
                onChange={(e) => setDateFrom(e)
              }
                value= {dateFrom}
                locale={ru}
                format={'DD/MM/YYYY'}
                popupClassName="date_picker"
                popupStyle={{ 
                  width: '352px',
                }}
                getPopupContainer={(trigger:HTMLElement):HTMLElement => trigger.parentElement!}
                placeholder="ДД/ММ/ГГГГ"
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
                onChange={(e) => setDateTo(e)}
                value= {dateTo}
                locale={ru}
                format={'DD/MM/YYYY'}
                popupClassName="date_picker"
                popupStyle={{ 
                  width: '352px',
                }}
                getPopupContainer={(trigger:HTMLElement):HTMLElement => trigger.parentElement!}
                placement="bottomRight"
                placeholder="ДД/ММ/ГГГГ"
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
    </div>);

  }
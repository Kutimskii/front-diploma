import styles from './ticket.module.css'
import { TTicket } from '../../../types'
export const Ticket:React.FunctionComponent <{wagon:TTicket}> = ({wagon}) => {
let durationHours  = Math.floor(wagon.departure.duration / 3600);
let durationMinutes = (wagon.departure.duration - (Math.floor(wagon.departure.duration / 3600)*3600))/60
  return (
  <li className={styles.ticket}>
    <div className = {styles.ticketDirect}>
      <div className = {styles.ticketDirectIcon}></div>
      <h2 className = {styles.ticketDirectNumb}>{wagon.departure.train.name}</h2>
      <div className = {styles.ticketDirectCities}>
          <div className = {styles.ticketDirectCitiesFrom}>{wagon.departure.from.city.name[0].toUpperCase() +
           wagon.departure.from.city.name.slice(1)} &#8594;</div>
          <div className = {styles.ticketDirectCitiesTo}>{wagon.departure.to.city.name[0].toUpperCase() + 
          wagon.departure.to.city.name.slice(1)}</div>
      </div>
    </div>
    <div className = {styles.ticketDirectTime}>
      <div className = {styles.ticketDirectTimeFrom}>
          <h2 >{`${(new Date(wagon.departure.from.datetime * 1000)
            .getHours() < 10 ? '0' : '') + 
            new Date(wagon.departure.from.datetime * 1000)
            .getHours()}:${(new Date(wagon.departure.from.datetime * 1000).getMinutes() < 10 ? '0': '') + 
            new Date(wagon.departure.from.datetime * 1000).getMinutes() }`}</h2>
          <div className = {styles.ticketDirectTimeFromCity}>{wagon.departure.from.city.name[0].toUpperCase() + wagon.departure.from.city.name.slice(1)}</div>
          <div className = {styles.ticketDirectTimeFromStation}>{wagon.departure.from.railway_station_name} вокзал</div>
      </div>
      <div className = {styles.ticketDirectTimeFromDuration}>
        <div>
          {durationHours} : {(durationMinutes < 10 ? '0' : '') + durationMinutes}
        </div>
        <div className = {styles.ticketDirectTimeDurationFromVector}></div>
      </div>
      <div className = {styles.ticketDirectTimeTo}>
          <h2 >{`${(new Date(wagon.departure.to.datetime * 1000)
            .getHours() < 10 ? '0' : '') + 
            new Date(wagon.departure.to.datetime * 1000)
            .getHours()}:${(new Date(wagon.departure.to.datetime * 1000).getMinutes() < 10 ? '0' : '') +
            new Date(wagon.departure.to.datetime * 1000).getMinutes()}`}</h2>
          <div className = {styles.ticketDirectTimeToCity}>{wagon.departure.to.city.name[0].toUpperCase() + wagon.departure.to.city.name.slice(1)}</div>
          <div className = {styles.ticketDirectTimeToStation}>{wagon.departure.to.railway_station_name} вокзал</div>
      </div>
    </div>
    <div className = {styles.ticketPrices}>
      {wagon.departure.available_seats_info.fourth ? 
        <div className = {styles.ticketPricesItem}>
          <span>Сидячий</span>  <span>{wagon.departure.available_seats_info.fourth}</span>
          <span>от</span>
          <span>{wagon.departure.price_info.fourth.top_price}</span>
          <span>&#8381;</span>
        </div> : null}
      {wagon.departure.available_seats_info.third ? 
        <div className = {styles.ticketPricesItem}>
          <span className = {styles.ticketPricesItemSeat}>Плацкарт</span> 
          <span className = {styles.ticketPricesItemSeatCount}>{wagon.departure.available_seats_info.third}</span>
          <span className = {styles.ticketPricesItemSeatArticle}>от</span>
          <span className = {styles.ticketPricesItemSeatPrice}>{wagon.departure.price_info.third.top_price}</span>
          <span>&#8381;</span>
         </div>  : null}
      {wagon.departure.available_seats_info.second ? 
        <div className = {styles.ticketPricesItem}>
          <span>Купе</span><span>{wagon.departure.available_seats_info.second}</span>
          <span>от</span>
          <span>{wagon.departure.price_info.second.top_price}</span>
          <span>&#8381;</span>
        </div> : null}
      {wagon.departure.available_seats_info.first ? 
        <div className = {styles.ticketPricesItem}>
          <span>Люкс</span> <span>{wagon.departure.available_seats_info.first}</span>
          <span>от</span>
          <span>{wagon.departure.price_info.first.top_price}</span>
          <span>&#8381;</span>
        </div> : null}
      <button type="button" className={styles.ticketPricesBtn}>Выбрать места</button>
    </div>
  </li>)
}

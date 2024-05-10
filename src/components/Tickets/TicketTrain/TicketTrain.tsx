import styles from './ticket.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { TTicket } from '../../../types'
import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../store/store';
import { saveTrain } from '../../../store/slicers/currentTrain';
export const TicketTrain:React.FunctionComponent <{wagon:TTicket}> = ({wagon}) => {
const dispatch = useDispatch()
const navigate = useNavigate();
const ticketArgs = useSelector((state:RootState) => state.saveArgs)
const timeDeparture = (new Date(wagon.departure.from.datetime * 1000).getHours() < 10 ? '0' : '') + 
  new Date(wagon.departure.from.datetime * 1000).getHours() + ':' + 
  (new Date(wagon.departure.from.datetime * 1000).getMinutes() < 10 ? '0': '') + new Date(wagon.departure.from.datetime * 1000).getMinutes()
const timeArrival = (new Date(wagon.departure.to.datetime * 1000).getHours() < 10 ? '0' : '') + 
  new Date(wagon.departure.to.datetime * 1000).getHours() + ':' +  (new Date(wagon.departure.to.datetime * 1000).getMinutes() < 10 ? '0' : '') +
  new Date(wagon.departure.to.datetime * 1000).getMinutes()
const saveCurrentTrain = (wag:TTicket) => {
  dispatch(saveTrain({
    _id: wag.departure._id,
    have_first_class: ticketArgs.have_first_class,
    have_fourth_class: ticketArgs.have_fourth_class,
    have_second_class: ticketArgs.have_second_class,
    have_third_class: ticketArgs.have_third_class,
    have_wifi: ticketArgs.have_wifi,
    have_air_conditioning: ticketArgs.have_air_conditioning,
    timeDepart:  timeDeparture,
    timeArriv : timeArrival,
    cityFrom: wagon.departure.from.city.name[0].toUpperCase() + wagon.departure.from.city.name.slice(1),
    cityTo: wagon.departure.to.city.name[0].toUpperCase() + wagon.departure.to.city.name.slice(1),
    railwayFrom: wagon.departure.from.railway_station_name + ' вокзал',
    railwayTo: wagon.departure.to.railway_station_name + ' вокзал',
    durationH: moment.unix(wagon.departure.duration).utc().hours(),
    durationM: moment.unix(wagon.departure.duration).utc().minutes(),
    trainName: wag.departure.train.name,
  }))
  navigate('/chooseseats')
}

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
    <div className = {styles.ticketDirectTime }>
      <div className = { styles.ticketDirectTimeFrom }>
          <h2>{timeDeparture}</h2>
          <div className = {styles.ticketDirectTimeFromCity}>{wagon.departure.from.city.name[0].toUpperCase() + wagon.departure.from.city.name.slice(1)}</div>
          <div className = {styles.ticketDirectTimeFromStation}>{wagon.departure.from.railway_station_name} вокзал</div>
      </div>
      <div className = {styles.ticketDirectTimeFromDuration}>
        <div>
          {moment
            .unix(wagon.departure.duration)
            .utc()
            .format("HH:mm")}
        </div>
        <div className = {styles.ticketDirectTimeDurationFromVector}></div>
      </div>
      <div className = {styles.ticketDirectTimeTo}>
          <h2>{timeArrival}</h2>
          <div className = {styles.ticketDirectTimeToCity}>{wagon.departure.to.city.name[0].toUpperCase() + wagon.departure.to.city.name.slice(1)}</div>
          <div className = {styles.ticketDirectTimeToStation}>{wagon.departure.to.railway_station_name} вокзал</div>
      </div>
    </div>
    <div className = {styles.ticketPrices}>
      <div className = {styles.ticketPricesWrap}>
        {wagon.departure.available_seats_info.fourth ? 
          <div className = {styles.ticketPricesItem}>
            <span className = {styles.ticketPricesItemSeat}>Сидячий</span>
            <span className = {styles.ticketPricesItemSeatCount}>{wagon.departure.available_seats_info.fourth}</span>
            <span className = {styles.ticketPricesItemSeatArticle}>от</span>
            <span className = {styles.ticketPricesItemSeatPrice}>{wagon.departure.price_info.fourth.top_price}</span>
            <span className = {styles.ticketPricesItemSeatCurrency}>&#8381;</span>
          </div> : null}
        {wagon.departure.available_seats_info.third ? 
          <div className = {styles.ticketPricesItem}>
            <span className = {styles.ticketPricesItemSeat}>Плацкарт</span> 
            <span className = {styles.ticketPricesItemSeatCount}>{wagon.departure.available_seats_info.third}</span>
            <span className = {styles.ticketPricesItemSeatArticle}>от</span>
            <span className = {styles.ticketPricesItemSeatPrice}>{wagon.departure.price_info.third.top_price}</span>
            <span className = {styles.ticketPricesItemSeatCurrency}>&#8381;</span>
          </div>  : null}
        {wagon.departure.available_seats_info.second ? 
          <div className = {styles.ticketPricesItem}>
            <span className = {styles.ticketPricesItemSeat}>Купе</span>
            <span className = {styles.ticketPricesItemSeatCount}>{wagon.departure.available_seats_info.second}</span>
            <span className = {styles.ticketPricesItemSeatArticle}>от</span>
            <span className = {styles.ticketPricesItemSeatPrice}>{wagon.departure.price_info.second.top_price}</span>
            <span className = {styles.ticketPricesItemSeatCurrency}>&#8381;</span>
          </div> : null}
        {wagon?.departure.available_seats_info.first ? 
          <div className = {styles.ticketPricesItem}>
            <span className = {styles.ticketPricesItemSeat}>Люкс</span>
            <span className = {styles.ticketPricesItemSeatCount}>{wagon.departure.available_seats_info.first}</span>
            <span className = {styles.ticketPricesItemSeatArticle}>от</span>
            <span className = {styles.ticketPricesItemSeatPrice}>{wagon.departure.price_info.first.top_price}</span>
            <span className = {styles.ticketPricesItemSeatCurrency}>&#8381;</span>
          </div> : null}
      </div>
      <div className = {styles.ticketPricesFacilitiesWrap}>
        <div className = {styles.ticketPricesFacilities}>
          {wagon.departure.have_air_conditioning ? <div className = {styles.ticketPricesFacilitiesAir}></div>: null}
          {wagon.departure.is_express ? <div className = {styles.ticketPricesFacilitiesExpress}></div>: null}
          {wagon.departure.have_wifi ? <div className = {styles.ticketPricesFacilitiesWifi}></div>: null}
          {wagon.departure.have_first_class ? <div className = {styles.ticketPricesFacilitiesFirst}></div>: null}
          {wagon.departure.have_second_class ? <div className = {styles.ticketPricesFacilitiesSecond}></div>: null}
          {wagon.departure.have_third_class ? <div className = {styles.ticketPricesFacilitiesThird}></div>: null}
          {wagon.departure.have_fourth_class ? <div className = {styles.ticketPricesFacilitiesFourth}></div>: null}
        </div>
        <button type="button" className={`${styles.ticketPricesBtn} btn`} onClick={() => saveCurrentTrain(wagon)}>Выбрать места</button>
      </div>
      
    </div>
   </li>
  )
}

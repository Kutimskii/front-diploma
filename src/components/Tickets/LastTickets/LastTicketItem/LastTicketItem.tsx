import styles from './lastItem.module.css'
import { TTicket } from '../../../../types';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveTrain } from '../../../../store/slicers/currentTrain';
import moment from 'moment';
import { RootState } from '../../../../store/store';
export const LastTicketItem:React.FunctionComponent<{wagon:TTicket}> = ({wagon}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const ticketArgs = useSelector((state:RootState) => state.saveArgs)
  const fromDateTime =  Number(wagon.departure.from.datetime);
  const toDateTime =  Number(wagon.departure.to.datetime);
  const timeDeparture = (new Date(fromDateTime  * 1000).getHours() < 10 ? '0' : '') + 
    new Date(fromDateTime * 1000).getHours() + ':' + 
    (new Date(fromDateTime * 1000).getMinutes() < 10 ? '0': '') + new Date(fromDateTime * 1000).getMinutes()
  const timeArrival = (new Date(toDateTime * 1000).getHours() < 10 ? '0' : '') + 
    new Date(toDateTime * 1000).getHours() + ':' +  (new Date(toDateTime * 1000).getMinutes() < 10 ? '0' : '') +
    new Date(toDateTime * 1000).getMinutes()
  const saveCurrentTrain = (wag:TTicket) => {
    const currentWag = JSON.parse(JSON.stringify(wag))
    currentWag.departure.from.timeDeparture = timeDeparture;
    currentWag.departure.to.timeArrival = timeArrival;
    currentWag.departure.durationH = moment.unix(wag.departure.duration).utc().hours(),
    currentWag.departure.durationM =  moment.unix(wag.departure.duration).utc().minutes(),
    currentWag.departure.from.city.name = wag.departure.from.city.name[0].toUpperCase() + wag.departure.from.city.name.slice(1)
    currentWag.departure.to.city.name = wag.departure.to.city.name[0].toUpperCase() + wag.departure.to.city.name.slice(1)
    currentWag.departure.from.railway_station_name = wag.departure.from.railway_station_name + ' вокзал',
    currentWag.departure.to.railway_station_name = wag.departure.to.railway_station_name + ' вокзал',
    navigate('/chooseseats')
  }

  return (
    <li className={styles.ticket} onClick={() => saveCurrentTrain(wagon)}>
      <div>
        <div className = {styles.ticketDirectCities}>
            <div className = {styles.ticketDirectCitiesFrom}>{wagon.departure.from.city.name[0].toUpperCase() +
            wagon.departure.from.city.name.slice(1)}</div>
            <div className = {styles.ticketDirectCitiesTo}>{wagon.departure.to.city.name[0].toUpperCase() + 
            wagon.departure.to.city.name.slice(1)}</div>
        </div>
        <div className = {styles.ticketDirectRailways}>
          <div className = {styles.ticketDirectTimeFromStation}>{wagon.departure.from.railway_station_name} вокзал</div>
          <div className = {styles.ticketDirectTimeToStation}>{wagon.departure.to.railway_station_name} вокзал</div>
        </div>
      </div>
      <div className = {styles.ticketFacilities}>
        <div className = {styles.ticketPricesFacilities}>
            {wagon.departure.have_air_conditioning ? <div className = {styles.ticketPricesFacilitiesAir}></div>: null}
            {wagon.departure.is_express ? <div className = {styles.ticketPricesFacilitiesExpress}></div>: null}
            {wagon.departure.have_wifi ? <div className = {styles.ticketPricesFacilitiesWifi}></div>: null}
            {wagon.departure.have_first_class ? <div className = {styles.ticketPricesFacilitiesFirst}></div>: null}
            {wagon.departure.have_second_class ? <div className = {styles.ticketPricesFacilitiesSecond}></div>: null}
            {wagon.departure.have_third_class ? <div className = {styles.ticketPricesFacilitiesThird}></div>: null}
            {wagon.departure.have_fourth_class ? <div className = {styles.ticketPricesFacilitiesFourth}></div>: null}
        </div>
        <div className = {styles.minPrice}>
          <span className = {styles.ticketPricesItemSeatArticle}>от</span>
          <span className = {styles.ticketPricesItemSeatPrice}>{wagon.min_price}</span>
          <span className = {styles.ticketPricesItemSeatCurrency}> &#8381;</span>
        </div>
      </div>
    </li> 
  )
}
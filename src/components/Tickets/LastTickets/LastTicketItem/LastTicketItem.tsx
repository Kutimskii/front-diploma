import styles from './lastItem.module.css'
import { useGetLastTicketsQuery } from '../../../../store/slicers/tickets';
import { TTicket } from '../../../../types';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveTrain } from '../../../../store/slicers/currentTrain';
import { RootState } from '../../../../store/store';
export const LastTicketItem:React.FunctionComponent<{wagon:TTicket}> = ({wagon}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const ticketArgs = useSelector((state:RootState) => state.saveArgs)
  const durationHours  = Math.floor(wagon.departure.duration / 3600);
const durationMinutes = (wagon.departure.duration - (durationHours * 3600)) / 60
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
      durationH: durationHours,
      durationM: durationMinutes
    }))
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
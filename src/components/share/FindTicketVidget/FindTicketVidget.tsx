import styles from "./findTicketVidget.module.css";
import React from "react";
import ru from 'antd/es/date-picker/locale/ru_RU';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../../store/store";
import { useState } from "react";
import { saveSearch } from "../../../store/slicers/findFields";
import { saveArgs } from "../../../store/slicers/tickets";
import 'dayjs/locale/ru';
import { Directions } from "./Directions/Directions";
import { DirectionsDate } from "./DirectionsDate/DirectionsDate";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { Dayjs } from "dayjs";
ru.lang.monthFormat="MMMM";
export const FindTicketVidget:React.FunctionComponent<{slogan:boolean | string}> = ({slogan}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filledFields = useSelector((state:RootState) => state.searchTickets);
  const [directFrom, setDirectFrom ] = useState(filledFields.directionFrom ? filledFields.directionFrom : '');
  const [directTo, setDirectTo ] = useState(filledFields.directionTo ? filledFields.directionTo : '');
  const [directFromId, setDirectFromId ] = useState(filledFields.directionFromId ? filledFields.directionFromId : '');
  const [directToId, setDirectToId ] = useState(filledFields.directionToId ? filledFields.directionToId : '');
  const [dateFrom, setDateFrom ] = useState<Dayjs | null>(filledFields.dateFrom ? dayjs(filledFields.dateFrom) : null);
  const [dateTo, setDateTo ] = useState<Dayjs | null>(filledFields.dateTo ? dayjs(filledFields.dateTo) : null);
  const [directFromFocus, setDirectFromFocus ] = useState(false);
  const [directToFocus, setDirectToFocus ] = useState(false);
  const saveDirect = (name:string, id:string) => {
    directFromFocus ? setDirectFrom(name.toUpperCase()) : setDirectTo(name.toUpperCase());
    directFromFocus ? setDirectFromId(id) : setDirectToId(id);
  }
  function formatDate (date:Dayjs | null) {
    return `${date!.toDate().getFullYear()}-${date!.toDate().getMonth() + 1  < 10 ? '0' + (date!.toDate().getMonth() + 1) :
    date!.toDate().getMonth() + 1}-${date!.toDate().getDate() < 10 ? '0' + date!.toDate().getDate() : date!.toDate().getDate()}`
  }
  const findTickets = (e: React.FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      navigate('/choosetrain')
      dispatch(saveSearch({
        directionFrom: directFrom,
        directionTo: directTo,
        directionFromId: directFromId,
        directionToId: directToId,
        dateFrom: dateFrom ? formatDate (dateFrom) : dateFrom,
        dateTo: dateTo ? formatDate (dateTo) : dateTo,
      }))
      dispatch(saveArgs({
        from_city_id: directFromId,
        to_city_id: directToId,
        date_start: dateFrom ? formatDate (dateFrom) : dateFrom,
        date_end: dateTo ? formatDate (dateTo) : dateTo,
      }))
    }
  return (
    <div className={slogan ? styles.vidget_container : styles.vidget_container_alt}>
      <form className={slogan ? styles.form_find_ticket : styles.form_find_ticket}>
        <div className={slogan ? styles.vidget_input_container : styles.vidget_input_container_alt}>
          <div className={styles.vidget_direction_container}>
            <p className={styles.vidget_direction_title}>Направление</p>
            <Directions
              directFrom = {directFrom}
              directTo = {directTo}
              directFromId = {directFromId}
              directToId = {directToId}
              directFromFocus = {directFromFocus}
              directToFocus = {directToFocus}
              setDirectFrom = {setDirectFrom}
              setDirectTo={setDirectTo}
              saveDirect = {saveDirect}
              setDirectFromFocus = {setDirectFromFocus}
              setDirectToFocus={setDirectToFocus}
              setDirectFromId = {setDirectFromId}
              setDirectToId = {setDirectToId}
            />
          </div>
          <DirectionsDate
            dateFrom = {dateFrom}
            dateTo={dateTo}
            setDateFrom={setDateFrom}
            setDateTo={setDateTo}
          />
        </div>
        <div className={styles.vidget_btn_wrap}>
            <button type="button" className={`${styles.btn_find_ticket} btn`} onClick={(e)=> findTickets(e)}>НАЙТИ БИЛЕТЫ</button>
        </div>
      </form>
    </div>
    
  )
}
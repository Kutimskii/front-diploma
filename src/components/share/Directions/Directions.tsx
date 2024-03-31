import styles from "./directions.module.css"
import ru from 'antd/es/date-picker/locale/ru_RU'
import { useGetCitiesQuery } from "../../../store/slicers/tickets";
import { ReactNode, useEffect, useState } from "react";
import { TDirectionProps } from "../../../types";
ru.lang.monthFormat="MMMM";
export const Directions:React.FunctionComponent<TDirectionProps> = (
  {directFrom, directTo,
   directFromId, directToId,
   directToFocus, directFromFocus,
   setDirectFrom, setDirectFromFocus, 
   setDirectToFocus, setDirectTo,
   saveDirect, setDirectFromId,
   setDirectToId}) => {
    const [reverseDirect, setReverse ] = useState<boolean>(false);
    const {data} = useGetCitiesQuery(directFromFocus  && directFrom.length >= 1 ? 
    directFrom : directToFocus && directTo.length >= 1 ? directTo : 'м');
    const reverse = () => {
      setReverse(prev => !prev);
    }
    useEffect(()=> {
      setDirectFrom(directTo)
      setDirectTo(directFrom)
      setDirectFromId(directToId)
      setDirectToId(directFromId)
    },[reverseDirect])
    
  return (
    <div className={styles.direction_wrap}>
    <div className={styles.input_direction_from_wrap}>
      <input type="text" placeholder="Откуда" name="from" id="direction_from"
        onChange = {(e) => e.target.value !== ' ' ? setDirectFrom(e.target.value) : null}
        value={directFrom} 
        className={styles.input_direction}
        onFocus={()=> setDirectFromFocus((prev)=> !prev)}
        onBlur={()=> setDirectFromFocus((prev)=> !prev)}/>
      <ul  className={directFromFocus ? styles.input_direction_to_listCities : styles.input_direction_to_listCities_disabled}>
        {data?.map((c, index):ReactNode => <li key={index} className={styles.input_direction_to_listCities_item} 
        onMouseDown={()=> saveDirect(c.name, c._id)}>
        {c.name.toUpperCase()}</li>)}
      </ul>
    </div>
    <button type="button" className={styles.btn_change_direction} onClick={reverse}>
      <span className={reverseDirect ? `${styles.icon_change} ${styles.icon_change_reverse}` : styles.icon_change}></span>
    </button>
    <div className={styles.input_direction_to_wrap} >
      <input type="text" placeholder="Куда" name="to" id="direction_to"
       onChange = {(e) => e.target.value !== ' ' ? setDirectTo(e.target.value) : null}
       value={directTo}
       className={styles.input_direction}
       onFocus={()=> setDirectToFocus((prev)=> !prev)}
       onBlur={()=> setDirectToFocus((prev)=> !prev)}/>
      <ul  className={directToFocus ? styles.input_direction_to_listCities : styles.input_direction_to_listCities_disabled}>
        {data?.map((c, index):ReactNode => <li key={index} className={styles.input_direction_to_listCities_item} 
        onMouseDown={()=>saveDirect(c.name, c._id)}>
        {c.name.toUpperCase()}</li>)}
      </ul>
    </div>
  </div>
  )
}
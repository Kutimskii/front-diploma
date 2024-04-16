import styles from './tickets.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useGetTicketsQuery, useGetLastTicketsQuery } from '../../store/slicers/tickets';
import { Loader } from '../share/Loader/Loader';
import { saveArgs } from '../../store/slicers/tickets';
import { TicketsFilter } from '../share/TicketsFilter/TicketsFilter';
import { useState, useEffect } from 'react';
import { TSortObj } from '../../types';
import { useGetSeatsQuery } from '../../store/slicers/seats';
import React from "react";
import { TicketsPages } from '../share/TicketsPages/TicketsPages';
import { TicketTrain } from './TicketTrain/TicketTrain';
import { LastTickets } from './LastTickets/LastTickets';
export const Tickets:React.FunctionComponent = () => {
  const dispatch  = useDispatch();
  const sortObj:TSortObj = {
    date : 'времени',
    price_min: 'стоимости',
    duration: 'длительности'
  }
 
  const [sortType, setSortType] = useState<string>('date');
  const [sortListType, setSortListType] = useState<boolean>(false);
  const [sortLimit, setSortLimit] = useState<number>(5);
  const [offset, setOffset] = useState<number>(0);
  const changeSortType = (e : React.MouseEvent<HTMLLIElement> ) => {
    const text = ((e.target as HTMLLIElement).outerText)
    const type = Object.keys(sortObj).find(k => sortObj[k as keyof TSortObj] === text)!
    setSortType(type)
    setSortListType(prev => !prev)
  }

  const changeSortLimit = (e : React.MouseEvent<HTMLLIElement>) => {
    setSortLimit(+(e.target as HTMLLIElement).outerText);
  }
  const filledFields = useSelector((state:RootState) => state.searchTickets);
  const ticketArgs = useSelector((state:RootState) => state.saveArgs)
  const {data, isLoading} = useGetTicketsQuery(ticketArgs)
  useEffect(()=> {
    dispatch(saveArgs({
      from_city_id: filledFields.directionFromId,
      to_city_id: filledFields.directionToId,
      date_start: filledFields.dateFrom,
      date_end: filledFields.dateTo,
      limit: sortLimit,
      sort: sortType,
      offset: offset
    }))
  },[sortType,sortLimit, offset])
  return (
    <section className={styles.chooseTickets}>
      { isLoading ? <Loader/> : 
      <main className={styles.tickets}>
        <div>
          <TicketsFilter/>
          <LastTickets/>
        </div>
        <div className={styles.findedTickets}>
          <div className={styles.findedTicketsFromServer}>
            <div className={styles.findedTicketsCountFilter}>
              <p className={styles.findedTicketsTotalCount}>найдено:{data?.total_count}</p>
              <div className={styles.findedTicketsSort}>
                <div className={styles.findedTicketsSortTypeTitleSort}>сортировать по:
                  <span onClick={() => setSortListType(prev => !prev)}>{sortObj[sortType as keyof TSortObj]}</span>
                  <ul className={sortListType ? styles.findedTicketsSortType : styles.findedTicketsSortTypeDisabled}>
                    <li className={styles.findedTicketsSortTypeItem} 
                    onClick={(e: React.MouseEvent<HTMLLIElement>) => changeSortType(e)}>времени</li>
                    <li className={styles.findedTicketsSortTypeItem} 
                    onClick={(e: React.MouseEvent<HTMLLIElement>) => changeSortType(e)}>стоимости</li>
                    <li className={styles.findedTicketsSortTypeItem} 
                    onClick={(e: React.MouseEvent<HTMLLIElement>) => changeSortType(e)}>длительности</li>
                  </ul>
                </div>
                <div className={styles.findedTicketsSortCountTitle}>показывать по:
                  <ul className={styles.findedTicketsSortCount}>
                    <li className={sortLimit === 5 ? styles.findedTicketsSortCountItemActive:styles.findedTicketsSortCountItem} 
                    onClick={(e: React.MouseEvent<HTMLLIElement>) => changeSortLimit(e)}>5</li>
                    <li className={sortLimit === 10 ? styles.findedTicketsSortCountItemActive:styles.findedTicketsSortCountItem}
                    onClick={(e: React.MouseEvent<HTMLLIElement>) => changeSortLimit(e)}>10</li>
                    <li className={sortLimit === 20 ? styles.findedTicketsSortCountItemActive:styles.findedTicketsSortCountItem}
                    onClick={(e: React.MouseEvent<HTMLLIElement>) => changeSortLimit(e)}>20</li>
                  </ul>
                </div>
              </div>
            </div>
            <ul className={styles.findedTicketsFromServerWrap}>
              {data?.items ? data?.items.map((item, index: number) => <TicketTrain wagon = {item} key = {index} />) : null}
            </ul>
          </div>
          <TicketsPages
            changeOffset = {setOffset}
            totalCount = {data?.total_count}
            limit = {sortLimit}
          />
        </div>
        
      </main>}

    </section>
  )

  }
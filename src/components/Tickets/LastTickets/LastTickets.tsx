import styles from './lastTickets.module.css';
import { LastTicketItem } from './LastTicketItem/LastTicketItem';
import { useGetLastTicketsQuery } from '../../../store/slicers/tickets';
import { TTicket } from '../../../types';
export const LastTickets:React.FunctionComponent = () => {
  const{data}  = useGetLastTicketsQuery();
  return (
    <aside className={styles.lastTickets}>
      <h2 className={styles.lastTicketsHeader}>ПОСЛЕДНИЕ БИЛЕТЫ</h2>
      <ul className={styles.lastTicketsWrap}>
        {data?.length! > 0 ? data?.map((item: TTicket, index: number) => <LastTicketItem wagon = {item} key = {index} />) : null}
      </ul>
    </aside>
  )
}
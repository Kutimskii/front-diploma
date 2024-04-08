import styles from './lastTickets.module.css';

import { useGetLastTicketsQuery } from '../../../store/slicers/tickets';
export const Tickets:React.FunctionComponent = () => {
  const{data:last}  = useGetLastTicketsQuery();
  console.log(last)
  return (
    <></>
  )
}
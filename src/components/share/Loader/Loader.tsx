import loaderImg from '../../../img/downLoad_animation.gif'
import styles from './loader.module.css'
export const Loader:React.FunctionComponent = () => {
  return(
    <div className={styles.loader}>
      <img src={`${loaderImg}`} alt="Loading..." width={'100%'}/>
    </div>
  )
}
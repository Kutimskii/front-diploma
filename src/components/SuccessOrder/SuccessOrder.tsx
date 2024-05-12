
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from '../../store/store';
import styles from './succesOrder.module.css'
import sendTickets from '../../img/icons/sendTickets_icon.png'
import printTickets from '../../img/icons/printTickets_icon.png'
import conductor from '../../img/icons/checkTickets_icon.png'
import rating from '../../img/icons/rating_icon.png'
export default  function SuccessOrder() {
  const navigate = useNavigate();

  const { resultPrice } = useSelector((state:RootState) => state.savePassengers);
  const { payer } = useSelector((state:RootState) => state.addPayerData);

  const handleClick = () => {
    navigate('/');
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className={styles.successOrderWrapper}>
      <h1 className={styles.successOrderTitle}>Благодарим Вас за заказ!</h1>

      <div className={styles.successOrder}>
        <div className={styles.successOrderHeader}>
          <p className={styles.successOrderTitle}>№Заказа 285АА</p>

          <p className={styles.successOrderPrice}>
            сумма{' '}
            <span className={`${styles.successOrderValue} ${styles.currencyItem}`}>
              {resultPrice}
            </span>
            <span className={styles.successOrderCurrency}>&#8381;</span>
          </p>
        </div>

        <div className={styles.successOrderInstructions}>
          <div className={styles.successOrderInstruction}>
            <div className={styles.successOrderInstructionIcon}>
              <img
                className={styles.successOrderInstructionImage}
                src={sendTickets}
                alt="билеты будут отправлены
                    на ваш e-mail"
              />
            </div>

            <p className={styles.successOrderInstructionText}>
              билеты будут<br />
              отправлены<br />
              на ваш <strong>e-mail</strong>
            </p>
          </div>

          <div className={styles.successOrderInstruction}>
            <div className={styles.successOrderInstructionIcon}>
              <img
                className={styles.successOrderInstructionImage}
                src={printTickets}
                alt="распечатайте
                    и сохраняйте билеты
                    до даты поездки"
              />
            </div>

            <p className={styles.successOrderInstructionText}>
              <strong>распечатайте </strong><br />
              и сохраняйте билеты<br />
              до даты поездки
            </p>
          </div>

          <div className={styles.successOrderInstruction}>
            <div className={styles.successOrderInstructionIcon}>
              <img
                className={styles.successOrderInstructionImage}
                src={conductor}
                alt="предъявите распечатанные
                    билеты при посадке"
              />
            </div>

            <p className={styles.successOrderInstructionText}>
              <strong>предъявите </strong><br />
              распечатанные<br />
              билеты при посадке
            </p>
          </div>
        </div>

        <div className={styles.successOrderMessage}>
          <h3 className={styles.successOrderMessageTitle}>
            {payer.name} {payer.lastname}!
          </h3>

          <p className={styles.successOrderMessageText}>
            Ваш заказ успешно оформлен.<br />
            В ближайшее время с вами свяжется наш оператор для подтверждения.
          </p>

          <p className={`${styles.successOrderMessageText} ${styles.thanks}`}>
            Благодарим Вас за оказанное доверие и желаем приятного путешествия!
          </p>
        </div>

        <div className={styles.successOrderFooter}>
          <div className={styles.successOrderFooterForm}>
            <p className={styles.successOrderFooterTitle}>Оценить сервис</p>

            <div className={styles.successOrderFooterIcons}>
              <img
                className={styles.successOrderFooterIcon}
                src={rating}
                alt="Оценить сервис"
              />
            </div>
          </div>

          <button
            type="button"
            className={styles.successOrderFooterButton}
            onClick={handleClick}
          >
            Вернуться на главную
          </button>
        </div>
      </div>
    </div>
  );
}
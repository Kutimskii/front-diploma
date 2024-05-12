import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from '../../../store/store';
import { addPayerData } from '../../../store/slicers/payer';
import styles from './orderFrom.module.css'
export const OrderForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { payer } = useSelector((state:RootState) => state.addPayerData);

  const [form, setForm] = useState({
    surname: payer?.surname || '',
    name: payer?.name || '',
    lastname: payer?.lastname || '',
    phone: payer?.phone || '',
    email: payer?.email || '',
    pay: payer?.pay || '',
  });
  const [disabled, setDisabled] = useState(true);


  useEffect(() => {
    setDisabled(true);
    if (
      !(
        form.surname &&
        form.name &&
        form.lastname &&
        form.phone &&
        form.email &&
        form.pay
      )
    )
      return;

    setDisabled(false);
  }, [form]);

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadio = (event:React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, pay: event.target.id }));
  };

  const handleClick = (event:React.FormEvent) => {
    event.preventDefault();
    dispatch(addPayerData({ data: form }));
    navigate('/order/verification/');
  };

  const onChangePhone = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (value.length === 1) {
      setForm((prev) => ({ ...prev, [name]: `+7${value}` }));
      return;
    }

    if (value.length === 2) {
      setForm((prev) => ({ ...prev, [name]: '' }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: `+7${value.substring(2)}` }));
  };

  return (
    
    <section className={`${styles.payForm} ${styles.orderPayForm}`}>
      <form>
        <div className={styles.payFormForm} id="payform">
          <h4 className={styles.payFormTitle}>Персональные данные</h4>

          <div className={styles.payFormWrapper}>
            <div className={`${styles.payFormControls} ${styles.payFormControlsName}`}>
              <label className={styles.payFormLabel} htmlFor="surname">
                Фамилия
                <input
                  className={styles.payFormField}
                  id="surname"
                  name="surname"
                  type="text"
                  value={form.surname}
                  onChange={handleChange}
                />
              </label>

              <label className={styles.payFormLabel} htmlFor="name">
                Имя
                <input
                  className={styles.payFormField}
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                />
              </label>

              <label className={styles.payFormLabel} htmlFor="last-name">
                Отчество
                <input
                  className={styles.payFormField}
                  id="last-name"
                  name="lastname"
                  type="text"
                  value={form.lastname}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className={`${styles.payFormControls} ${styles.payFormControlsContacts}`}>
              <label
                className={`${styles.payFormLabel} ${styles.payFormLabelContact}`}
                htmlFor="phone"
              >
                Контактный телефон
                <input
                  className={`${styles.payFormField} ${styles.payFormFieldContact}`}
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+7 ___ ___ __ __"
                  value={form.phone}
                  maxLength={Number("12")}
                  onChange={onChangePhone}
                  required
                />
              </label>

              <label
                className={`${styles.payFormLabel} ${styles.payFormLabelContact}`}
                htmlFor="email"
              >
                E-mail
                <input
                  className={`${styles.payFormField} ${styles.payFormFieldContact}`}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="inbox@gmail.ru"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
          </div>

          <section className={styles.payFormPayment}>
            <h4 className={`${styles.payFormTitle} ${styles.payFormTitleRepeat}`}>Способ оплаты</h4>

            <div className={styles.payFormControlsGroup}>
              <input
                className={styles.payFormFieldControl}
                type="radio"
                name="payment"
                id="online"
                checked={form.pay === 'online'}
                onChange={handleRadio}
              />

              <label
                className={`${styles.payFormLabel} ${styles.payFormLabelRadio}`}
                htmlFor="online"
              >
                Онлайн
              </label>

              <ul className={styles.payFormPayList}>
                <li className={styles.payFormPayItem}>
                  Банковской<br />
                  картой
                </li>

                <li className={styles.payFormPayItem}>PayPal</li>
                <li className={styles.payFormPayItem}>Visa QIWI Wallet</li>
              </ul>
            </div>

            <div className={styles.payFormControlsGroup}>
              <input
                className={styles.payFormFieldControl}
                type="radio"
                name="payment"
                id="cash"
                checked={form.pay === 'cash'}
                onChange={handleRadio}
              />

              <label
                className={`${styles.payFormLabel} ${styles.payFormLabelRadio}`}
                htmlFor="cash"
              >
                Наличными
              </label>
            </div>
          </section>
        </div>

        <div className={styles.payFormButtons}>
          <button
            type="submit"
            className={`${styles.payFormButton}`}
            form="payform"
            onClick={handleClick}
            disabled={disabled}
            
          >
            Купить билеты
          </button>
        </div>
      </form>
    </section>
  );
}
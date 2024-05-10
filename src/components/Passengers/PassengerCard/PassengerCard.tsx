import { FormEvent, useState } from 'react'
import { RootState } from '../../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { addPassenger } from '../../../store/slicers/passengersData'
import { TPassengersData } from '../../../store/slicers/passengersData'
import classNames from 'classnames/bind'
import validateDoc from './validateDoc'
import moment from 'moment'
import styles from './passengerCard.module.css'
const cn = classNames.bind(styles)
export const PassengerCard:React.FunctionComponent <{seat:{}, number: number, type: string}> = ({seat, number, type}) => {
  
  const dispatch = useDispatch();
  const { passengersData } = useSelector((state:RootState) => state.addPassenger);
  const [activeCard, setActiveCard] = useState(true)
  const currrentPassenger = passengersData.find((e:TPassengersData) => e.number === number)
  const [form, setForm] = useState({
    number,
    type,
    surname: currrentPassenger ? currrentPassenger.data.surname : '',
    name: currrentPassenger ? currrentPassenger.data.name : '',
    lastname: currrentPassenger ? currrentPassenger.data.lastname : '',
    sex: currrentPassenger ? currrentPassenger.data.sex : '',
    birth: currrentPassenger ? currrentPassenger.data.birth : '',
    series: currrentPassenger ? currrentPassenger.data.series : '',
    document: currrentPassenger ? currrentPassenger.data.document : '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [documentType, setDocumentType] = useState(
    type === 'adult' || (currrentPassenger && currrentPassenger.series)
      ? 'passport'
      : 'certificate'
  );
  const passengerToggleCls = cn({
    passengerToggle: true,
    hide: !activeCard
  })
  const passengerFormCls = cn({
    passengerForm: true,
    activeForm: activeCard,
    formHide: !activeCard
  })
  const checkboxControlCls= cn ({
    passengerFormControls: true,
    passengerFormSection: true,
    checkboxControl: true
  })
  const passengerDocumentCls = cn({
    passengerFormField: true,
     passengerFormList : true,
     passengerFormListPassport: documentType === 'passport',
     passengerFormListCertificate: documentType === 'certificate',
  })
  const passengerFormFooterCls = cn({
     passengerFormFooter: true,
     passengerFormSection: true,
     done: !!currrentPassenger,
     warning:errorMessage
  })
  const manageMessages = (text:string) => {
    setErrorMessage(text);
    setTimeout(() => setErrorMessage(''), 2 * 1000);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, sex: event.target.dataset.id! }));
  };
  const onSubmit = (e:React.FormEvent) => {
    e.preventDefault();

    if (!(form.surname.trim() && form.name.trim() && form.lastname.trim())) {
      manageMessages('Необходимо ввести фамилию, имя и отчество пассажира');
      return;
    }
    if (!form.sex) {
      manageMessages('Выберите пол пассажира');
      return;
    }
    if (!form.birth) {
      manageMessages('Укажите дату рождения в формате ДД.ММ.ГГГГ');
      return;
    }
    if (
      documentType === 'certificate' &&
      !validateDoc(documentType, form.document)
    ) {
      manageMessages(
        'Номер свидетельства о рожденни указан некорректно Пример: VIII-ЫП-123456'
      );
      return;
    }
    if (
      documentType === 'passport' &&
      (!(form.series && validateDoc('series', form.series)) ||
        !validateDoc(documentType, form.document))
    ) {
      manageMessages('Номер или серия паспорта введены некорректно');
      return;
    }
    setErrorMessage('');
    dispatch(addPassenger({ number, data: form }));
  };
  return (
      <form className={styles.passengerForm}>
        <div className={styles.passengerHeader}>
          <div className={styles.passengerToggleWrap}>
            <div className={passengerToggleCls} onClick={() => setActiveCard(prev => !prev)}></div>
            <h2 className={styles.passengerTitle}>Пассажир {number}</h2>
          </div>
          <button type="button" className={styles.passengerDeleteBtn } />
        </div>
        <div className={passengerFormCls}>
          <div className={styles.passengerFormSection}>
            <select
              className={`${styles.passengerFormField} ${styles.passengerFormList}`}
              defaultValue={type}
              disabled
              >
              <option className = {styles.passengerFormItem} value="adult">Взрослый</option>
              <option className = {styles.passengerFormItem} value="child">Детский</option>
            </select>
            <div className = {styles.passengerFormControls}>
              <label
                className = {styles.passengerFormLabel}
                htmlFor={`surname${number}`}
              >
                Фамилия
                <input
                  className={`${styles.passengerFormField} ${styles.passengerFormFieldName}`}
                  id={`surname${number}`}
                  type="text"
                  name="surname"
                  value={form.surname}
                  onChange={handleChange}
                />
              </label>
              <label
                className = {styles.passengerFormLabel}
                htmlFor={`name${number}`}
              >
                Имя
                <input
                  className={`${styles.passengerFormField} ${styles.passengerFormFieldName}`}
                  id={`name${number}`}
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
              </label>

              <label
                className = {styles.passengerFormLabel}
                htmlFor={`lastname${number}`}
              >
                Отчество
                <input
                  className={`${styles.passengerFormField} ${styles.passengerFormFieldName}`}
                  id={`lastname${number}`}
                  type="text"
                  name="lastname"
                  value={form.lastname}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div className = {`${styles.passengerFormControls} ${styles.passengerFormSection}`}>
            <div className = {styles.passengerFormRadioGroup}>
              <p className = {styles.passengerFormLabel}>Пол</p>
              <div className = {styles.passengerFormRadioControls}>
                <input
                  className = {styles.passengerFormRadioField}
                  id={`male${number}`}
                  data-id="male"
                  name={`sex${number}`}
                  type="radio"
                  checked={form.sex === 'male'}
                  onChange={handleRadio}
                />

                <label
                  className= {`${styles.passengerFormRadioLabel} ${styles.passengerFormRadioLabelMale}`}
                  htmlFor={`male${number}`}
                >
                  М
                </label>

                <input
                  className = {styles.passengerFormRadioField}
                  id={`female${number}`}
                  data-id="female"
                  name={`sex${number}`}
                  type="radio"
                  checked={form.sex === 'female'}
                  onChange={handleRadio}
                />

                <label
                  className= {`${styles.passengerFormRadioLabel} ${styles.passengerFormRadioLabelFemale}`}
                  htmlFor={`female${number}`}
                >
                  Ж
                </label>
              </div>
            </div>

            <label
              className={styles.passengerFormLabel}
              htmlFor={`birth${number}`}
            >
              Дата рождения
              <input
                className={styles.passengerFormField}
                id={`birth${number}`}
                type="date"
                placeholder="ДД/ММ/ГГ"
                name="birth"
                value={form.birth}
                onChange={handleChange}
                max={moment().format('YYYY-MM-DD')}
              />
            </label>
          </div>
          <div className={checkboxControlCls}>
            <input className={styles.passengerFormCheckbox} type="checkbox" />

            <p className={styles.passengerFormCheckboxLabel}>
              ограниченная подвижность
            </p>
          </div>

          <div className={`${styles.passengerFormSection} ${styles.passengerFormDocument}`}>
              <label className={styles.passengerFormLabel}>
                Тип документа
                <select
                  className={passengerDocumentCls}
                  value={documentType}
                  onChange={(event) =>
                    setDocumentType(event.target.value)
                  }
                >
                  <option className={styles.passengerFormItem} value="passport">
                    Паспорт РФ
                  </option>

                  {type !== 'adult' ? (
                    <option
                      className={styles.passengerFormItem}
                      value="certificate"
                    >
                      Свидетельство о рождении
                    </option>
                  ) : (
                    ''
                  )}
                </select>
              </label>
              {documentType === 'passport' && (
                <label
                  className={styles.passengerFormLabel}
                  htmlFor={`series${number}`}
                >
                  Серия
                  <input
                    className={`${styles.passengerFormField} ${styles.passengerFormFieldDocument}`}
                    id={`series${number}`}
                    type="text"
                    placeholder="_ _ _ _"
                    name="series"
                    maxLength={Number("4")}
                    value={form.series}
                    onChange={handleChange}
                    pattern='^\d{4}$'
                  />
                </label>
              )}

              <label
                className={styles.passengerFormLabel}
                htmlFor={`document${number}`}
              >
                Номер
                <input
                  className={`${styles.passengerFormField} ${styles.passengerFormFieldDocument}`}
                  id={`document${number}`}
                  type="text"
                  placeholder={
                    documentType === 'passport'
                      ? '_ _ _ _ _ _'
                      : 'Пример, III-ET 545454'
                  }
                  maxLength={
                    documentType === 'passport'
                      ? Number("6")
                      : Number("13")
                  }
                  name="document"
                  value={form.document}
                  onChange={handleChange}
                />
              </label>
            {/* <div className={styles.passengerFormDocument}>

            </div> */}

          </div>
          <div className={passengerFormFooterCls}>
              {currrentPassenger && (<div className={styles.passengerFormMessage}>
                  <span className={styles.messageDoneImg}/>
                  <span className={styles.messageDone}>Готово</span>
                </div>)}
              {errorMessage ? (
                <div className={styles.passengerFormMessage}>
                  <span className={styles.messageWarningImg} />
                  <span className={styles.messageWarning}>{errorMessage}</span>
                </div>
              ) : (
                <button
                  type="button"
                  className={`btn ${styles.passengerFormButton}`}
                  onClick={onSubmit}
                >
                  Следующий пассажир
                </button>
              )}
            </div>
        </div>
      </form>)
}
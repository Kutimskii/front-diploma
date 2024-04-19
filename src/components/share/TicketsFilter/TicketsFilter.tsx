import styles from './ticketsFilter.module.css';
import { DatePicker } from 'antd';
import { saveArgs } from '../../../store/slicers/tickets';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import { Dayjs } from "dayjs";
import { RootState } from '../../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import 'dayjs/locale/ru';
import ru from 'antd/es/date-picker/locale/ru_RU';
import { ConfigProvider } from 'antd';
import { Switch, Slider } from 'antd';
import type { SliderSingleProps } from 'antd';
import { useState } from 'react';
export const TicketsFilter:React.FunctionComponent = () => {
  const filledFields = useSelector((state:RootState) => state.searchTickets);
  const argsFilter = useSelector((state:RootState) => state.saveArgs)
  console.log(argsFilter)
  const dispatch  = useDispatch();
  const [dateStart, setDateStart] = useState<Dayjs | null>(null);
  const [dateEnd, setDateEnd ] = useState<Dayjs | null>(null);
  const [departureThere, setDepartureThere] = useState<boolean>(false);
  const [departureFrom, setDepartureFrom] = useState<boolean>(false);
  const [visible, setVisible] = useState(['rgba(0, 0, 0, 0)','rgba(0, 0, 0, 0)'])
  const [wifi, setWifi] = useState<boolean>(argsFilter.have_wifi ? argsFilter.have_wifi : false);
  const [airCond, setAirCond] = useState<boolean>(argsFilter.have_air_conditioning ? argsFilter.have_air_conditioning : false);
  const [firstClass, setFirstClass] = useState<boolean>(argsFilter.have_first_class ? argsFilter.have_first_class : false);
  const [secondClass, setSecondClass] = useState<boolean>(argsFilter.have_second_class ? argsFilter.have_second_class : false);
  const [thirdClass, setThirdClass] = useState<boolean>(argsFilter.have_third_class ? argsFilter.have_third_class : false);
  const [fourthClass, setFourthClass] = useState<boolean>(argsFilter.have_fourth_class ? argsFilter.have_fourth_class : false);
  const [express, setExpress] = useState<boolean>(argsFilter.have_express ? argsFilter.have_express : false);
  const [price, setPrice] = useState<Array<number>>([1920,7000]);
  const [startDeparture, setStartDeparture] = useState<Array<number>>([0, 24]);
  const [startArrival, setStartArrival] = useState<Array<number>>([0, 24]);
  const [endDeparture, setEndDeparture] = useState<Array<number>>([0, 24]);
  const [endArrival, setEndArrival] = useState<Array<number>>([0, 24]);
  function formatDate (date:Dayjs | null) {
    return `${date!.toDate().getFullYear()}-${date!.toDate().getMonth() + 1  < 10 ? '0' + (date!.toDate().getMonth() + 1) :
    date!.toDate().getMonth() + 1}-${date!.toDate().getDate() < 10 ? '0' + date!.toDate().getDate() : date!.toDate().getDate()}`
  }
  useEffect(()=> {
    dispatch(saveArgs({
      from_city_id: filledFields.directionFromId,
      to_city_id: filledFields.directionToId,
      date_start: filledFields.dateFrom,
      date_end: filledFields.dateTo,
      date_start_arrival: dateStart ? formatDate (dateStart) : dateStart,
      date_end_arrival: dateEnd ? formatDate (dateEnd) : dateEnd,
      have_first_class: firstClass,
      have_second_class: secondClass,
      have_third_class: thirdClass,
      have_fourth_class: fourthClass,
      have_wifi: wifi,
      have_air_conditioning: airCond,
      have_express: express,
      price_from:price[0],
      price_to:price[1],
      start_departure_hour_from: startDeparture[0],
      start_departure_hour_to: startDeparture[1],
      start_arrival_hour_from: startArrival[0],
      start_arrival_hour_to: startArrival[1],
      end_departure_hour_from: endDeparture[0],
      end_departure_hour_to: endDeparture[1],
      end_arrival_hour_from: endArrival[0],
      end_arrival_hour_to: endArrival[1],
    }))
  },[wifi, firstClass, secondClass, thirdClass, airCond, 
     fourthClass, express, price, startDeparture,
     startArrival, endDeparture, endArrival, dateStart,
     dateEnd ])
  ru.lang.monthFormat="MMMM";
  const marks: SliderSingleProps['marks'] = {
    1920: {
      style: {
        fontFamily:'"Roboto", sans-serif',
        fontSize: '18px',
        fontWeight:400,
        color: visible[0],
        transform:'none',
      },
      label: 1920,
    },
    7000: {
      style: {
        position:'absolute',
        fontFamily:'"Roboto", sans-serif',
        fontSize: '18px',
        fontWeight:400,
        color: visible[1],
      },
      label: 7000,
    },
  };
  return (
    <section className={styles.chooseTickets}>
      <aside className={styles.settingTickets}>
        <div className={styles.findTickets}>
          <form className='date_wrap_dp'>
            <p className={styles.date_travel_title}>Дата поездки</p>
            <div className='date_from_wrap_dp'>
                  <DatePicker 
                    onChange={(e) => setDateStart(e)}
                    locale={ru}
                    format={'DD/MM/YYYY'}
                    popupClassName="date_picker_tickets"
                    popupStyle={{ 
                      width: '100%',
                    }}
                    getPopupContainer={(trigger:HTMLElement):HTMLElement => trigger.parentElement!}
                    placement="bottomRight"
                    placeholder="ДД/ММ/ГГ"
                    suffixIcon={<div className='input_date_from_wrap_dp'></div>} 
                    style={{
                      boxSizing:"border-box",
                      width: '295px',
                      height: '43px',
                      padding: '0 30px 0 30px',
                      border: '1px solid rgba(41, 41, 41, 0.8)',
                      borderRadius: '3px',
                      fontSize:'20px',
                    }}
                  />
            </div>
            <p className={styles.date_travel_title}>Дата возвращения</p>
            <div className='date_to_wrap_dp'>
              <DatePicker 
                    onChange={(e) => setDateEnd(e)}
                    locale={ru}
                    format={'DD/MM/YYYY'}
                    popupClassName="date_picker_tickets"
                    popupStyle={{ 
                      width: '100%',
                    }}
                    getPopupContainer={(trigger:HTMLElement):HTMLElement => trigger.parentElement!}
                    placement="bottomRight"
                    placeholder="ДД/ММ/ГГ"
                    suffixIcon={<div className='input_date_to_wrap_dp'></div>} 
                    style={{
                      width: '295px',
                      height: '43px',
                      padding: '0 30px 0 30px',
                      border: '1px solid rgba(41, 41, 41, 0.8)',
                      borderRadius: '3px',
                      fontSize:'20px',
                    }}
                  />
            </div>
          </form>
          <div className={styles.findTickets_facilities}>
            <ConfigProvider
                theme={{
                  components: {
                    Switch: {
                      handleBg:'#C4C4C4',
                      handleShadow:'black',
                      handleSize: 28,
                      trackHeight:19,
                      trackPadding:-4.5,
                      trackMinWidth:72,
                      colorPrimary:'#FCDC9D',
                      colorPrimaryHover:'#FCDC9D',
                      colorTextQuaternary:'white',
                      colorTextTertiary:'white',
                      colorText:'black',
                    },
                  },
                }}
              >
                <div className={styles.findTickets_facilities_wrap}>
                  <div className={`${styles.findTickets_facilities_switch}`}>
                    <div className={styles.findTickets_facilities_switch_icon_wrap}>
                      <div className={styles.findTickets_facilities_switch_coupe_icon}></div>
                      <p className={styles.findTickets_facilities_switch_coupe_text}>Купе</p>
                    </div>
                    <Switch
                     value = {secondClass}
                     onChange = {(e) => setSecondClass(e)}
                    />
                  </div>
                  <div className={`${styles.findTickets_facilities_switch}`}>
                    <div className={styles.findTickets_facilities_switch_icon_wrap}>
                      <div className={styles.findTickets_facilities_switch_air_icon}></div>
                      <p className={styles.findTickets_facilities_switch_coupe_text}>Кондиционер</p>
                    </div>
                    <Switch
                     value = {airCond}
                     onChange = {(e) => setAirCond(e)}
                    />
                  </div>
                  <div className={`${styles.findTickets_facilities_switch}`}>
                    <div className={styles.findTickets_facilities_switch_icon_wrap}>
                        <div className={styles.findTickets_facilities_switch_econom_icon}></div>
                        <p className={styles.findTickets_facilities_switch_econom_text}>Плацкарт</p>
                    </div>
                    <Switch
                     value = {thirdClass}
                     onChange = {(e) => setThirdClass(e)}
                    />
                  </div>
                  <div className={`${styles.findTickets_facilities_switch}`}>
                      <div className={styles.findTickets_facilities_switch_icon_wrap}>
                        <div className={styles.findTickets_facilities_switch_siting_icon}></div>
                        <p className={styles.findTickets_facilities_switch_siting_text}>Сидячий</p>
                      </div>

                    <Switch
                     value= {fourthClass}
                     onChange = {(e) => setFourthClass(e)}
                    />
                  </div>
                  <div className={`${styles.findTickets_facilities_switch}`}>
                    <div className={styles.findTickets_facilities_switch_icon_wrap}>
                      <div className={styles.findTickets_facilities_switch_luxe_icon}>
                      </div>
                      <p className={styles.findTickets_facilities_switch_luxe_text}>Люкс</p>
                    </div>
                  
                    <Switch
                    value = {firstClass}
                    onChange = {(e) => setFirstClass(e)}
                    />
                  </div>
                  <div className={`${styles.findTickets_facilities_switch}`}>
                    <div className={styles.findTickets_facilities_switch_icon_wrap}>
                      <div className={styles.findTickets_facilities_switch_wifi_icon}></div>
                      <p className={styles.findTickets_facilities_switch_wifi_text}>Wi-Fi</p>
                    </div>
                    <Switch
                    value = {wifi}
                    onChange = {(e) => setWifi(e)}
                    />
                  </div>
                  <div className={`${styles.findTickets_facilities_switch}`}>
                    <div className={styles.findTickets_facilities_switch_icon_wrap}>
                      <div className={styles.findTickets_facilities_switch_express_icon}></div>
                      <p className={styles.findTickets_facilities_switch_express_text}>Экспресс</p>
                    </div>
                    <Switch 
                    value = {express}
                    onChange = {(e) => setExpress(e)}
                    />
                  </div>
                </div>
            </ConfigProvider>
          </div>
          <div className={styles.findTickets_price}>
            <ConfigProvider
                  theme={{
                    components: {
                      Slider: {
                        handleSize:24,
                        handleSizeHover:24,
                        handleLineWidthHover:0,
                        handleColor:'#bfbfbf',
                        railBg:'',
                        railSize:19,
                        trackBg:'#FFA800',
                        trackHoverBg:'#FFA800',
                        handleActiveColor:'#FFF',
                        borderRadiusXS:8,
                        handleLineWidth:0,
                        dotSize:0,
                        fontSize:18,
                        fontFamily:'"Roboto", sans-serif',
                      },
                    },
                  }}
                >
                <div className={styles.findTickets_price_slider_wrap}> 
                  <p className={styles.findTickets_price_text}>Стоимость</p>
                  <div className={styles.findTickets_price_slider_text}>
                    <span>от</span>
                    <span>до</span>
                  </div>
                  <Slider
                    min={1920}
                    max={7000}
                    marks={marks}
                    onChange={(e:Array<number>)=>{

                      if(e[0] > 3130 && e[1] < 5680){
                        return setVisible((['#FFF','#FFF']))
                      }
                      if(e[1] > 5680){
                        setVisible((['#FFF','rgba(0, 0, 0, 0)']))
                      }
                      if(e[0] < 3130 && e[1] < 5680){
                        setVisible((['rgba(0, 0, 0, 0)','#FFF']))
                      }
                      if(e[0] < 3130 && e[1] > 5680){
                        setVisible((['rgba(0, 0, 0, 0)','rgba(0, 0, 0, 0)']))
                      }
                      setPrice(e)
                    }}
                    range={{ draggableTrack: true }}
                    defaultValue={[1920, 7000]}
                    tooltip={{ 
                      open: true ,
                      placement: 'bottom',
                      arrow:false,
                      color:'#3E3C41',
                      autoAdjustOverflow:false,

                    }}
                  />
                </div>
            </ConfigProvider>
              <div className={styles.findTickets_there}>
              <ConfigProvider
                    theme={{
                      components: {
                        Slider: {
                          handleSize:18,
                          handleSizeHover:18,
                          handleLineWidthHover:0,
                          handleColor:'#bfbfbf',
                          railBg:'',
                          railSize:10,
                          trackBg:'#FFA800',
                          trackHoverBg:'#FFA800',
                          handleActiveColor:'#FFF',
                          borderRadiusXS:8,
                          handleLineWidth:0,
                          dotSize:0,
                          fontSize:18,
                          fontFamily:'"Roboto", sans-serif',
                          
                        },
                      },
                    }}
                  >
                <div className={styles.findTickets_there_text}>
                  <div className={styles.findTickets_there_text_wrap}>
                    <div  className={styles.findTickets_there_text_iconArrow}></div>
                    <h2 className={styles.findTickets_there_text_title}>Туда</h2>
                  </div>
                  <div className={departureThere ? styles.findTickets_there_text_iconMinus : styles.findTickets_there_text_iconPlus}
                   onClick={() => setDepartureThere(prev => !prev)}></div>
                </div>
                <div className= {`${styles.findTickets_there_departureTime} ${departureThere ? '' : styles.hiddenBlock}`}>
                  <p className={styles.findTickets_departureTime_text}>Время отбытия</p>
                    <Slider
                      onChange={(e: Array<number>) => setStartDeparture(e)}
                      min={0}
                      max={24}
                      range={{ draggableTrack: true }}
                      defaultValue={[0, 24]}
                      tooltip={{ 
                        formatter(value) {
                          return value + ':00'
                        },
                        getPopupContainer(triggerNode: HTMLElement) {
                          return triggerNode.parentElement!
                        },
                        open: true ,
                        placement: 'bottom',
                        arrow:false,
                        color:'#3E3C41',
                        autoAdjustOverflow:false,
                      }}
                    />
                </div>
                <div className={`${styles.findTickets_there_arrivalTime} ${departureThere ? '' : styles.hiddenBlock}`}>
                <p className={styles.findTickets_arrivalTime_text}>Время прибытия</p>
                    <Slider
                      onChange={(e: Array<number>) => setStartArrival(e)}
                      min={0}
                      max={24}
                      range={{ draggableTrack: true }}
                      defaultValue={[0, 24]}
                      tooltip={{ 
                        formatter(value) {
                          return value + ':00'
                        },
                        getPopupContainer(triggerNode: HTMLElement) {
                          return triggerNode.parentElement!
                        },
                        open: true ,
                        placement: 'bottom',
                        arrow:false,
                        color:'#3E3C41',
                        autoAdjustOverflow:false,
                      }}
                    />
                </div>
              </ConfigProvider>

              </div>
              <div className={styles.findTickets_from}>
              <ConfigProvider
                    theme={{
                      components: {
                        Slider: {
                          handleSize:18,
                          handleSizeHover:18,
                          handleLineWidthHover:0,
                          handleColor:'#bfbfbf',
                          railBg:'',
                          railSize:10,
                          trackBg:'#FFA800',
                          trackHoverBg:'#FFA800',
                          handleActiveColor:'#FFF',
                          borderRadiusXS:8,
                          handleLineWidth:0,
                          dotSize:0,
                          fontSize:18,
                          fontFamily:'"Roboto", sans-serif',
                          
                        },
                      },
                    }}
                  >
                <div className={styles.findTickets_from_text}>
                  <div className={styles.findTickets_from_text_wrap}>
                    <div  className={styles.findTickets_from_text_iconArrow}></div>
                    <h2 className={styles.findTickets_from_text_title}>Обратно</h2>
                  </div>
                  <div className={departureFrom ? styles.findTickets_from_text_iconMinus : styles.findTickets_from_text_iconPlus}
                   onClick={()=> setDepartureFrom(prev => !prev)}></div>
                </div>
                <div className= {`${styles.findTickets_from_departureTime} ${departureFrom ? '' : styles.hiddenBlock}`}>
                  <p className={styles.findTickets_departureTime_text}>Время отбытия</p>
                    <Slider
                     onChange={(e: Array<number>) => setEndDeparture(e)}
                      min={0}
                      max={24}
                      range={{ draggableTrack: true }}
                      defaultValue={[0, 24]}
                      tooltip={{ 
                        formatter(value) {
                          return value + ':00'
                        },
                        getPopupContainer(triggerNode: HTMLElement) {
                          return triggerNode.parentElement!
                        },
                        open: true ,
                        placement: 'bottom',
                        arrow:false,
                        color:'#3E3C41',
                        autoAdjustOverflow:false,
                      }}
                    />
                </div>
                <div className={`${styles.findTickets_from_arrivalTime} ${departureFrom ? '' : styles.hiddenBlock}`}>
                <p className={styles.findTickets_arrivalTime_text}>Время прибытия</p>
                    <Slider
                    onChange={(e: Array<number>) => setEndArrival(e)}
                      min={0}
                      max={24}
                      range={{ draggableTrack: true }}
                      defaultValue={[0, 24]}
                      tooltip={{ 
                        formatter(value) {
                          return value + ':00'
                        },
                        getPopupContainer(triggerNode: HTMLElement) {
                          return triggerNode.parentElement!
                        },
                        open: true ,
                        placement: 'bottom',
                        arrow:false,
                        color:'#3E3C41',
                        autoAdjustOverflow:false,
                      }}
                    />
                </div>
              </ConfigProvider>

              </div>

          </div>
        </div>
        <div className={styles.lastTickets}>

        </div>
      </aside>
      <main className={styles.tickets}></main>
    </section>
  )

  }
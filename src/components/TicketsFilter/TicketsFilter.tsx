import styles from './ticketsFilter.module.css'
import { DatePicker } from 'antd';
import 'dayjs/locale/ru';
import ru from 'antd/es/date-picker/locale/ru_RU';
import { ConfigProvider } from 'antd';
import { Switch, Slider } from 'antd';
import type { SliderSingleProps } from 'antd';
import { useState } from 'react';
export const TicketsFilter:React.FunctionComponent = () => {
  const [departureThere, setDepartureThere] = useState(false);
  const [departureFrom, setDepartureFrom] = useState(false);
  const [visible, setVisible] = useState(['rgba(0, 0, 0, 0)','rgba(0, 0, 0, 0)'])
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
                    <Switch onChange={(e)=>console.log(e)}
                    />
                  </div>
                  <div className={`${styles.findTickets_facilities_switch}`}>
                    <div className={styles.findTickets_facilities_switch_icon_wrap}>
                        <div className={styles.findTickets_facilities_switch_econom_icon}></div>
                        <p className={styles.findTickets_facilities_switch_econom_text}>Плацкарт</p>
                    </div>
                    <Switch onChange={(e)=>console.log(e)}
                    />
                  </div>
                  <div className={`${styles.findTickets_facilities_switch}`}>
                      <div className={styles.findTickets_facilities_switch_icon_wrap}>
                        <div className={styles.findTickets_facilities_switch_siting_icon}></div>
                        <p className={styles.findTickets_facilities_switch_siting_text}>Сидячий</p>
                      </div>

                    <Switch onChange={(e)=>console.log(e)}
                    />
                  </div>
                  <div className={`${styles.findTickets_facilities_switch}`}>
                    <div className={styles.findTickets_facilities_switch_icon_wrap}>
                      <div className={styles.findTickets_facilities_switch_luxe_icon}>
                      </div>
                      <p className={styles.findTickets_facilities_switch_luxe_text}>Люкс</p>
                    </div>
                  
                    <Switch onChange={(e)=>console.log(e)}
                    />
                  </div>
                  <div className={`${styles.findTickets_facilities_switch}`}>
                    <div className={styles.findTickets_facilities_switch_icon_wrap}>
                      <div className={styles.findTickets_facilities_switch_wifi_icon}></div>
                      <p className={styles.findTickets_facilities_switch_wifi_text}>Wi-Fi</p>
                    </div>
                    <Switch onChange={(e)=>console.log(e)}
                    />
                  </div>
                  <div className={`${styles.findTickets_facilities_switch}`}>
                    <div className={styles.findTickets_facilities_switch_icon_wrap}>
                      <div className={styles.findTickets_facilities_switch_express_icon}></div>
                      <p className={styles.findTickets_facilities_switch_express_text}>Экспресс</p>
                    </div>
                    <Switch onChange={(e)=>console.log(e)}
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
                    onChange={(e:any)=>{
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
                   onClick={()=> setDepartureThere(prev => !prev)}></div>
                </div>
                <div className= {`${styles.findTickets_there_departureTime} ${departureThere ? '' : styles.hiddenBlock}`}>
                  <p className={styles.findTickets_departureTime_text}>Время отбытия</p>
                    <Slider
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
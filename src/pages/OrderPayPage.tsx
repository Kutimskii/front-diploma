import { Header } from "../components/share/Header/Header";
import { Footer } from "../components/share/Footer/Footer";
import { StepsOfOrder } from "../components/share/StepsOfOrder/StepsOfOrder";
import React from "react";
import { Order } from "../components/OrderPay/Order";
export const OrderPayPage:React.FunctionComponent = () => {
  return (
  <>
    <Header
      headerBckgAlt = { true }
      travelSlogan = { false }
    />
    <StepsOfOrder
      stepsState = {{
        1: 'active_step',
        2: 'active_step',
        3: 'active_step',
        4: '',
      }}/>
    <Order/>
    <Footer/>
  </>
  );
}
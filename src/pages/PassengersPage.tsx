import { Header } from "../components/share/Header/Header";
import { Footer } from "../components/share/Footer/Footer";
import { StepsOfOrder } from "../components/StepsOfOrder/StepsOfOrder";
import React from "react";
import { Passengers } from "../components/Passengers/Passengers";
export const PassengersPage:React.FunctionComponent = () => {
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
        3: '',
        4: '',
      }}/>
    <Passengers/>
    <Footer/>
  </>
  );
}
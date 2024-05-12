import { Header } from "../components/share/Header/Header";
import { Footer } from "../components/share/Footer/Footer";
import { Tickets } from "../components/Tickets/Tickets";
import { StepsOfOrder } from "../components/share/StepsOfOrder/StepsOfOrder";
import React from "react";
export const ChooseTrain:React.FunctionComponent = () => {
  return (
  <>
    <Header
      headerBckgAlt = { true }
      travelSlogan = { false }
    />
    <StepsOfOrder
      stepsState = {{
        1: 'active_step',
        2: '',
        3: '',
        4: '',
      }}/>
    <Tickets/>
    <Footer/>
  </>
  );
}
import { Header } from "../components/share/Header/Header";
import { Footer } from "../components/share/Footer/Footer";
import React from "react";
import SuccessOrder from "../components/SuccessOrder/SuccessOrder";
export const SuccessPage:React.FunctionComponent = () => {
  return (
  <>
    <Header
      headerBckgAlt =  'success'
      travelSlogan = 'success'
    />
    <SuccessOrder/>
    <Footer/>
  </>
  );
}
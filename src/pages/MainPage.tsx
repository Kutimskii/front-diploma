import { Header } from "../components/share/Header/Header";
import { InfoAbout } from "../components/InfoAbout/InfoAbout";
import { HowItWork } from "../components/HowItWork/HowItWork";
import { FeedBacks } from "../components/FeedBacks/FeedBacks";
import { Footer } from "../components/share/Footer/Footer";
import React from "react";
export const MainPage:React.FunctionComponent = () => {
  return (
  <>
    <Header
      headerBckgAlt={ false }
      travelSlogan = { true }
    />
    <InfoAbout/>
    <HowItWork/>
    <FeedBacks/>
    <Footer/>
  </>
  );
}
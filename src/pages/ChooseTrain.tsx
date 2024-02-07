import { Header } from "../components/Header/Header";
import { InfoAbout } from "../components/InfoAbout/InfoAbout";
import { Footer } from "../components/Footer/Footer";
import { StepsOfOrder } from "../components/StepsOfOrder/StepsOfOrder";
export const ChooseTrain:React.FunctionComponent = () => {
  return (
  <>
    <Header
      headerBckgAlt= { true }
      travelSlogan = { false }
    />
    <StepsOfOrder/>
    <InfoAbout/>

    <Footer/>
  </>
  );
}
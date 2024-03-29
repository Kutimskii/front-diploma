import { Header } from "../components/share/Header/Header";
import { Footer } from "../components/share/Footer/Footer";
import { Tickets } from "../components/Tickets/Tickets";
import { StepsOfOrder } from "../components/StepsOfOrder/StepsOfOrder";
export const ChooseTrain:React.FunctionComponent = () => {
  return (
  <>
    <Header
      headerBckgAlt= { true }
      travelSlogan = { false }
    />
    <StepsOfOrder/>
    <Tickets/>
    <Footer/>
  </>
  );
}
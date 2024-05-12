import { Route,Routes,HashRouter } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { ChooseTrain } from './pages/ChooseTrain';
import { ChooseSeats } from './pages/ChooseSeats';
import { PassengersPage } from './pages/PassengersPage';
import { OrderPayPage } from './pages/OrderPayPage';
import { VerificationPage } from './pages/VerificationPage';
import { SuccessPage } from './pages/SuccessPage';
function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path = '/' element = {<MainPage/>}></Route>
        <Route path = '/choosetrain' element = {<ChooseTrain/>}></Route>
        <Route path = '/chooseseats' element = {<ChooseSeats/>}></Route>
        <Route path = '/passengers' element = {<PassengersPage/>}></Route>
        <Route path = '/order' element = {<OrderPayPage/>}></Route>
        <Route path = '/order/verification' element = {<VerificationPage/>}></Route>
        <Route path = '/success' element = {<SuccessPage/>}></Route>
      </Routes>
    </HashRouter>
  </> );
}

export default App;
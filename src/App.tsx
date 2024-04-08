import { Route,Routes,HashRouter } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { ChooseTrain } from './pages/ChooseTrain';
import { ChooseSeats } from './pages/ChooseSeats';
function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path = '/' element = {<MainPage/>}></Route>
        <Route path = '/choosetrain' element = {<ChooseTrain/>}></Route>
        <Route path = '/chooseseats' element = {<ChooseSeats/>}></Route>
      </Routes>
    </HashRouter>
  </> );
}

export default App;
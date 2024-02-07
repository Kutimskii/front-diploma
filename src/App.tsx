import { Route,Routes, BrowserRouter } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { ChooseTrain } from './pages/ChooseTrain';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<MainPage/>}></Route>
        <Route path = '/choosetrain' element = {<ChooseTrain/>}></Route>
      </Routes>
    </BrowserRouter>
  </> );
}

export default App;
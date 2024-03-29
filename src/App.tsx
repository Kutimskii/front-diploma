import { Route,Routes,HashRouter } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { ChooseTrain } from './pages/ChooseTrain';
function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path = '/' element = {<MainPage/>}></Route>
        <Route path = '/choosetrain' element = {<ChooseTrain/>}></Route>
      </Routes>
    </HashRouter>
  </> );
}

export default App;
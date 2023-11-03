import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes, useNavigate } from 'react-router-dom';
import Menu from './components/menu';
import Login from './components/login';
import Home from './components/home';
import Getourdata from './components/login';
import NewAccount from './components/newaccount';
import Plants from './components/plants';
import Trees from './components/trees';
import Newplants from './components/newplants';
import Singleplant from './components/singleplant';
import Newtree from './components/newtrees';
import Singletree from './components/singletree';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Menu/> */}
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/Home/:id' element={<Home/>}/>
          <Route path='/NewAccount' element={<NewAccount/>}/>
          <Route path='/Plants' element={<Plants/>}/>
          <Route path='/Trees' element={<Trees/>}/>
          <Route path='/Newplants' element={<Newplants/>}/>
          <Route path='/Newtree' element={<Newtree/>}/>
          <Route path='/singleplant/:id' element={<Singleplant/>}/>
          <Route path='/singletree/:id' element={<Singletree/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
  
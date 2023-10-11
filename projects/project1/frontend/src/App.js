import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Menu from './components/menu';
import Login from './components/login';
import Home from './components/home';
import Getourdata from './components/login';
import NewAccount from './components/newaccount';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/Home' element={<Home/>}/>
          {/* <Route path='/get' element={<Getourdata/>}/> */}
          <Route path='/NewAccount' element={<NewAccount/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
  
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Menu from './components/menu';
import Login from './components/login';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/Home' element={<Home/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
  
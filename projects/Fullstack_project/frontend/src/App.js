import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Map from './components/map';
import Class from './components/class';
import Data from './components/arrow_function';
import Img from './components/image';
import Person from './person';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Menu from './menu';
import About from './about';
import Student from './components/student';
import Click from './components/click';
import Mouseover from './components/mouseover';
import UseState from './components/usestate';
import Bulb from './components/bulb';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu/><br/><br/><br/><br/><br/>
        <Routes>
          <Route path='/Home' element={<Home/>} />
          <Route path='/Class' element={<Class/>}/>
          <Route path='/Arrow Function' element={<Data/>} />
          <Route path='/Image' element={<Img/>} />
          <Route path='/Map' element={<Map/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Student' element={<Student/>}/>
          <Route path='/Click Event' element={<Click/>}/>
          <Route path='/Mouse Over' element={<Mouseover/>}/>
          <Route path='/UseState' element={<UseState/>}/>
          <Route path='/Bulb' element={<Bulb/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

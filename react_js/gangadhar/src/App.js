import logo from './logo.svg';
import './App.css';
import Home from './home';
import About from './about';
import Contact from './contact';
import Img from './img';
import {rollno, student} from './person';
import Service from './service';
import Main from './main';
import { BrowserRouter,Route,Path, Routes } from 'react-router-dom';
import Student from './student';
import Trainees from './trainees';
import Table from './table';
import Nav from './navbar';
import Event from './events';
import Hooks from './hooks';
import Form from './form';
import Products from './products';
import Newproducts from './newproduct';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Main/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/trainees' element={<Trainees/>}/>
          <Route path='/table' element={<Table/>}/>
          <Route path='/navbar' element={<Nav/>}/>
          <Route path='/event' element={<Event/>}/>
          <Route path='/hooks' element={<Hooks/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/newproducts' element={<Newproducts/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Main from './main';
import Home from './home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

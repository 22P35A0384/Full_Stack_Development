import { Link } from "react-router-dom";
import './App.css';

function Main(){
    return(
        <div style={{marginTop:'30px'}}>
            <Link className="test" to='/'>HOME</Link> 
            <Link className="test" to='/about'>ABOUT</Link>
            <Link className="test" to='/service'>SERVICES</Link> 
            <Link className="test" to='/contact'>CONTACT</Link>
            <Link className="test" to='/trainees'>TRAINEES</Link>
            <Link className="test" to='/table'>TABLE</Link>
        </div>
    );
}
export default Main
import { Link } from "react-router-dom";
import './App.css';
import React,{Component} from "react";

class Main extends Component{
    render(){
    return(
        <div style={{marginTop:'30px'}}>
            <Link className="test" to='/'>HOME</Link> 
            <Link className="test" to='/about'>ABOUT</Link>
            <Link className="test" to='/service'>SERVICES</Link> 
            <Link className="test" to='/contact'>CONTACT</Link>
            <Link className="test" to='/trainees'>TRAINEES</Link>
            <Link className="test" to='/table'>TABLE</Link>
            <Link className="test" to='/navbar'>NAV BAR</Link>
            <Link className="test" to='/event'>EVENTS</Link>
        </div>
    );
    }
}
export default Main
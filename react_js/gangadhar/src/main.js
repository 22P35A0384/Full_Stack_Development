import { Link } from "react-router-dom";
import './App.css';
import React,{Component} from "react";

class Main extends Component{
    render(){
    return(
        <div style={{marginTop:'30px'}} className="container">
            <div className="row">
                <div className="col">
                    <Link className="test" to='/'>HOME</Link>
                </div>
                <div className="col">
                    <Link className="test" to='/about'>ABOUT</Link>
                </div>
                <div className="col">
                    <Link className="test" to='/service'>SERVICES</Link>
                </div>
                <div className="col">
                    <Link className="test" to='/contact'>CONTACT</Link>
                </div> 
                <div className="col">
                    <Link className="test" to='/trainees'>TRAINEES</Link>
                </div>
                <div className="col">
                    <Link className="test" to='/table'>TABLE</Link>
                </div>
                <div className="col">
                    <Link className="test" to='/navbar'>NAVBAR</Link>
                </div>
                <div className="col">
                    <Link className="test" to='/event'>EVENTS</Link>
                </div>
                <div className="col">
                    <Link className="test" to='/hooks'>HOOKS</Link>
                </div>
                <div className="col">
                    <Link className="test" to='/form'>FORM</Link>
                </div>
                <div className="col">
                    <Link className="test" to='/products'>PRODUCTS</Link>
                </div>
                <div className="col">
                    <Link className="test" to='/newproducts'>NEW PRODUCTS</Link>
                </div> 
            </div>
        </div>
    );
    }
}
export default Main
import { Link } from "react-router-dom";
import './App.css';
import React,{Component} from "react";

class Main extends Component{
    render(){
        return(
            <Link to='/'>Home</Link>
        )
    }
}
export default Main
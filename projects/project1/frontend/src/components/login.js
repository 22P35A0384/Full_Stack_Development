import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Getourdata = () =>{
    document.getElementById('body').style.backgroundImage="url('./home.jpg')"
    const [login, getLogin] = useState({
        'user':'',
        'pass':''
    })
    const nav = useNavigate();
    const Getlogin=()=>{
        if(login.user===""){
            alert('Enter User Name')
        }else if(login.pass===""){
            alert('Enter Password')
        }else{
            // alert(login.user+" "+login.pass)
            axios.get(`http://localhost:7416/checkmail/${login.user}/${login.pass}`).then((response)=>{
                const id = (response.data)
                if(response.data.msg==='Invalid User!'){
                    alert('Invalid User!')
                }else if(response.data.msg==='Invalid Password!'){
                    alert('Invalid Password!')
                }else{
                    localStorage.setItem('user',id)
                    nav(`/home`)
                }
            })
        }
    }
    return(
        <div id="loginblock">
            <center>
                <input id="loginblock1" type="email" placeholder="Enter Your Email" onChange={(e)=>getLogin({...login,user:e.target.value})}/><br/><br/>
                <input id="loginblock1" type="password" placeholder="Enter Your Password" onChange={(e)=>getLogin({...login,pass:e.target.value})}/><br/><br/>
                <button id="loginbutton" onClick={Getlogin}>Login</button>
                <hr id="hr"/>
                <Link to={'/NewAccount'}><button id="loginbutton">Create New Account</button></Link>
                <Link to={'/forgotpassword'}><button id="loginbutton">Forgot Password</button></Link>
            </center>
        </div>
    )
}

export default Getourdata;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./home";

const Getourdata = () =>{
    document.getElementById('body').style.backgroundImage="url('./home.jpg')"
    let [users, getUsers]  = useState([])
    let api = 'http://localhost:7416/getdata';
    useEffect(()=>{
        axios.get(api).then((response)=>{
            // console.log(response.data.userdata)
            getUsers(response.data.userdata);
        })
    },[]);
    const [login, getLogin] = useState({
        'user':'',
        'pass':''
    })
    var id = ''
    const nav = useNavigate();
    const Getlogin=()=>{
        var c = 0
        users && users.map((ele)=>{
            if(ele.email===login.user && ele.password===login.pass){
                c+=1
                id = ele._id
            }
        })
        if(c>0){
            // alert('Success')
            // console.log('User Name Is : '+login.user)
            // console.log('Password Is : '+login.pass)
            // return <Home data={login.user}/>;
            nav(`/Home/${id}`)
            // `/editform/${ele._id}`
        }else{
            alert('This Account Was Not Found Please Create A New Account')
        }
    }
    return(
        <div id="loginblock">
            <center>
            <input id="loginblock1" type="text" placeholder="Enter Your Email" onChange={(e)=>getLogin({...login,user:e.target.value})}/><br/><br/>
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
import axios from "axios";
import React, { useEffect, useState } from "react";

const Getourdata = () =>{
    let [users, getUsers]  = useState([])
    let api = 'http://localhost:7416/getdata';
    useEffect(()=>{
        axios.get(api).then((response)=>{
            // console.log(response.data.userdata)
            getUsers(response.data.userdata);
        })
    });
    const [login, getLogin] = useState({
        'user':'',
        'pass':''
    })

    const Getlogin=()=>{
        var c = 0
        users && users.map((ele)=>{
            if (login.user===ele.username && login.pass===ele.password){
                c+=1
            }
        })
        if(c>0){
            alert('Success')
            console.log('User Name Is : '+login.user)
            console.log('Password Is : '+login.pass)
        }else{
            alert('Login Failed')
        }
    }
    return(
        <center>
            <input type="text" placeholder="Enter User Name" onChange={(e)=>getLogin({...login,user:e.target.value})}/><br/><br/>
            <input type="password" placeholder="Enter Your Password" onChange={(e)=>getLogin({...login,pass:e.target.value})}/><br/><br/>
            <button onClick={Getlogin}>Submit</button>
        </center>
    )
}

export default Getourdata;
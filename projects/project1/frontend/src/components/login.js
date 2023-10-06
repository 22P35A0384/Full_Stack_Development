import { useState } from "react"
import Home from "./home"

function Login(){
    const user = 'gangadhar'
    const password = '123'
    const ProceedLogin=()=>{
        var inuser = document.getElementById('user').value
        var inpass = document.getElementById('pass').value
        if(user===inuser && password===inpass){
            document.getElementById('main').innerHTML=<Home/>
        }else{
            alert('Invalid User (Or) Password, Please Check Once')
        }
    }
    return(
        <>
            <div id="main">
                <h1>Login Page</h1>
                <input id="user" type="text" placeholder="User Name"/><br/>
                <input id="pass" type="password" placeholder="Password"/><br/>
                <button onClick={ProceedLogin}>SUBMIT</button>
            </div>
        </>
    )
}

export default Login;
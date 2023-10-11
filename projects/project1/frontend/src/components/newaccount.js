import axios from "axios";
import { useState } from "react";

function NewAccount(){
    let [newuser, getnewuser] = useState({
        'username':'',
        'password':'',
        'cnfpass':''
    })
    const Createuser=(e)=>{
        if(newuser.password!==newuser.cnfpass){
            alert('failed')
        }else{
            e.preventDefault()
            console.log(newuser)
            axios.post('http://localhost:7416/addnewuser',{newuser}).then((result)=>{
                alert(result.data.msg)
            })
        }
    }
    return(
        <>
            <form onSubmit={Createuser}>
                <br/><br/><input type="text" placeholder="Create Your User Name" onChange={(e)=>getnewuser({...newuser,username:e.target.value})}/><br/><br/>
                <input type="password" placeholder="Enter A Password" onChange={(e)=>getnewuser({...newuser,password:e.target.value})}/><br/><br/>
                <input type="password" placeholder="Conform Password" onChange={(e)=>getnewuser({...newuser,cnfpass:e.target.value})}/><br/><br/>
                <button type="submit">Create Account</button>
            </form>
        </>
    )
}

export default NewAccount;
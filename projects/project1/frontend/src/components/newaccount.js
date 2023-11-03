import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NewAccount(){
    document.getElementById('body').style.backgroundImage="url('./background.jpg')"
    let [newuser, getnewuser] = useState({
        'fname':'',
        'lname':'',
        'password':'',
        'email':'',
        'cnfpass':'',
        'myimg':''
    })
    let [users, getUsers]  = useState([])
    let api = 'http://localhost:7416/getdata';
    useEffect(()=>{
        axios.get(api).then((response)=>{
            console.log(response.data.userdata)
            getUsers(response.data.userdata);
        })
    },[]);  
    const nav = useNavigate()
    const Createuser=(e)=>{
        if(newuser.fname===''){
            e.preventDefault()
            alert('Enter Your First Name')
        }else if(newuser.lname===''){
            e.preventDefault()
            alert('Enter Your Last Name')
        }else if(newuser.email===''){
            e.preventDefault()
            alert('Enter Your Mail')
        }else if(newuser.password===''){
            e.preventDefault()
            alert('Create New Password')
        }else if(newuser.cnfpass===''){
            e.preventDefault()
            alert('Re-enter Your Password To Conform')
        }else if(newuser.password!==newuser.cnfpass){
            e.preventDefault()
            alert('Password Mismatch')
        }else{
            let c = 0
            users.map((ele)=>{
                if(ele.email===newuser.email){
                    c+=1
                }
            })
            console.log(c)
            if(c==0){
                e.preventDefault()
                const mail = newuser.email
                console.log(mail)
                axios.get('http://localhost:7416/getotp/'+mail).then((response)=>{
                    // console.log(mail)
                    const newotp = (response.data.otp)
                    // console.log(response.data)
                    let otp = prompt('Enter Your OTP sent to the registerd Mail Id')
                    // console.log(otp)
                    // console.log(newotp)
                    if (otp==null){
                        alert('Invalid OTP')
                    }else{
                        if(otp==newotp){
                            // console.log(newuser)
                            const Senddata = new FormData()
                            Senddata.append('fname',newuser.fname)
                            Senddata.append('lname',newuser.lname)
                            Senddata.append('password',newuser.password)
                            Senddata.append('email',newuser.email)
                            Senddata.append('myimg',newuser.myimg)
                            axios.post('http://localhost:7416/addnewuser',Senddata).then((result)=>{
                                alert(result.data.msg)
                                nav('/login')
                            })
                        }
                        else{
                            alert('Invalid OTP')
                        }
                    }
                })
            }else{
                alert('This Email Was Already Registered..!')
            }
        }
    }
    return(
        <>
            <form id="createnewaccount" onSubmit={Createuser}>
                <input className="newaccount" type="text" placeholder="Enter Your First Name" onChange={(e)=>getnewuser({...newuser,fname:e.target.value})}/><br/><br/>
                <input className="newaccount" type="text" placeholder="Enter Your Last Name" onChange={(e)=>getnewuser({...newuser,lname:e.target.value})}/><br/><br/>
                <input className="newaccount" type="email" placeholder="Enter Your Mail" onChange={(e)=>getnewuser({...newuser,email:e.target.value})}/><br/><br/>
                <input className="newaccount" type="password" placeholder="Enter A Password" onChange={(e)=>getnewuser({...newuser,password:e.target.value})}/><br/><br/>
                <input className="newaccount" type="password" placeholder="Conform Password" onChange={(e)=>getnewuser({...newuser,cnfpass:e.target.value})}/><br/><br/>
                <input className="fileinput" type="file" onChange={(e)=>getnewuser({...newuser,myimg:e.target.files[0]})}/><br/><br/>
                <button className="newaccountbtn"  type="submit">Create Account</button>
            </form>
        </>
    )
}

export default NewAccount;
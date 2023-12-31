import axios from "axios";
import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Changepass(){
    useEffect(()=>{
        if(!localStorage.getItem('user')){
            alert('Please Login Your Account')
            window.location.href='/login'
        }
    },[])
    const Nav = useNavigate()
    document.getElementById('body').style.backgroundImage="url('./main.jpg')"
    const [changepass, setchangepass] = useState({
        'oldpass':'',
        'newpass':'',
        'cnfpass':''
    });
    const Submit=(e)=>{
        if(!changepass.oldpass){
            alert('Enter Your Old Password')
        }else if(!changepass.newpass){
            alert('Enter Your New Password')
        }else if(!changepass.cnfpass){
            alert('Re-Enter Your New Password')
        }else if(changepass.newpass!=changepass.cnfpass){
            alert('Password Mismatch')
        }else{
            axios.put('http://localhost:7416/changepass/'+localStorage.getItem('user')+'/'+changepass.oldpass+'/'+changepass.newpass).then((response)=>{
                alert(response.data.msg)
                window.location.href=`/home/${localStorage.getItem('user')}`
            })
        }
    }
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [databymail, setdatabymail] = useState([])
    const id = localStorage.getItem('user')
    useEffect(()=>{
        axios.get('http://localhost:7416/getdatabyemail/'+id).then((response)=>{
            setdatabymail(response.data.logindata)
            // console.log(databymail.username)
        })
    },[])
    const Gotologin = () =>{
        Nav('/logout')
    }
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }
    return(
        <div>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div class="logo-details">
                    <div class="logo_name">Plants And Trees</div>
                    <i class='bx bx-menu' id="btn" onClick={toggleSidebar}></i>
                </div>
                <div class="profile">
                    <div class="profile-details">
                        <img src={`http://localhost:7416/img/${databymail.profile}`} alt="profileImg"/><br/><br/>
                        <div class="name_job">
                            <div class="name">{databymail.fname}  {databymail.lname}</div>
                            <div class='logout' onClick={()=>{Gotologin()}}>LOGOUT</div>
                        </div>
                    </div>
                </div>
                <ul className="nav-list">
                    <li>
                        <a href="/home" className="navtext">
                            <i class='bx bx-home-alt-2'></i>
                            <span className="navspan">HOME</span>
                        </a>
                    </li>
                    <li>
                        <a href="/plants" className="navtext">
                            <i class='bx bx-leaf'></i>
                            <span className="navspan">PLANTS</span>
                        </a>
                    </li>
                    <li>
                        <a href="/trees" className="navtext">
                            <i class='bx bxs-tree' style={{color:'white'}}></i>
                            <span className="navspan">TREES</span>
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="navtext">
                            <i class='bx bxs-phone-call'></i>
                            <span className="navspan">CONTACT</span>
                        </a>
                    </li>
                    <li>
                        <a href="/changepassword" className="navtext">
                            <i class='bx bxs-cog'></i>
                            <span className="navspan">SETTINGS</span>
                        </a>
                    </li>
                    <li>
                        <i class='bx bx-log-out' id="log_out" onClick={()=>{Gotologin()}}></i>
                    </li>
                </ul>
            </div>
            <div>
                <Link to={'/editprofile'}><button id="navbtn">EDIT PROFILE</button></Link>
                <Link to={'/changepassword'}><button style={{backgroundColor:'red'}} id="navbtn">CHANGE PASSWORD</button></Link>
                <Link to={'/deleteaccount'}><button id="navbtn">DELETE ACCOUNT</button></Link>
            </div>
            <div id="loginblock" style={{position:'relative',top:'150px',left:'900px'}}>
                <h4 style={{position:'relative',top:'25px'}}>CHANGE PASSWORD</h4>
                <hr style={{position:'relative',left:'18px',top:'20px'}} id="hr"/>
                <input id="loginblock1" type="password" placeholder="Enter Your Old Password" onChange={(e)=>setchangepass({...changepass,oldpass:e.target.value})}/><br/><br/>
                <input id="loginblock1" type="password" placeholder="Enter Your New Password" onChange={(e)=>setchangepass({...changepass,newpass:e.target.value})}/><br/><br/>
                <input id="loginblock1" type="password" placeholder="Re-Enter New Password" onChange={(e)=>setchangepass({...changepass,cnfpass:e.target.value})}/><br/><br/>
                <button id="loginbutton" onClick={()=>Submit()}>SUBMIT</button><br/>
            </div> 
        </div>
    )
}

export default Changepass;
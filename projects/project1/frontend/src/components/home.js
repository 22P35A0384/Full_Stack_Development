import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react"; // Import useRef for the content area ref
import axios from "axios";

function Home() {
    document.getElementById('body').style.backgroundImage="url('./final.png')"
    const Nav = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('user')){
            alert('Please Login Your Account')
            window.location.href='/login'
        }
    },[])
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
    return (
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
                        <a href="/editprofile" className="navtext">
                            <i class='bx bxs-cog'></i>
                            <span className="navspan">SETTINGS</span>
                        </a>
                    </li>
                    <li>
                        <i class='bx bx-log-out' id="log_out" onClick={()=>{Gotologin()}}></i>
                    </li>
                </ul>
            </div>
            <div id="mainnav">
                
            </div>
        </div>
    );
}

export default Home;

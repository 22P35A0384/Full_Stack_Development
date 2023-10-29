import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react"; // Import useRef for the content area ref
import axios from "axios";

function Home() {
    document.getElementById('body').style.backgroundImage="url('./home.jpg')"
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const Nav = useNavigate();
    const contentAreaRef = useRef(null); // Create a ref for the content area
    // alert(Props.data)
    const [databymail, setdatabymail] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        axios.get('http://localhost:7416/getdatabyemail/'+id).then((response)=>{
            setdatabymail(response.data.logindata)
            // console.log(databymail.username)
        })
    },[])
    const Gotoplants = () => {
        Nav('/Plants');
    }

    const Gototrees = () => {
        Nav('/Trees');
    }
    const Gotologin = () =>{
        Nav('/login')
    }
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    // Function to handle clicks inside the content area
    const handleContentClick = (e) => {
        e.stopPropagation(); // Stop the click event from propagating to the sidebar
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
                        <img src="https://drive.google.com/uc?export=view&id=1ETZYgPpWbbBtpJnhi42_IR3vOwSOpR4z" alt="profileImg"/>
                        <div class="name_job">
                        <div class="name">{databymail.fname}  {databymail.lname}</div>
                        <div class="job">{databymail.email}</div>
                        <div class='logout' onClick={()=>{Gotologin()}}>Logout</div>
                        </div>
                    </div>
                    <i class='bx bx-log-out' id="log_out" onClick={()=>{Gotologin()}}></i>
                </div>
            </div>
            <div ref={contentAreaRef} onClick={Gotoplants} id="homediv1">
                {/* ... Your content for the first section ... */}
            </div>
            <div onClick={Gototrees} id="homediv2">
                {/* ... Your content for the second section ... */}
            </div>
            {/* <div>
                {
                    databymail.map((singleData)=>{
                        const base64String = btoa(
                            String.fromCharCode(...new Uint8Array((singleData.img.data)))
                        )
                    })
                }
            </div> */}
        </div>
    );
}

export default Home;

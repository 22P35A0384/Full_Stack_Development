import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Plants(){
    document.getElementById('body').style.backgroundImage="url('./plants.jpg')"
    const nav = useNavigate()
    const [plantdata,setplantdata] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:7416/getplant').then((response)=>{
            setplantdata(response.data)
            console.log(plantdata)
        })
    },[])
    return(
        <div>
            {/* <h1 id="plantshead">Plants</h1> */}
            <Link to={'/Newplants'}><button id="loginbutton">Add New Plants</button></Link>
            <div className="products-list">
                {
                    plantdata && plantdata.map((ele)=>{
                        const Expand=()=>{
                            nav(`/singleplant/${ele._id}`)
                        }
                        return(
                            <div className="card" onClick={()=>Expand()}>
                                <img src={`data:image/jpg;base64,${ele.img.data.data.toString('base64')}`} alt="User Image" style={{height:'10px',width:'10px'}} />
                                <h3>{ele.name}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Plants;
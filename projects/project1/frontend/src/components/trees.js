import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Trees(){
    document.getElementById('body').style.backgroundImage="url('./trees.jpg')"
    const nav = useNavigate()
    const [treedata,settreedata] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:7416/gettree').then((response)=>{
            settreedata(response.data)
            console.log(treedata)
        })
    },[])
    return(
        <div>
            {/* <h1 id="plantshead">Plants</h1> */}
            <Link to={'/Newtree'}><button id="loginbutton">Add New Trees</button></Link>
            <div className="products-list">
                {
                    treedata && treedata.map((ele)=>{
                        const Expand=()=>{
                            nav(`/singletree/${ele._id}`)
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

export default Trees;
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Singletree(){
    const [singletree, setsingletree] = useState([])
    const {id} = useParams()
    const nav = useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:7416/singletree/'+id).then((response)=>{
            setsingletree(response.data.single)
            // console.log({singletree})
        })
    },[])
    return(
        <div id="singledata">
            <div id="imgdiv">
                <img src={`http://localhost:7416/img/${singletree.profile}`} alt={singletree.name}/>
            </div>
            <div id="textareadiv" style={{float:'right',width:'400px'}}>
                <div style={{background:'white',padding:'15px',borderRadius:'10px'}}>
                    <h2 style={{color:'red'}}>{singletree.name}</h2>
                    <h4>{singletree.details}</h4>
                </div>
                <button id="loginbutton" onClick={()=>nav('/Trees')}>Return</button>
            </div>
            <div id="ptag">
                <p>{singletree.details}</p>
            </div>
        </div>
    )
}

export default Singletree;
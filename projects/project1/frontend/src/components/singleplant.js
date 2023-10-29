import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Singleplant(){
    const [singleplant, setsingleplant] = useState([])
    const {id} = useParams()
    const nav = useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:7416/singleplant/'+id).then((response)=>{
            setsingleplant(response.data.single)
            console.log({singleplant})
        })
    },[])
    return(
        <div id="singledata">
            <img src="lhailnva;oncaoergnlsirtngi" alt={singleplant.name}/>
            <h2>{singleplant.name}</h2>
            <h4>{singleplant.details}</h4>
            <button id="loginbutton" onClick={()=>nav('/Plants')}>Return</button>
        </div>
    )
}

export default Singleplant;
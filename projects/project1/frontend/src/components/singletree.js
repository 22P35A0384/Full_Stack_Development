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
            console.log({singletree})
        })
    },[])
    return(
        <div id="singledata">
            <img src="lhailnva;oncaoergnlsirtngi" alt={singletree.name}/>
            <h2>{singletree.name}</h2>
            <h4>{singletree.details}</h4>
            <button id="loginbutton" onClick={()=>nav('/Trees')}>Return</button>
        </div>
    )
}

export default Singletree;
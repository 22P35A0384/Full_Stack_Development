import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';


function Products(){
    const[data,setData] = useState([])
    const[cnt,setCnt] = useState(0)
    const api = 'https://fakestoreapi.com/products';
    useEffect(()=>{
        getProductlist()
    },[cnt])
    const getProductlist = () =>{
        axios.get(api).then((response) => {
            setData(response.data);
        });
    }
    return(
        <>
            <p>{cnt}</p>
            <button onClick={()=>setCnt(cnt+1)}>COUNT</button>
            <div className="products-list">
                {
                    data.map((ele,i)=>{
                        return(
                            <div className="card">
                                <img src={ele.image}/>
                                <p>{ele.title}</p>
                                <p>{ele.price}</p>
                                <p>{ele.category}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Products;
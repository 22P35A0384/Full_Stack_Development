import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Mens(){
    const[data,setData] = useState([])
    const api = 'https://fakestoreapi.com/products';
    useEffect(()=>{
        getProductlist()
    },[])
    const getProductlist = () =>{
        axios.get(api).then((response) => {
            setData(response.data);
        });
    }
    return(
        <>
            <div style={{marginTop:'30px'}} className="container">
                <div className="row">
                    <div className="col-md-2 col-sm-6">
                        <h1>Sort By :</h1>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <Link className="test" to='/electronics'>Electronics</Link>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <Link className="test" to='/jewelery'>Jewelery</Link>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <Link className="test" to="/men's_clothing">Men's clothing</Link>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <Link className="test" to="/women's_clothing">Women clothing</Link>
                    </div> 
                </div>
            </div>
            <div className="products-list">
                {
                    data.map((ele,i)=>{
                        let x = ele.category
                        if (x=="men's clothing"){
                            return(
                                <div>
                                    <div className="card">
                                        <img src={ele.image}/>
                                        <p>{ele.title}</p>
                                        <p>{ele.price}</p>
                                        <p>{ele.category}</p>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </>
    )
}

export default Mens;
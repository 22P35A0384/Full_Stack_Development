import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './App.css';
import Singleproduct from "./single_product";


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
            {/* <p>{cnt}</p> */}
            {/* <button onClick={()=>setCnt(cnt+1)}>COUNT</button> */}
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
                        // console.log(ele)
                        function Show(){
                            console.log(ele.id)
                        }
                        return(
                            <div id={ele.id}>
                                <div className="card">
                                    <img src={ele.image}/>
                                    <p>{ele.title}</p>
                                    <p>Price : {ele.price}</p>
                                    <p>Rating : {ele.rating.rate}</p>
                                    <p>Sales Count :  {ele.rating.count}</p>
                                    <p>{ele.category}</p>
                                    {/* <Link className="test" to='/single_product'>SHOW</Link> */}
                                    <button className="test" onClick={Show}>SHOW</button>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Products;
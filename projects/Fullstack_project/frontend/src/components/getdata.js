import axios from "axios";
import React, { useEffect, useState } from "react";

const Getourdata = () =>{
    let [users, getUsers]  = useState([])
    let api = 'http://localhost:7416/getdata';
    useEffect(()=>{
        axios.get(api).then((response)=>{
            console.log(response.data.userdata)
            getUsers(response.data.userdata);
        })
    });
    
    return(
        <center>
            <table style={{color:'white'}} border={1} cellSpacing={0}>
                <tr>
                    <th>Sl No</th>
                    <th>Name</th>
                    <th>Password</th>
                    <th>Course</th>
                    <th>Settings</th>
                </tr>
                {users && users.map((ele,i)=>{
                    return(
                        <tr id={i}><td>{i+1}</td><td>{ele.username}</td><td>{ele.password}</td><td>{ele.course}</td><td><button onClick={()=>document.getElementById(i).innerHTML='<td><input/></td><td><input/></td><td><input/></td><td><input/></td><td><button onClick={Save}>Save</button><button onClick={Delete}>Delete</button></td>'}>Edit</button><button onClick={()=>document.getElementById(i).innerHTML=' '}>Delete</button></td></tr>
                    )
                })}
            </table>
        </center>
    )
}

export default Getourdata;
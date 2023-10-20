import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Getourdata = () =>{
    let [users, getUsers]  = useState([])
    let api = 'http://localhost:7416/getdata';
    useEffect(()=>{
        axios.get(api).then((response)=>{
            console.log(response.data.userdata)
            getUsers(response.data.userdata);
        })
    },[]);
    let [formdata, setFormdata] = useState({
        'username':'',
        'password':'',
        'mail':'',
        'course':''
    })
    const {id} = useParams()
    alert(id)
    useEffect(()=>{
        axios.get('http://localhost:7416/getuserdata/'+id).then((response)=>{
            console.log(response.data.userdata)
            setFormdata(response.data.userdata)
        })
    })
    
    const deleteuser=(id)=>{
        let api = 'http://localhost:7416/deleteuser/'+id
        axios.delete(api).then((response)=>{})
        alert('deleted')
        window.location.reload()
    }
    
    return(
        <center>
            <table style={{color:'white'}} border={1} cellSpacing={0}>
                <tr>
                    <th>Sl No</th>
                    <th>Name</th>
                    <th>Password</th>
                    <th>Mail Id</th>
                    <th>Course</th>
                    <th colSpan={2}>Settings</th>
                </tr>
                {users && users.map((ele,i)=>{
                    const Edit=(id)=>{
                        if ((ele._id)==id){
                            alert(ele.username)
                            document.getElementById(id).innerHTML='<td>'+(i+1)+'</td><td><input value='+(ele.username)+'></td><td><input value='+(ele.password)+'></td><td><input value='+(ele.mail)+'></td><td><input value='+(ele.course)+'></td><td><button>Save</button></td><td><button>Delete</button></td>'
                        }
                    }
                    return(
                        <tr id={ele._id} style={{cursor:'default'}}>
                            <td>{i+1}</td>
                            <td>{ele.username}</td>
                            <td>{ele.password}</td>
                            <td>{ele.mail}</td>
                            <td>{ele.course}</td>
                            <td><button onClick={()=>Edit(ele._id)} style={{cursor:'pointer'}}>Edit</button></td>
                            <td><button style={{cursor:'pointer'}} onClick={()=>deleteuser(ele._id)}>Delete</button></td>
                        </tr>
                    )
                })}
            </table>
        </center>
    )
}

export default Getourdata;
import React, { useState } from "react";
function Form(){
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    function proceedSubmit(event){
        event.preventDefault()
        // console.log(name)
        // console.log(formData)
        let x = document.getElementById('p').innerHTML = 'Welcome Mr. '+name
        let y = document.getElementById('p1').innerHTML = 'This Is Your Password : '+password
    }
    return(
        <div>
            <h1>This Is A Form Page</h1>
            <form onSubmit={(proceedSubmit)}>
                <input type="text" placeholder="Enter Username" name="username" onChange={(e)=>setName(e.target.value)}/><br/>
                <input type="password" placeholder="Enter Password" name="password" onChange={(e)=>setPassword(e.target.value)}/><br/>
                <button type="submit" name="submit">SUBMIT</button><br/>
                <p id="p"></p>
                <p id="p1"></p>
            </form>
        </div>
    )
}

export default Form
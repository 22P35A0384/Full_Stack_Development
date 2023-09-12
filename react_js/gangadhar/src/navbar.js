import React,{Component, useState} from "react";

function Nav(){
        const [formData, setFormData] = useState({
            username : '',
            password : ''
        })
        function proceedSubmit(event){
            event.preventDefault()
            // console.log(name)
            // console.log(formData)
            let x = document.getElementById('p').innerHTML = 'Welcome Mr. '+formData.username
            let y = document.getElementById('p1').innerHTML = 'This Is Your Password : '+formData.password
        }
        return(
            <div style={{marginTop:'50px'}}>
                <form onSubmit={proceedSubmit}>
                    <input type="text" placeholder="Enter Username" name="username" value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})}/><br/>
                    <input type="password" placeholder="Enter Password" name="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} /><br/>
                    <button type="submit" name="submit">SUBMIT</button><br/>
                    <p id="p"></p>
                    <p id="p1"></p>

                </form>
            </div>
        )
}

export default Nav
import React,{Component} from "react";

class Home extends Component{
    render(){
        function show(name){
            alert("Mr"+name+'Your Data Is Submited')
        }

        return(
            <div style={{background:'black',color:'white',marginTop:'100px'}}>
                <h1>This Is A Home Page</h1>
                <button onClick={()=>show('Gangadhar')}>SUBMIT</button>
            </div>
        )
    }
}
export default Home;
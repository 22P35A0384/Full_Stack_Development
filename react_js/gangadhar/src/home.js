import React,{Component} from "react";

class Home extends Component{
    render(){
        const mylist = ['red','green','blue','yellow']
        function show(name){
            
            const list = name.list;
            const showclr = () => {
                const randomIndex = Math.floor(Math.random()*list.length);
                const randomElement = list[randomIndex];
                let x = document.getElementById('clr').innerHTML = "<div style={{width:'100px',height:'100px',background:"+randomElement+",marginTop:'50px'}}></div>";
            }
            
        }

        return(
            <div style={{background:'black',color:'white',marginTop:'100px'}}>
                <h1>This Is A Home Page</h1>
                <button onClick={()=>show(mylist)}>SUBMIT</button>
                <center id="clr"><div style={{width:'100px',height:'100px',background:'red',marginTop:'50px'}}></div></center>
            </div>
        )
    }
}
export default Home;
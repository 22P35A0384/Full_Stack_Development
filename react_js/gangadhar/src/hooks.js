import { useState } from "react";

function Hooks(){
    const [cnt, setCnt] = useState(0)
    const [name, setName] = useState('')
    const [arr, setColor] = useState(['red','green','blue','yellow'])
    return(
        <div>
            <h1>React Hooks</h1>
            <p>Count is : {cnt} </p>
            {/* <button onClick={getCount}>Increment By 1</button> */}
            <button onClick={()=>setCnt(cnt+1)}>Increment By 1</button>
            <br/>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
            <p>The Name Is : {name}</p>
            <h1>Colors</h1>
            <button onClick={()=>setColor(cnt+1)}>Increment By 1</button>
        </div>
    ) 
}

export default Hooks
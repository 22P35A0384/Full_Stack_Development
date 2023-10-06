import { useState } from "react";

function Home(){
    const [bg,Bg] = useState(true)
    return(
        <>
        <h1>This Is Home Page</h1>
        {
            bg===true ? <button onMouseOver={true} onMouseOut={false}>Mouse Over</button> : <button onMouseOver={true} onMouseOut={false}>Mouse Over</button>
        }
        </>
    )
}

export default Home;
import React,{Component} from "react";

class Event extends Component{
    render(){
        let studentdata1 = [{
            name : 'Gangadhar',
            rollno : '22P35A0384',
            branch : 'Mech',
            college : 'ACET'
        },
        {
            name : 'Satya',
            rollno : '22P35A0384',
            branch : 'Mech',
            college : 'ACET'
        },
        {
            name : 'Durga Sai',
            rollno : '22P35A0384',
            branch : 'Mech',
            college : 'ACET'
        },
        {
            name : 'Teju',
            rollno : '22P35A0384',
            branch : 'Mech',
            college : 'ACET'
        },
        {
            name : 'DP',
            rollno : '22P35A0384',
            branch : 'Mech',
            college : 'ACET'
        }]
        const getdata = () => {
            studentdata1.map((ele,i)=>{
                document.write((i+1)+'&nbsp;'+ele.name+"<br>"+'&nbsp;'+'&nbsp;'+'&nbsp;'+ele.rollno+"<br>"+'&nbsp;'+'&nbsp;'+'&nbsp;'+ele.branch+"<br>"+'&nbsp;'+'&nbsp;'+'&nbsp;'+ele.college+"<br>"+"<br>")
            })
        }
        return(
            <div style={{marginTop:'50px'}}>
                <button onClick={()=>getdata()}>Submit</button>
            </div>
        )
    }
}
export default Event
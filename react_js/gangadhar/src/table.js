import React,{Component} from "react"

class Table extends Component{
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
    return(
        <div style={{marginTop:'50px'}}>
            <center>
            <table className="table" border={1} cellPadding={10} cellSpacing={5}>
                <thead className="thead">
                    <tr>
                        <th className="th">Name</th>
                        <th className="th">RollNo</th>
                        <th className="th">Branch</th>
                        <th className="th">College</th>
                    </tr>
                </thead>
                <tbody className="tbody"> 
                    {
                        studentdata1.map((ele,i)=>{
                            return(
                                <tr><td className="td">{ele.name}</td><td className="td">{ele.rollno}</td><td className="td">{ele.branch}</td><td className="td">{ele.college}</td></tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </center>
        </div>
    )
    }
}
export default Table
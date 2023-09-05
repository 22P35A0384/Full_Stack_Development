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
    },{
        name : 'Hari',
        rollno : '22P35A0394',
        branch : 'Mech',
        college : 'ACET'
    }]
    function show(){
        let x = document.getElementById('test').innerHTML = '<td><input type="text"/></td><td><input value="ele.name"/></td><td><input/></td><td><input/></td>'
    }
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
                                <tr id="test" onClick={show}><td>{ele.name}</td><td>{ele.rollno}</td><td>{ele.branch}</td><td>{ele.college}</td></tr>
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
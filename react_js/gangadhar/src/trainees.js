import Student from "./student";
function Trainees(){
    let studentdata = [{
        name : 'Gangadhar',
        rollno : '22P35A0384',
    },
    {
        name : 'Satya',
        rollno : '22P35A0384',
    },
    {
        name : 'Durga Sai',
        rollno : '22P35A0384',
    },
    {
        name : 'Teju',
        rollno : '22P35A0384',
    },
    {
        name : 'DP',
        rollno : '22P35A0384',
    }]
    return(
        <div>
            <h1>Students Data</h1>
            {
                studentdata.map((ele,i)=>{
                    return(
                        <Student name={ele.name} rollno={ele.rollno}/>
                    )
                })
            }
            
        </div>
    )
}
export default Trainees
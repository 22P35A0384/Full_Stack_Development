function Student(data){
    let name = 'Gangadhar'
    let roll = '22P35A0384'
    return(
        <div style={{marginTop:'100px'}}>
            <h4>The Student Name Is {data.name}</h4>
            <h4>The Student Roll Number Is {data.roll}</h4>
        </div>
    )
}
export default Student

import React,{Component} from "react"

class Student extends Component{
    render(){
    return(
        <div style={{marginTop:'100px'}}>
            <h4>The Student Name Is {this.props.name} </h4>
            <h4>The Student Roll Number Is {this.props.rollno}</h4>
        </div>
    )
    }
}
export default Student

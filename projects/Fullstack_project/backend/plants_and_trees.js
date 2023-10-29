import mongoose from "mongoose";
const schema = mongoose.Schema;

let plants = new schema({
    fname:{
        type:String
    },
    lname:{
        type:String
    },
    password:{
        type:String
    },
    email:{
        type:String
    },
    name:String,
    img:{
        data:Buffer,
        contentType:String
    }
});

export default mongoose.model('plants and trees',plants)
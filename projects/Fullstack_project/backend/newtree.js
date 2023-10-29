import mongoose from "mongoose";
const schema = mongoose.Schema;

let newtree = new schema({
    name:{
        type:String
    },
    details:{
        type:String
    },
    img:{
        data:Buffer,
        contentType:String
    }
})

export default mongoose.model('Newtree',newtree)
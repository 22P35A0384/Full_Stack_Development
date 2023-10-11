import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import form from './models/form';
import newuser from './models/newuser';
const app = express()
app.use(bodyParser.json())
app.use(cors())
mongoose.connect('mongodb+srv://venkatasaigangadharsgk:n4VQAS94wkyL4Nls@cluster0.cykwkdu.mongodb.net/Gangadhar?retryWrites=true&w=majority')
    .then(()=>app.listen(7416))
    .then(()=>
        console.log('sucess')
    )
    .catch((err)=>console.log(err));
app.post('/adddata',(req,res,next)=>{
    console.log(req.body)
})
// app.use('/api',(req,res,next)=>{
//     res.send('sending response (with path "api")')
// })
// app.use('/testing',(req,res,next)=>{
//     res.send('sending response (with path "testing")')
// })

app.post('/adduser',(req,res,next)=>{
    console.log(req.body.formdata)
    const {username, password, mail, course} = req.body.formdata;
    const formdata = new form({
        username,
        password,
        mail,
        course
    })
    try{
        formdata.save()
        return res.send({msg:'inserted'})
    }catch(err){
        console.log(err)
    }
    return res.status(200).json({formdata})
})

app.get('/getdata',async(req,res,next)=>{
    let userdata;
    try{
        userdata = await form.find();
    }catch(err){
        console.log(err)
    }
    if (!userdata){
        return res.status(404).json({msg:'No Students Found.'})
    }
    return res.status(200).json({userdata})
})
// app.listen(7416,()=>console.log("server"))

app.post('/addnewuser',(req,res,next)=>{
    console.log(req.body.newuser)
    const {username, password, cnfpass} = req.body.newuser;
    const formdata = new form({
        username,
        password,
        cnfpass
    })
    try{
        formdata.save()
        return res.send({msg:'inserted'})
    }catch(err){
        console.log(err)
    }
    return res.status(200).json({form})
})
import express from 'express';
import nodemailer from 'nodemailer'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import form from './models/form';
import newuser from './models/newuser';
import newdata from './newdata';
import multer from 'multer';
import plants from './plants_and_trees';
import fs from 'fs';
import newplant from './public/newplant';
import newtree from './newtree';

const app = express()
app.use(bodyParser.json())
app.use(cors())
mongoose.connect('mongodb+srv://venkatasaigangadharsgk:n4VQAS94wkyL4Nls@cluster0.cykwkdu.mongodb.net/Gangadhar?retryWrites=true&w=majority')
    .then(()=>app.listen(7416))
    .then(()=>
        console.log('success')
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

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'public/profile')
    },
    filename: function (req, file, callback) {
      // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      callback(null, Date.now()+"_"+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

app.get('/getdata',async(req,res,next)=>{
    let userdata;
    try{
        userdata = await plants.find();
    }catch(err){
        console.log(err)
    }
    if (!userdata){
        return res.status(404).json({msg:'No Students Found.'})
    }
    return res.status(200).json({userdata})
})
// app.listen(7416,()=>console.log("server"))

app.post('/addnewuser',upload.single('myimg'),async(req,res,next)=>{
    console.log(req.body)
    // const profile = (req.file) ? req.file.filename : null
    const {fname,lname, password, email} = req.body;
    const formdata = new plants({
        fname,
        lname,
        password,
        email,
        img:{
            data:fs.readFileSync('public/profile/'+req.file.filename),
            contentType:'image/jpg'
        }
    })
    try{
        formdata.save()
        return res.send({msg:'Your Account Was Created, You Will Be Redirected To Login Page'})
    }catch(err){
        console.log(err)
    }
    return res.status(200).json({form})
})

app.get('/getdatabyemail/:id',async(req,res,next)=>{
    const _id = req.params.id
    console.log(_id)
    let logindata;
    try{
        logindata = await plants.findById(_id);
        console.log(logindata)
    }catch(err){
        console.log(err)
    }
    if(!logindata){
        return res.status(404).json({msg:'No User Found.'})
    }
    return res.status(200).json({logindata})
})

app.get('/singleplant/:id',async(req,res,next)=>{
    const _id = req.params.id
    let single;
    try{
        single = await newplant.findById(_id);
        console.log(single)
    }catch(err){
        console.log(err)
    }
    if(!single){
        return res.status(404).json({msg:'No Plants Found.'})
    }
    return res.status(200).json({single})
})

app.get('/singletree/:id',async(req,res,next)=>{
    const _id = req.params.id
    let single;
    try{
        single = await newtree.findById(_id);
        console.log(single)
    }catch(err){
        console.log(err)
    }
    if(!single){
        return res.status(404).json({msg:'No Trees Found.'})
    }
    return res.status(200).json({single})
})

app.post('/addplant',upload.single('img'),async(req,res,next)=>{
    console.log(req.body)
    const {name,details} = req.body;
    const addplant = new newplant({
        name,
        details,
        img:{
            data:fs.readFileSync('public/profile/'+req.file.filename),
            contentType:'image/jpg'
        }
    })
    try{
        addplant.save()
        return res.send({msg:'inserted'})
    }catch(err){
        console.log(err)
    }
    return res.status(200).json({addplant})
})

app.post('/addtree',upload.single('img'),async(req,res,next)=>{
    console.log(req.body)
    const {name,details} = req.body;
    const addtree = new newtree({
        name,
        details,
        img:{
            data:fs.readFileSync('public/profile/'+req.file.filename),
            contentType:'image/jpg'
        }
    })
    try{
        addtree.save()
        return res.send({msg:'inserted'})
    }catch(err){
        console.log(err)
    }
    return res.status(200).json({addtree})
})

app.get('/getplant',async(req,res,next)=>{
    let getplant;
    try{
        getplant = await newplant.find();
    }catch(err){
        console.log(err)
    }
    if (!getplant){
        return res.status(404).json({msg:'No Plants Found.'})
    }
    return res.status(200).json(getplant)
})

app.get('/gettree',async(req,res,next)=>{
    let gettree;
    try{
        gettree = await newtree.find();
    }catch(err){
        console.log(err)
    }
    if (!gettree){
        return res.status(404).json({msg:'No Trees Found.'})
    }
    return res.status(200).json(gettree)
})

app.delete('/deleteuser/:id',async(req,res,next)=>{
    const _id = req.params.id
    let studentdata
    try{
        studentdata = await newdata.findByIdAndDelete(_id)
    }
    catch(err){
        console.log(err)
    }
})

app.get('/getuserdata/:id',async(req,res,next)=>{
    const _id = req.params.id
    let userdata;
    try{
        userdata = await newdata.findById(_id);
    }catch(err){
        console.log(err)
    }
    if (!userdata){
        return res.status(404).json({msg:'No Students Found.'})
    }
    const path = '..../backend/public/images/'+userdata.profile
    return res.status(200).json({userdata,path})
})

app.put('/editform/:id',async(req,res,next)=>{
    const _id = req.params.id
    const {username, password, mail} = req.body.formdata;
    let updatedata;
    try{
        updatedata = await newdata.findByIdAndUpdate(_id,{username, password, mail})
        return res.send({msg:'updated'})
    }catch(err){
        console.log(err)
    }
    if(!updatedata){
        return res.status(404).json({msg:'Users Not Found'})
    }
    return res.status(200).json({updatedata})
})



app.post('/newdata',upload.single('myfile'),async(req,res,next)=>{
    console.log(req.body)
    const profile = (req.file) ? req.file.filename : null
    const {username, password, mail} = req.body;
    const formdata = new newdata({
        username,
        password,
        mail,
        profile
    })
    try{
        formdata.save()
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'technicalhubdriverready@gmail.com',
              pass: 'aqlp joww mqgk fmbw'
            }
          });
          
          var mailOptions = {
            from: 'technicalhubdriverready@gmail.com',
            to: mail,
            subject: 'Conformation Mail',
            text: 'Hello Mr. '+username+' Thanks For Registering, Please Conform Your Registration',
            attachments:[{
                filename:profile,
                path:'public/pdfs/'+profile
            }]
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
          return res.send({msg:profile})
    }catch(err){
        console.log(err)
    }
    return res.status(200).json({formdata})
})



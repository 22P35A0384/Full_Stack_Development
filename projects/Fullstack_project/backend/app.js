import express from 'express';
import nodemailer from 'nodemailer'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import form from './models/form';
import newuser from './models/newuser';
import newdata from './newdata';
import multer from 'multer';
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

app.delete('/deleteuser/:id',async(req,res,next)=>{
    const _id = req.params.id
    let studentdata
    try{
        studentdata = await form.findByIdAndDelete(_id)
    }
    catch(err){
        console.log(err)
    }
})

app.get('/getuserdata/:id',async(req,res,next)=>{
    const _id = req.params.id
    let userdata;
    try{
        userdata = await form.findById(_id);
    }catch(err){
        console.log(err)
    }
    if (!userdata){
        return res.status(404).json({msg:'No Students Found.'})
    }
    return res.status(200).json({userdata})
})

app.put('/editform/:id',async(req,res,next)=>{
    const _id = req.params.id
    const {username, password, mail, course} = req.body.formdata;
    let updatedata;
    try{
        updatedata = await form.findByIdAndUpdate(_id,{username, password, mail, course})
        return res.send({msg:'updated'})
    }catch(err){
        console.log(err)
    }
    if(!updatedata){
        return res.status(404).json({msg:'Users Not Found'})
    }
    return res.status(200).json({updatedata})
})

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'public/pdfs')
    },
    filename: function (req, file, callback) {
      // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      callback(null, Date.now()+"_"+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

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
          return res.send({msg:'inserted'})
    }catch(err){
        console.log(err)
    }
    return res.status(200).json({formdata})
})
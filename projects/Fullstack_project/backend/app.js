import express from 'express';
const app = express()
app.use('/api',(req,res,next)=>{
    res.send('sending response (with path "api")')
})
app.use('/testing',(req,res,next)=>{
    res.send('sending response (with path "testing")')
})
app.listen(7416)
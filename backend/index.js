// config
require('dotenv').config();
const BACKEND_URL=process.env.BACKEND_URL;
const PORT=process.env.PORT;

const express=require('express');
const app=express();
// route
app.get('/',(req,res)=>{
    res.json("hello world")
})
// listen
app.listen(PORT,()=>{
    console.log("backend is running on "+BACKEND_URL+':'+PORT)
})
// config
import dotenv from 'dotenv'
dotenv.config();
const BACKEND_URL=process.env.BACKEND_URL;
const PORT=process.env.PORT;
const FRONTEND_URL=process.env.FRONTEND_URL;
const DB_URL=process.env.DB_URL;
//db connection
import { connectDB } from './config/db.js';
connectDB(DB_URL);
//app creation
import express from 'express'
const app=express();
// cors policy
import cors from 'cors'
app.use(cors(
    {origin:FRONTEND_URL}
))
// parsing
app.use(express.json())
// route
app.get('/',(req,res)=>{
    res.json("hello world")
})
// listen
app.listen(PORT,()=>{
    console.log("backend is running on "+BACKEND_URL+':'+PORT)
})
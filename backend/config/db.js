//mongoose
import mongoose from "mongoose"

export const connectDB=(DB_URL)=>{
    mongoose.connect(DB_URL).then(()=>{
        console.log('db is connected')
    }).catch((e)=>{
        console.log(e)
    })
}
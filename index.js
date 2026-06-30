import express from "express"
import dotenv from "dotenv"
dotenv.config()

const port=process.env.PORT||5000
const app=express()

app.get("/",(req,res)=>{
    return res.status(200).json({message:" Home route version-6"})
})
app.get("/hello",(req,res)=>{
    return res.status(200).json({message:"CI-CD working 👍"})
})

app.listen(port,()=>{
    console.log(`server running at ${port}`)
})
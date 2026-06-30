import express from "express"
import dotenv from "dotenv"
dotenv.config()

const port=process.env.PORT||5000
const app=express()

app.get("/",(req,res)=>{
    return res.status(200).json({message:" Home version-5"})
})
app.get("/hello",(req,res)=>{
    return res.status(200).json({message:"CI-CD working test from hello route"})
})

app.listen(port,()=>{
    console.log(`server running at ${port}`)
})
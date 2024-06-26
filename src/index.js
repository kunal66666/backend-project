// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
    console.log(` server is running at port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("mongodb connection failed !!!",err);
})

// import express from "express"
// const app=express()
//  second approach
// iife or use fucntion js
// (async()=>{
//     try{

//        await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error",(error)=>{
//         console.log("error",error);
//         throw error
//        })
//        app.listem(process.env.PORT,()=>{
//         console.log(`app is lestening on port ${process.env.PORT}`)
//        })
//     }catch(error){
//         console.log("Error",error)
//         throw err
//     }
// })()
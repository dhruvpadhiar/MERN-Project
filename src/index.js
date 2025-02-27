import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config();

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server started at http://localhost:${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.error("MongoDB connection FAILED", err)
})












/*
import express from "express";
const app = express();

;(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(err)=>{
            console.error("Error while starting the server",err);
            throw err;   
        })
        app.listen(process.env.PORT || 8000 ,()=>{
            console.log(`Server started at http://localhost:${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error while connecting to the database",error);
        throw error;
    }
})()
*/
import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

import express from "express";
const app = express();


const connectDB = async ()=>{
   try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`DB Connected || host: ${connectionInstance.connection.host}`)
        // app.listen(process.env.PORT || 8000, ()=>{
        //     console.log(`Server started at http://localhost:${process.env.PORT}`);
        // })
   } catch (error) {
        console.error("Error while connecting to the database",error);
        process.exit(1)
        
   }
}

export default connectDB;
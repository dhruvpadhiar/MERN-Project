import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    
},{timeseries:true});

export const Video = mongoose.model("Video", videoSchema);
import mongoose from "mongoose";

const noticeSchema = new Schema({
    
},{timestamp: true, versionKey: false})

export const userModel = mongoose.model("notices",noticeSchema);
import mongoose from "mongoose";

const noticeSchema = new Schema({
    desc:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    }
},{timestamps: true, versionKey: false})

export const userModel = mongoose.model("notices",noticeSchema);
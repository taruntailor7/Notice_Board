import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
},{timestamps: true, versionKey: false});

export const userModel = mongoose.model("users",userSchema);



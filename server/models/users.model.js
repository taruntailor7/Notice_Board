import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        validate: {
            validator: /^[0-9a-zA-Z]+$/, 
            message: "Please enter alphanumeric username only!"
        },
    },
},{timestamp: true, versionKey: false})

export const userModel = mongoose.model("users",userSchema);


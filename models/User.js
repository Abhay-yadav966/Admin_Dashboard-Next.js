import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },

    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },

    password:{
        type:String,
        trim:true,
        required:true
    },

    phone:{
        type:Number,
        trim:true,
    },

    isAdmin:{
        type:Boolean,
        required:true,
        default:false,
    },

    active :{
        type:Boolean,
        required:true,
        default:true
    },

    address:{
        type:String,
        required:true,
    },

    createdAt:{
        type:Date,
        default:Date.now ,
    }
})

export const User = mongoose.model.User || mongoose.model("User", userSchema);
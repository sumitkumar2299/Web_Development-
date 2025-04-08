const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    userid:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        minlength:true,
        unique:true,

    },


    usertype:{
        type:String,
        default:"customer",
        enum:["customer","admin"]

    }
},{timestamps:true,versionKey:false})

module.exports = mongoose.model("user",userschema)
const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
        lowercase:true,
        minLength:true,
        unique:true,

    },


    password:{
        type:String,
        required:true

    },

},{timestamps:true,versionKey:false})

module.exports = mongoose.model("collection",customerSchema);
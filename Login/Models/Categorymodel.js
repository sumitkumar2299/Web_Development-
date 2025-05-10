const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },

    description:{
        type:string,
        required:true,
    }
},{timestamps:true,versionKey:false})

module.exports = mongoose.model("category",categorySchema)
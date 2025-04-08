const express = require("express");
const server_config = require('./configs/server.config');
const mongoose = require("mongoose");
const dbconfig = require("./configs/db.config")
const user_model = require("./Models/usermodel");
const bcrypt = require("bcryptjs");
const serverConfig = require("./configs/server.config");


mongoose.connect(dbconfig.DB_URL);

const db = mongoose.connection

db.on("error",()=>{
    console.log("error while connecting to database")
})

db.once("open",()=>{
    console.log("connected to mongodb");
    input()
    
})

async function init(){
    try{
        let user = await user_model.findOne({userid:admin})

        if(user){
            console.log("admin is already present")
            return
        }
    }
    

}



const app = express();

app.listen(serverConfig.PORT,()=>{
    console.log("server started at port number",serverConfig.PORT)
})


const express = require('express')
const mongoose = require("mongoose")
const dbconfig = require('./config/db.config')
const customermodel = require('./Models/Customer')
const app = express()
const port = 3000


// connecting database 

mongoose.connect(dbconfig.DB_URL);
const db = mongoose.connection;

db.on("error",()=>{
    console.log("error while connecting to db");
})

db.once("open",()=>{
    console.log("sucsessfully connected to database");
})


app.get('/', (req, res) => {
  res.send('Hello express')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
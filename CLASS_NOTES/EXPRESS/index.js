const express = require("express");

console.log(typeof express); // express is a function

const app = express()

app.get("/",(req,res)=>{
    res.send("hello from the express server");
})

app.listen(8000,()=>{
    console.log("server is running on the port 8000");
})


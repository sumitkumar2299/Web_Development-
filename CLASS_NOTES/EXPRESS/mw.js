const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log("welcome to the new demo ")
    next()
})

const m1 = function(req,res,next){
    console.log("request came at:" ,Date.now());
    next()
}


// log the time after sending response 

const m2 = function(req,res,next){
    console.log("respond send at", Date.now());
     next();
}


app.use("/hello",m2)

app.get("/hello",(req,res,next)=>{
    res.send("message")
    next()
})



app.listen(1234,()=>{
    console.log("server got started");
})
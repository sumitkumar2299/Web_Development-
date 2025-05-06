const express = require("express");
const bodyParser = require('body-parser')
const app = express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index');
})

app.post('/welcome',(req,res)=>{
    const userName = req.body.name;
    res.render('welcome',{name:userName})
})

app.listen(3000,()=>{
    console.log("server started at port no 3000")
})
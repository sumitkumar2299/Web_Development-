const http = require("http");

// what is server => never stopping process.
// req,and res are object
const server = http.createServer((req,res)=>{
    if(req.url=="/hello"){
        res.end("hello i am sumit learning nodejs")
    }else{
        res.writeHead(404)
        res.end("use the right url");
    }
})

server.listen(3000,()=>{
    console.log("server got started")
})
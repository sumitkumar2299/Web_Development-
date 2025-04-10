// const express = require("express");
// const app = express();

// const students = {
//     1:{
//         vishwa:{
//             name:"vishwa",
//             age:99,
//             subject:"maths"
//         }
//     },
//     2:{
//         vishwa:{
//             name:"sumit",
//             age:9,
//             subject:"maths"
//         }
//     }

// }


// // // get 127.0.0.1:8080//api/v1/student/123 -> we want to read this 123 means id 
// // app.get("/api/v1/students/:id",(req,res)=>{
// //     // i need to read the id value
// //     // req.params ek object hai jo id deta hai 

// //     console.log(req.params.id);

// //     // let std_id = path.params.id
    
// // })



// app.get("/api/v1/students/:id", (req, res) => {
//     console.log("Route hit");
//     res.json({ id: req.params.id });
//   });
  


// // start the server 

// app.listen(5000,()=>{
//     console.log("server got started at 5000");
// })














const express = require('express')
const app = express();



const students = {
        1:{
            vishwa:{
                name:"vishwa",
                age:99,
                subject:"maths",
                id:1
            }
        },
        2:{
            vishwa:{
                name:"sumit",
                age:9,
                subject:"maths",
                id:2
            }
        }
    
    }

app.get('/api/v1/students/:id',(req,res)=>{
    console.log(req.params.id)
    let std_id = req.params.id
    let std_obj = students[std_id]

    if(std_obj){
        res.status(200).send(std_obj)
    }else{
        res.status(500).send({
            err:"student not found"
        })
    }
})



// query parameters 
// get 127.0.0.1:1456/api/v1/students/?id=1
//req.query is also id 
app.get("/api/v1/students",(req,res)=>{
    console.log(req.query);
    std_id = req.query.id
    stud_obj = students[std_id];
    if(stud_obj){
        res.status(200).send(stud_obj)
    }else{
        res.status(500).send({
            error:"students was not found"
        })
    }
})

app.listen('1456',()=>{
    console.log("server started at port 1456");
})




// req.body means jo hum login karne ke liye user ka detail lete hai wahi req.body hai 
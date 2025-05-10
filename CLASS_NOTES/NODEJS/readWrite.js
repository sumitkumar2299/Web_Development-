const fs = require('fs');

// read from the file 


// reading file in a sync way 

// console.log("before read code");
// const content = fs.readFileSync('input.txt')
// console.log("content read: "+content)

// console.log("after read code");


// reading in async way 


// console.log("before reading code")
// fs.readFile("input.txt",(err,content)=>{
//     if(err){
//       return console.log(err)
//     }
//     console.log("file read:"+content)
// })

// console.log("after read code");





// write the date into file 
// in synchronous way 
console.log("Before write");
fs.writeFileSync('output.txt',"hello, how are you?")
console.log("after write");


// asynchronous way 

console.log("before write");
fs.writeFile("output1.js","hello students",err=>{
    if(err){
        return console.log(err);
    }
    console.log("written succesfully");
});
console.log("after write")

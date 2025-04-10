// i want to call the function define in index.js

const obj = require('./index')

console.log(typeof obj) // this is object 

console.log(obj);

console.log(obj.add(5,6));
console.log(obj.minus(6,5));
// console.log(obj.multiply(5,6))


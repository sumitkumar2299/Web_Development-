// 5. You are developing a program to manage a list of unique items.
//  Write a JavaScript program that uses a
// Set to store a collection of unique numbers.
//  Use the Map object to associate each number with its square.
// // Finally, print both the unique numbers and their
//  corresponding squares. 


// const items = new Set();
// items.add(4);
// items.add(5);
// items.add(6);
// items.add(7);
// console.log(items);

// creating a set 
let uniqueNumbers = new Set([3,7,5,8,2,1]);
console.log(uniqueNumbers);

// now i have to use map object to associate each with square number 
// for this type of situation in which we have to traverse one by one 
// we can use foreach method

let NumberSquareMap = new Map();
// number is an arrow  function having no parameter 
NumberSquareMap.forEach(number=>{
    NumberSquareMap.set(number,number*number)
})

console.log(uniqueNumbers);
console.log(NumberSquareMap); // 
// print at the square for better readabilty 
console.log(Array.from(uniqueNumbers))

NumberSquareMap.forEach((square,number)=>{
    console.log(`${number} -> ${square}`);
})






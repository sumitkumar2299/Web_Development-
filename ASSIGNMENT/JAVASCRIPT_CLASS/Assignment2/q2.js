// calculating square of a given number and and display the result 
// square = (x)=>{
//     return x*x;
// }

// console.log(square(5));


// question 2 
//a sort the array and find 
// age.sort();
// console.log(age);



// const age = [19,22,19,24,20,25,26,24,25,24];
// let median_age;
// x = age.length;
// if(x%2==0){
//     median_age = (x/2)+((x+2)/2)
// }
// else{
//     median_age = x/2;
// }
// console.log(median_age);



// average age 

// const age = [19,22,19,24,20,25,26,24,25,24];


// let total = 0

// for(let index = 0; index<age.length; index++ ){
//     total = total+age[index];
// }
// let average = total/age.length;
// console.log(average);



// range of an age 

const age = [19,22,19,24,20,25,26,24,25,24];
// sort the array
x = age.sort();
console.log(x);
const min = age[0];

// extract last element from the array using pop

const max = age.pop();
const range = max-min
console.log(range);


// abs method in an array. 
const numbers = [-4, 3, -2, 8, -1];
const absValues = numbers.map(num => Math.abs(num));
console.log(absValues); // [4, 3, 2, 8, 1]




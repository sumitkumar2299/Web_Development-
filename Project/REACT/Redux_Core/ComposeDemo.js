import {compose} from 'redux'

function removeSpaces(String){
   return String.split(' ').join('');
}

function repeatString(String){
    return String.repeat(2); // can also use string.repeat(2); 
}

function convertToUpper(String){
    return String.toUpperCase();
}


const input = 'abc def ghi'

const composedFunction = compose(removeSpaces,repeatString,convertToUpper);
console.log(composedFunction);// it gives a function

console.log(composedFunction(input));
// Create a simple JavaScript function named displayInfo that takes two
//  parameters (name and role) and
// logs a messageG
// Use call to invoke the displayInfo function with specific argumentsG
// Use apply to invoke the displayInfo function with arguments passed as 
// an arrayG
// Create another function named greet that logs a greeting with this
//  contextG
// Use bind to create a new function boundGreet with a specific 
// context and log the greeting.



// we have to use call apply and bind 


function displayInfo(name,role){
    console.log(`hey i am ${name} and i am ${role}`);
}

displayInfo.call(null,"sumit" , "developer")
displayInfo.apply(null,["sumit","developer"]);

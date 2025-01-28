
// using closures 



function CalculateTax(){
    let x = console.log("tax to be paid is ");
    return function(){
        return x.concat("10000");
    }

    let totalTax = CalculateTax();
    
}
console.log(totalTax());

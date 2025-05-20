// 4. Create two objects person1 and person2 with properties name and age. Create a function “introduce” that
// prints "Hello, I'm [name], and I'm [age] years old." Use the call method to make person2 introduce itself
// using the introduce function.




// object mein hamesha this function ka use hota hai 
const obj1 = {
    name: "sumit",
    age:21

}

const obj2 ={
    name:"rahul",
    age:21

}

function introduce(){
    console.log(`hello i am ${this.name} amd  i am ${this.age} years old`);
}


introduce.call(obj2);
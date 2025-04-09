// interview topic 

// function greet(name){
//     console.log("hello",name);
// }


function Person(name,age){
    this.name = name
    this.age = age
}

function Car(make ,model){
    this.make = make
    this.model = model
}

let myCar = new Car("toyota","camry");
console.log(myCar);


let myNewCar = new Car("fortuner","m14");
console.log(myNewCar);



function tea(taste,type){
    this.taste = taste,
    this.type = type 
}

let myTea = new tea("tasty","masala");
console.log(myTea);



function Tea(type){
    this.type = type
    this.describe = function(){
        return `this is a cup of ${this.type}`
    }
}
let lemonTea = new Tea("lemon tea");
console.log(lemonTea.describe())


function Animal(species){
    this.species =species
}
Animal.prototype.sound = function(){
    return `${this.species} make a sound`
}

let dog = new Animal("Dog");
console.log(dog.sound());


function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name
}

let tea = new Drink("tea");
let coffee 
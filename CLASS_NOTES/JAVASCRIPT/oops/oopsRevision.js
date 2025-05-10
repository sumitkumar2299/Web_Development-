// objects 

const person = {
    name: "sumit",
    age:22,
    greet:function(){
        console.log(`hello my name is ${this.name}`);
    }
};

person.greet();

// constructor is a special method called when a new object is created.

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello, i am ${this.name} and i am ${this.age} years old.`);
    }
}

const person1 = new Person("sumit",22);
person1.greet();


// simple math utility class 

class Calculator{
    add(a,b){
        return a+b;
    }

    subtract(a,b){
        return a-b;
    }

    multiply(a,b){
        return a*b;
    }

    divide(a,b){
        if(b==0){
            return "cannot divide by zero";
        }
        return a/b;
    }
}

const calc = new Calculator();
console.log(calc.add(5,3));
console.log(calc.divide(10,2));


// product inventory system 

class Product{
    constructor(name,price,quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    totalPrice(){
        return this.price*this.quantity;
    }

    showDetails(){
        console.log(`${this.name}:${this.price}*${this.quantity} = ${this.totalPrice()}`);

    }
}

const product1 = new Product("Laptop",50000,2);
const product2 = new Product("phone",20000,3);

product1.showDetails();



// timer class with setinterval 

class Timer{
    constructor(duration){
        this.duration = duration
    }
    start(){
        let count = this.duration;
        const interval = setInterval(()=>{
            console.log(count);
            count--
            if(count<0){
                clearInterval(interval);
                console.log('TIMER ENDED')
            }
        },1000)
    }

}

const timer = new Timer(5);
timer.start();




// inheritance 

// Inheritance lets one class inherit properties and methods from another class.

class Person2{
    constructor (name){
        this.name = name;
    }
    greet(){
        console.log(`hello i am ${this.name}`);
    }
}

class Student extends Person2{
    constructor(name,studnetid){
        super(name);
        this.studnetid = studnetid
    }
    study(){
        console.log(`${this.name} is studying. studentid:${this.studnetid}`);
    }
}


const student1 = new Student("sumit","s1234");
student1.greet();

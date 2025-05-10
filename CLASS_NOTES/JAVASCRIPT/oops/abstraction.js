class Vehicle {
    startEngine() {
      console.log("Engine started");
    }
  
    drive() {
      throw new Error("Method 'drive()' must be implemented.");
    }
  }
  
  class Car extends Vehicle {
    drive() {
      console.log("Car is driving");
    }
  }
  
  const myCar = new Car();
  myCar.startEngine(); // Engine started
  myCar.drive();       // Car is driving
  
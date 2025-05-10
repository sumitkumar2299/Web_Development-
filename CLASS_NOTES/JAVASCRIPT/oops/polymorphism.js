class Animal {
    makeSound() {
      console.log("Some generic animal sound");
    }
  }
  
  class Dog extends Animal {
    makeSound() {
      console.log("Bark");
    }
  }
  
  class Cat extends Animal {
    makeSound() {
      console.log("Meow");
    }
  }
  
  const animals = [new Animal(), new Dog(), new Cat()];
  
  animals.forEach(animal => animal.makeSound());
  // Output:
  // Some generic animal sound
  // Bark
  // Meow
  
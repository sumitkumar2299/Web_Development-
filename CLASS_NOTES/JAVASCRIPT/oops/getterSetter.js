class Student {
    constructor(name, age) {
      this._name = name;
      this._age = age;
    }
  
    // Getter for name
    get name() {
      return this._name;
    }
  
    // Setter for name
    set name(newName) {
      this._name = newName;
    }
  
    // Getter for age
    get age() {
      return this._age;
    }
  
    // Setter for age
    set age(newAge) {
      if (newAge > 0) {
        this._age = newAge;
      } else {
        console.log("Age must be positive!");
      }
    }
  }
  
  const student1 = new Student("Sumit", 21);
  
  console.log(student1.name); // Output: Sumit
  student1.name = "Kumar";    // Using setter
  console.log(student1.name); // Output: Kumar
  
  console.log(student1.age);  // Output: 21
  student1.age = -5;          // Output: Age must be positive!
  console.log(student1.age);  // Output: 21
  




//   🔍 Getter (get)

// Allows us to read private-like properties.

// No need to call it with ().

// console.log(student1.name); looks like accessing a property but actually calls the getter method!

// 📝 Setter (set)

// Allows us to update private-like properties.

// Can include validation logic (like we did for age).

// 🛡️ Why use _name instead of name?

// It's just a naming convention to show it’s an "internal" property.

// Avoids confusion between the method name and property name.


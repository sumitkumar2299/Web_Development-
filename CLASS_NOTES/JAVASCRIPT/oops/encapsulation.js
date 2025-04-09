class BankAccount {
    #balance = 0; // private property
  
    constructor(owner, balance) {
      this.owner = owner;
      this.#balance = balance;
    }
  
    deposit(amount) {
      this.#balance += amount;
      console.log(`Deposited ${amount}. New balance is ${this.#balance}`);
    }
  
    withdraw(amount) {
      if (amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrew ${amount}. New balance is ${this.#balance}`);
      } else {
        console.log("Insufficient balance!");
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  const account = new BankAccount("Sumit", 1000);
  account.deposit(500);   // Deposited 500. New balance is 1500
  account.withdraw(300);  // Withdrew 300. New balance is 1200
  console.log(account.getBalance()); // Output: 1200
  // console.log(account.#balance); // ❌ Error: Private field '#balance' must be declared in an enclosing class
  
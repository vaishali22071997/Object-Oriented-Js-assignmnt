class BankAccount {
  constructor(initialBalance = 0) {
    this.balance = initialBalance;
  }

  // Method to deposit funds
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      return `Deposited $${amount}. New balance: $${this.balance}`;
    } else {
      return 'Deposit amount must be positive.';
    }
  }

  // Method to withdraw funds
  withdraw(amount) {
    if (amount > 0) {
      if (amount <= this.balance) {
        this.balance -= amount;
        return `Withdrawn $${amount}. New balance: $${this.balance}`;
      } else {
        return 'Insufficient funds for withdrawal.';
      }
    } else {
      return 'Withdrawal amount must be positive.';
    }
  }

  // Method to check the account balance
  checkBalance() {
    return `Account balance: $${this.balance}`;
  }
}

// Example usage:
const myAccount = new BankAccount(1000); // Create an account with an initial balance of $1000
console.log(myAccount.checkBalance()); // Output: Account balance: $1000

console.log(myAccount.deposit(500)); // Output: Deposited $500. New balance: $1500
console.log(myAccount.withdraw(200)); // Output: Withdrawn $200. New balance: $1300
console.log(myAccount.checkBalance()); // Output: Account balance: $1300

console.log(myAccount.deposit(-100)); // Output: Deposit amount must be positive.
console.log(myAccount.withdraw(2000)); // Output: Insufficient funds for withdrawal.
console.log(myAccount.withdraw(-50)); // Output: Withdrawal amount must be positive.

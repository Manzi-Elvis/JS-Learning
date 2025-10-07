// make a bank account system, which will have the following features:
// 1. Create an account with an initial balance
// 2. Deposit money into the account
// 3. Withdraw money from the account
// 4. Check the account balance
//deposit method
//withdraw method
//check balance method
class BankAccount {
  constructor(initialBalance = 0) {
    this.balance = initialBalance;
  }   
      deposit(amount) {
            this.balance += amount;
            console.log("After depositing:", this.balance);
      }
      withdraw(amount) {
            if (amount > this.balance) {
                  console.log("Insufficient funds");
            } else {
                  this.balance -= amount;
                  console.log("After withdrawing:", this.balance);
            }
      }                 
      checkBalance() {
            console.log("Current balance:", this.balance);
      }
}
const myAccount = new BankAccount(100);
myAccount.deposit(50);
myAccount.withdraw(30);
myAccount.checkBalance();
myAccount.withdraw(150);
myAccount.checkBalance();
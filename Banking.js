class BankAccount {
      constructor(InitialBalance = 0) {
            this.InitialBalance = InitialBalance;
      }
      deposit(amount){
            this.InitialBalance += amount;
            console.log("After depositing " + amount + ", the new balance is: " + this.InitialBalance);
      }
      withdraw(amount){
}
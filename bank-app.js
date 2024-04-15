class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance = this.balance + amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Insufficient funds');
        } else {
            this.balance = this.balance - amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        }
    }

    getBalance() {
        return this.balance;
    }

    accountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}

const account1 = new BankAccount(1001, 'John Doe', 1000);
const account2 = new BankAccount(1002, 'Jane Smith', 2000);

console.log('Account 1:');
account1.accountInfo();
account1.deposit(500);
account1.withdraw(200);
account1.withdraw(1500);
console.log('Updated Account 1 Balance:', account1.getBalance());

console.log('Account 2:');
account2.accountInfo();
account2.deposit(1000);
account2.withdraw(250);
console.log('Updated Account 2 Balance:', account2.getBalance());

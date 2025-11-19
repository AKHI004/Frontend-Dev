class BankAccount {
    #balance;   // private field

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be greater than 0");
        }
        this.#balance += amount;
        return `Deposited: ₹${amount}`;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be greater than 0");
        }
        if (amount > this.#balance) {
            throw new Error("Insufficient balance");
        }
        this.#balance -= amount;
        return `Withdrawn: ₹${amount}`;
    }

    getBalance() {
        return this.#balance;
    }
}


// ----------- Demonstration -----------

const acc = new BankAccount(5000);

console.log("Valid Deposits:");
try {
    console.log(acc.deposit(2000));
    console.log(acc.deposit(1500));
} catch (err) {
    console.log("Error:", err.message);
}

console.log("\nValid Withdrawal:");
try {
    console.log(acc.withdraw(3000));
} catch (err) {
    console.log("Error:", err.message);
}

console.log("\nInvalid Withdrawal:");
try {
    console.log(acc.withdraw(10000)); // more than balance
} catch (err) {
    console.log("Error:", err.message);
}

console.log("\nFinal Balance:", acc.getBalance());

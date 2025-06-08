class Account {
    private balance: number = 0;

    get accBalance(): number {
        return this.balance;
    }

    set accBalance(amount: number) {
        if (amount < 0) {
            throw new Error("Balance cannot be negative");
        }
        this.balance = amount;
    }
}

let acc = new Account();
acc.accBalance = 1000;
console.log(acc.accBalance);

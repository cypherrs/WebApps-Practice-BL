"use strict";
class Account {
    constructor() {
        this.balance = 0;
    }
    get accBalance() {
        return this.balance;
    }
    set accBalance(amount) {
        if (amount < 0) {
            throw new Error("Balance cannot be negative");
        }
        this.balance = amount;
    }
}
let acc = new Account();
acc.accBalance = 1000;
console.log(acc.accBalance);
//# sourceMappingURL=getterSetter.js.map
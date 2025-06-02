// Encapsulation example
class person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    add_Address(add) {
        this.add = add;
    }
    getDetails() {
        console.log(`Name is ${this.name},Id : ${this.id},Address is: ${this.add}`);
    }
}

let person1 = new person('Rupesh', 21);
person1.add_Address('Odisha');
person1.getDetails();
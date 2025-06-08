"use strict";
class Employee {
    constructor(name, salary, department, id) {
        this.name = name;
        this.salary = salary;
        this.department = department;
        this.id = id;
    }
    getDetails() {
        return `${this.name} from ${this.department}`;
    }
}
const e1 = new Employee("Rupesh", 32343, "Sde", 4232);
console.log(e1.getDetails());
//# sourceMappingURL=AccessModifiers.js.map
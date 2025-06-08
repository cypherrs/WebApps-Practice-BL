class Employee {
    public name: string;
    private salary: number;
    protected department: string;
    readonly id: number;

    constructor(name: string, salary: number, department: string, id: number) {
        this.name = name;
        this.salary = salary;
        this.department = department;
        this.id = id;
    }

    getDetails() {
        return `${this.name} from ${this.department}`;
    }
}

const e1 = new Employee("Rupesh",32343,"Sde",4232);
console.log(e1.getDetails());
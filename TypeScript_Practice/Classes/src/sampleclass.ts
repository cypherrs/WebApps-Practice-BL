class person{
    name:string;
    age:number;

    constructor(name:string, age:number) {
        this.name=name;
        this.age=age;
    }

    greet(){
        console.log(`my name is ${this.name} and sge is ${this.age}`);

    }
}
const p1 =new person("Rupesh" , 22);
p1.greet();


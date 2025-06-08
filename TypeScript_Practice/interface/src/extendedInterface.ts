interface person{
    name: string;
    age : number;
}

interface Student extends person{
    grade?:number;
}

const student1: Student = {
    name: "Rupesh",
    age: 18,
    grade: 10
};
const student2: Student = {
    name: "Rupesh2",
    age: 18,

};
console.log(student1);
console.log(student2);
function person(first_name, last_name){
    this.first_name = first_name;
    this.last_name= last_name;
}

let person1 = new person ("rupesh","roshan");
let person2 = new person ("arpit","sagar");

console.log(person1);
console.log(person2);

console.log(person1.first_name);
console.log(`${person2.last_name} ${person2.first_name}`);


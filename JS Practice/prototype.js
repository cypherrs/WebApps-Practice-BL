
const person = function(name){
    this.name = name;
}
person.prototype.hellow = function(){
    return `hellow,there ${this.name} . `;
};

const rupesh = new person("nitin");
console.log(rupesh.hellow());
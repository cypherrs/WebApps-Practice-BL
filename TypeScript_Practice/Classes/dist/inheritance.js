"use strict";
class Animal {
    move() {
        console.log("Animal is moving");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Bark!");
    }
}
const d = new Dog();
d.makeSound();
d.move();
//# sourceMappingURL=inheritance.js.map
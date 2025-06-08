abstract class Animal {
    abstract makeSound(): void;

    move(): void {
        console.log("Animal is moving");
    }
}
class Dog extends Animal {
    makeSound(): void {
        console.log("Bark!");
    }
}

const d = new Dog();
d.makeSound();
d.move();
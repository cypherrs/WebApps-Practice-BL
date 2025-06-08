class Dog {
    bark() {
        console.log("Woof!");
    }
}

class Cat {
    meow() {
        console.log("Meow!");
    }
}

function speak(pet: Dog | Cat) {
    if (pet instanceof Dog) {
        pet.bark();
    } else {
        pet.meow();
    }
}
const dog = new Dog();
const cat = new Cat();

speak(dog);
speak(cat);
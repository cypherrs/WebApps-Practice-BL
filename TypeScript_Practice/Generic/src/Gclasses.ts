class Container<T> {
    private value: T;

    constructor(val: T) {
        this.value = val;
    }

    getValue(): T {
        return this.value;
    }
}

const stringContainer = new Container<string>("Rupesh");
console.log(stringContainer.getValue());
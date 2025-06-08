interface Box<T> {
    contents: T;
}

let stringBox: Box<string> = { contents: "Hello" };
let numberBox: Box<number> = { contents: 123 };

console.log(stringBox.contents);
console.log(stringBox);
console.log(numberBox);
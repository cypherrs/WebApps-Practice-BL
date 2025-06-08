function identity<T>(arg: T): T {
    return arg;
}
let output1 = identity<string>("Hello");
let output2 = identity<number>(100);
let output = identity("TypeScript");
let output3 = identity(100);

console.log(output1);
console.log(output2);
console.log(output);
console.log(output3);
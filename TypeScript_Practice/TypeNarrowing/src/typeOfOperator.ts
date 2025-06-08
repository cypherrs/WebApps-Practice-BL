function handleInput(input: string | number) {
    if (typeof input === "number") {
        console.log(input.toFixed(2));
    } else {
        console.log(input.toUpperCase());
    }
}
function sumAll(...numbers: number[]): number {
    return numbers.reduce((acc, val) => acc + val, 0);
}

sumAll(1, 2, 3); // 6
sumAll(5, 10, 15, 20);
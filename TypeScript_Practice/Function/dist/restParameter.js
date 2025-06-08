"use strict";
function sumAll(...numbers) {
    return numbers.reduce((acc, val) => acc + val, 0);
}
sumAll(1, 2, 3);
sumAll(5, 10, 15, 20);
//# sourceMappingURL=restParameter.js.map
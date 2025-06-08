"use strict";
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id.toFixed(2));
    }
}
printId(123);
printId("djfbvvdjvj");
//# sourceMappingURL=typeGuards.js.map
"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
})(Color || (Color = {}));
console.log(Color[0]);
console.log(Color["Red"]);
//# sourceMappingURL=reverseMapping.js.map
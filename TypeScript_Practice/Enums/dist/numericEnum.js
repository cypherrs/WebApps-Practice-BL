"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));
;
console.log(Direction.UP, Direction.DOWN, Direction.RIGHT, Direction.LEFT);
//# sourceMappingURL=numericEnum.js.map
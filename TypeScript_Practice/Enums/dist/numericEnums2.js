"use strict";
var Status;
(function (Status) {
    Status[Status["Success"] = 1] = "Success";
    Status[Status["Error"] = 100] = "Error";
    Status[Status["Loading"] = 101] = "Loading";
})(Status || (Status = {}));
console.log(Status.Success, Status.Error, Status.Loading);
//# sourceMappingURL=numericEnums2.js.map
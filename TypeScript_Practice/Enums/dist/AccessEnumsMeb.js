"use strict";
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
function checkAccess(role) {
    if (role === Role.Admin) {
        console.log("Full Access");
    }
    else {
        console.log("Limited Access");
    }
}
checkAccess(Role.User);
checkAccess(Role.Guest);
checkAccess(Role.Admin);
//# sourceMappingURL=AccessEnumsMeb.js.map
enum Role{
    Admin ="ADMIN",
    User = "USER",
    Guest = "GUEST"
}

function checkAccess(role : Role) : void {
    if(role === Role.Admin){
        console.log("Full Access");
    }else{
        console.log("Limited Access");
    }
}

checkAccess(Role.User);
checkAccess(Role.Guest);
checkAccess(Role.Admin);
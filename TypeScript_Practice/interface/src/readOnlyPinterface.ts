interface user{
    readonly id:number;
    name: string;
}

const user1 : user={
    id: 101,
    name: "rupesh"
};

// user1.id = 102; // showing error a there is an readonly variable
console.log(user1);
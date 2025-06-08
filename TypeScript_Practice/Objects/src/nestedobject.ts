let employee: {
    name: string;
    position: string;
    address: {
        city: string;
        pin: number;
    };
} = {
    name: "Rupesh",
    position: "Developer",
    address: {
        city: "Bhubaneswar",
        pin: 751024
    }
};

console.log(employee);
console.log(employee.address.city)
type Address = {
    city: string;
    pin: number;
};

type Employee = {
    name: string;
    position: string;
    address: Address;
};

let e1: Employee = {
    name: "Rupesh",
    position: "sde",
    address: {
        city: "chennai",
        pin:5644
    }
};

console.log(e1.address.city);

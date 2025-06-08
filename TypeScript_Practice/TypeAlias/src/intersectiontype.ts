type ContactInfo = {
    email: string;
    phone: string;
};

type Employee = {
    id: number;
    name: string;
};

type EmployeeContact = ContactInfo & Employee;

const employee1: EmployeeContact = {
    id: 1,
    name: "Rupesh",
    email: "rupesh@c.com",
    phone: "1234567890"
};

console.log(employee1);
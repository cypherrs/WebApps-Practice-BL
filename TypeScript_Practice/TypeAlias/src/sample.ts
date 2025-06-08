type carYear =number;
type cartype = string;
type carModel = string;

type Car = {
    year : carYear;
    type : cartype;
    model : carModel;
};

const car1: Car = {
    year : 213,
    type : "suv",
    model : "vu23"
}
console.log(car1.year);
console.log(car1);
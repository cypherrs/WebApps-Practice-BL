let num = [1,2,3,4,5,6,7,8,9,10];
let calSquare = (num) =>{
    console.log(num**2);
}
num.forEach((num) => {
     console.log(num**2);
 })

num.forEach(calSquare);
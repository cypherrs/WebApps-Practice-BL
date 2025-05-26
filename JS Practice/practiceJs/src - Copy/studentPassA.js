let marks= [91,92,96,78,45,80];

let Agrade = marks.filter((marks)=> {

    return marks >=90;
})
console.log(Agrade);
console.log("the number of student pass the mark rage of 90 are:",Agrade.length)
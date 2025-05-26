let arr = [1,2,3,4,5,93886,46,356];

let newArr = arr.reduce((prev,current)=>{
    return prev> current? prev : current;
    }
)
console.log(newArr);
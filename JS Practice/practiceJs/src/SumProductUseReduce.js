let arr = [1,4,6,356,678,453,4]

let sumArr= arr.reduce((result , current)=> {
    return result + current;
})

let productArr = arr.reduce((result,current)=> {
    return result * current;
})

console.log(sumArr,productArr);
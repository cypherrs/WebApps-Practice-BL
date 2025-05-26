let arr = [1,2,3,4,5,6,7,8,9,10,34546,36,768,80,356,345];

let newArr = arr.filter(arr => {
    return arr%2 === 0;
});
console.log(newArr);
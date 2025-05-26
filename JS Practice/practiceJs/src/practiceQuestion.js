// let fullName = prompt("Enter your fullnme without spaces.");
// alert(`@${fullName}${fullName.length} ` );

/* Question 1*/
// let arrOfNum = [434,34,345,35,35,657 ];
// let sum =0;
// for (let i of arrOfNum){
//   sum += i;
// }
// let avg = sum/arrOfNum.length;
//
//  const arrowSum = (a,b) =>{
//    return a+b;
//  }
//  arrowSum(2,54784);
// // console.log (avg);

function countVowels(str){
    let count = 0;
    for (const char of str){
        if (
            char == "a"||
            char === "e"||
            char === "i"||
            char === "o"||
            char === "u"
        ){
            count++
        }
    }
    console.log(count);
}
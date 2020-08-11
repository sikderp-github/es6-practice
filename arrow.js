// function doubleIt(num) {
//     return num * 2;
// }

// const doubleIt = function myFun(num) {
//     return num * 2;
// }

const doubleIt = num => num * 2;

const result = doubleIt(30);
console.log(result);

const add = (x, y) => x + y;

const result2 = add(10, 15);
console.log(result2);

const giveMe10 = () => 5;
const result3 = giveMe10();
console.log(result3);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result4 = doMath(15, 10);
console.log(result4);
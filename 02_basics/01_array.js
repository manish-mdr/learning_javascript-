// array
const myArr = [0, 1, 2, 3, 4, 5];

const furits = ["apple", "orange", "banana", "graps"];

const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr[2]); // output : 2
// console.log(`the 2 index of the furits is ${furits[2]}.`); //output : "banana"

// Array methods
// myArr.push(6);
// myArr.pop(); // pop method is remove the last element of the array
// console.log(myArr); // output is [0, 1, 2, 3,4, 5, 6] after the pop() method the output is  [0,1,2,3,4,5,]

// myArr.unshift(1) // unshift() method is add the value in 1st array after the output is [1,0,1,2,3,4,5]

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B ", myArr);

// Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 347392323233979980n;

// --------------------------------------------------------------------
// Reference Type (Non-Primitive)

// Array, Objects, Function

const furits = ["apple", "banana", "graps"];

let myObj = {
  name: "Manish",
  age: 13,
};

const myFunction = function () {
  console.log("Hello World");
};

// ************************************

// stack(Primitive), Heap(Non-Primitive)

let name = "Manish Shrestha";

let correctName = name;
correctName = "Manish Manandhar";

console.log(name);
console.log(correctName);

let userOne = {
  email: "user@google.com",
  userId: 34,
};

let userTwo = userOne;
userTwo.email = "samle@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);

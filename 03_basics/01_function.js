// function that prints "hello" to the console・terminal
function sayMyName() {
  console.log("hello");
}

// function call
sayMyName();

/**
 * Adds two number together and returns the result.
 * @param {number} number1 - This first number
 * @param {number} number2 - The second number
 * @returns
 */
function addTwoNumbers(number1, number2) {
  // method 1
  let result = number1 + number2; // Calculate the sum of the two numbers
  return result; // Return the calculate result

  //   //   method 2
  //   return number1 + number2;
}

// addTwoNumbers function store into the result variable
const result = addTwoNumbers(2, 4);

// print the final result to the console・terminal
console.log("Result : ", result);

/**
 * Generates a login notfication message for a user
 * @param {string} username - The name of the user who just logged in
 * @returns
 */
function loginUserMessage(username) {
  // If username is not provided, return a prompt message, otherwise return the login message
  return username === undefined
    ? "Please enter a username."
    : `${username} just logged in.`;
  //   return `${username} just logged in.`;
}

// print the loginUserMessage function to the console・terminal
console.log(loginUserMessage("Manish"));

// If loginUserMessage is called without an argument, username will be
// undefined, so it return : "undefined just logged in"
console.log(loginUserMessage());

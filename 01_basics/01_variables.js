// const variable cannot be reassigned
const accountId = 14444;

// let variable can be reassign
let accountEmail = "manish@gmail.com";

// var variable can be ressign
var accountPassword = "12345";

accountCity = "Warabi";

let accountState = ""; // ''

// accountId = 1111;    // const variable connot be reassigned

accountEmail = "test@gmail.com"; // let variable can be reassign

accountPassword = "1111111";

accountCity = "Warabi Shi Center";

/**
 * Prefer not to use var
 * because of issue in block scope and functional scope
 */

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

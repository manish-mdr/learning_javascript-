// singleton

// object Literals

const mySym = Symbol("key01");

const JsUser = {
  name: "Manish",
  full_name: "Manish Manandhar",
  age: 30,
  location: "Warabi",
  email: "manish@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Friday"],
};

console.log(JsUser.email);
console.log(JsUser["email"]);

console.log(JsUser.full_name);

JsUser.email = "sample@gmail.com";
// Object.freeze(JsUser);
JsUser.email = "sample@chatgpt.com";
console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

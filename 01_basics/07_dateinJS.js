// Dates

// let myDate = new Date()

// console.log(myDate.toDateString());

// console.log(myDate.toString());

// console.log(myDate.toLocaleDateString());

// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreatedDate = new Date("01-14-2026")
// console.log(myCreatedDate.toLocaleString());


// let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
// console.log(`Current date is ${newDate}`);

// get the month
// console.log(`Current month is ${newDate.getMonth() + 1}`);

// get the date 
// console.log(`Today day is ${newDate.getDate()}`);

// `${newDate.getDay()} and the time`

newDate.toLocaleString('defaulg', {
    weekday: "long",
})

console.log(newDate.toLocaleString('defaulg', {
    weekday: "long"
}));

console.log(newDate.toLocaleString('defaulg', {
    weekday: "short"
}));


 






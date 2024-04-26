let guestArr = ["Ali", "Fahad", "kashif", "Naeem"];
let canNotAttend = "Fahad";
console.log(`${canNotAttend},cannot attend party`);
let newGuest = "Tanveer";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
guestArr.map((items) => console.log(`hello dear ${items}, would you like take dinner`));
export {};

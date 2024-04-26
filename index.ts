let guestArr : string [] = ["Ali","Fahad","kashif","Naeem"]
let canNotAttend : string = "Fahad";
console.log(`${canNotAttend},cannot attend party`);
let newGuest: string = "Tanveer";
guestArr[guestArr.indexOf(canNotAttend)]= newGuest;
console.log(guestArr);
guestArr.map((items) => console.log(`hello dear ${items}, would you like take dinner`));


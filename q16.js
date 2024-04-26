// • Print a second set of invitation messages, one for each person who is still
// in your list.
// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
let guest = ["Ahmed", "zafar", "farhan"];
// guest.map((item) => console.log(`hello dear ${item}, i just found a bigger dinner table`));
guest.unshift('Hassan');
let middleGuest = "Shoaib";
let middleindex = guest.length / 2;
guest.splice(middleindex, 0, middleGuest);
guest.pop();
guest.map((item) => console.log(`Hello dear ${item},i invite you to the dinner`));
export {};
//console.log(guest)

// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
let favorite_fruits = ["Banana", "Apple", "orange", "grapes", "watermelon"];
if (favorite_fruits.includes("Banana")) {
    console.log("you really like banana");
}
else {
    console.log("you really like orange");
}
if (favorite_fruits.includes("Apple")) {
    console.log("you really like Apple");
}
else {
    console.log("you dont like apple");
}
if (favorite_fruits.includes("orange")) {
    console.log("you really like orange");
}
else {
    console.log("you dont like orange");
}
if (favorite_fruits.includes("grapes")) {
    console.log("you really like grapes");
}
else {
    console.log("you dont like grapes");
}
if (favorite_fruits.includes("watermelon")) {
    console.log("you really like watermelon");
}
else {
    console.log("you dont like water melon");
}
export {};

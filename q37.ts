// 37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt(size: string = "Large", message: string = "I love TypeScript"): void {
  console.log(`The t-shirt size is ${size} and the message is: ${message}`);
}

// Print a message about a large t-shirt with the default message
makeShirt();

// Print a message about a medium t-shirt with the default message
makeShirt("Medium");

// Print a message about a t-shirt of any size with a different message
makeShirt("Small", "I love Python");

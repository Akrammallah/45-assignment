// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// /• Remove all of the usernames from your array, and make sure the correct message is printed.

let usernames: string[] = ["Ali", "Farhan", "Faheem", "Mohsin"];

if (usernames.length === 0) {
  console.log("we need to find some users!")
}else{
  for (let i=0; i<=usernames.length; i++) {
  // for (let username of usernames) {
    // console.log(usernames);
  }
}

console.log(usernames.splice(0, usernames.length));
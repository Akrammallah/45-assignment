// let num:number [] = [7,9,4,3,0,5]
// num.sort()
// console.log(num)
// num.reverse();
// console.log(num)
// let member: string [] = ["Admin","Faheeem","qadeer","Ali jan"]
// for(let i=0;i < member.length;i++){
//   if(member[i] === "Admin"){
// console.log("hello Admin you are welcome")
//   }else {
//     console.log(`hello ${member[i]},please log in now`)
// }
// }
// function make_great(magicians: string[]): void {
// for (let i = 0; i < magicians.length; i++) {
// magicians[i] = magicians[i] + " the Great";
// };
// };
// const magician1: string [] = ["John","Farhan","Junaid"];
//  console.log(make_great(magician1)); 
import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        name: "age",
        type: "string",
        message: "Enter your age:",
    }]);
console.log("insha Allah After " + (60 - answer.age) + " you will 60 years old");

// let answer: string[] = ["farhan","mubashir","arslan"]
// answer.push("Faizan")
// console.log(answer);
// answer.map((item) => console.log(`hello ${item},i invite you to the dinner`))


// function halfFryEgg (egg: number = 1, salt: number = 2.5, butter: number = 7) {
// return egg + salt + butter
// } 
//  const response = halfFryEgg();
//  console.log(response)



//  let halfFryEgg = () => {
//  let cooked = 1 + 1.5 + 7.5;
//  return cooked
//  }

//  const respons: number = halfFryEgg();
//  console.log(respons)


// let halfFryEgg = (egg: number = 1, butter: number = 7.3,salt:number = 8) => {
//   let cooked = egg + butter + salt;
//   return cooked
// }

// const response = halfFryEgg()
// console.log(response)


// let halfFryEgg = function() {
//   let cooked = 5+6+7;
//    console.log(cooked);
// }
// halfFryEgg()

// let question = (a: number,b: number) => {
// return a*b
// }

// const response: number = question(6,8)
// console.log(response)

// const arr: number[] = [1,2,3,4,5,6,]
// for(const array of arr)
// if(array === 1){
//   console.log(`${array}st`)//first method
// }else if(array === 2){
//   console.log(`${array}nd`)
// }else if(array === 3){// second method
//   console.log('3rd')
// }else if(array === 4){
//   console.log('4th')
// }else if(array === 5){
//   console.log('5th')
// }else if(array === 6){
//   console.log('6th')
// }
  
// let arr:string = "mushtaq ahmed"
//  function titlCase(msg:string){
// return msg.split(' ').map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join(' ');;
//  }

//  console.log(titlCase(arr));


// let msg: string = "republic of pakistan";

// function titlCase(arr:string){
//   return arr.split(' ').map(math => math.charAt(0).toUpperCase() + math.substr(1).toLowerCase()).join(' ');;
// }

//   console.log(titlCase(msg));

// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value
// that’s returned.

// function city_country(city:string, country:string){
// return `${city},${country};`
// }

// console.log(city_country("Lahore","Pakistan"))
// console.log(city_country("Paris","Russia"))
// console.log(city_country("Tokyo","Japan"))

// let guest_Arr:string[] = ["Danyal","Ali jan","Aslam","Faheem"]
// while(guest_Arr.length > 2){
//   let remove_Guest = guest_Arr.pop()
//  console.log(`hello dear ${remove_Guest},sorry you are not invited gor dinnner`)
// }
// guest_Arr.map((item) => console.log(`hello dear ${item}, you are still invite to the dinner`))

// guest_Arr.pop();
// console.log(guest_Arr)

let places = ["England", "Turkey", "China", "Bangladesh", "America"];
console.log(places);
// • Print your array in alphabetical order without modifying the actual list.
let ascendingdArray = [...places].sort();
console.log(ascendingdArray);








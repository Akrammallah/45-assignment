 let name:string = "Ali jan";
console.log('name:',name)
let id : number = 1234567;
console.log('id:',id)
let password: number = 4563566;
console.log('password:',password)
console.log("MarkSheet")
let English: number = 78;
let Math: number = 65;
let Social: number = 46;
let science: number = 33;
let g_k: number = 89;
let totalMarks: number = 500;
let obtain = English+Math+Social+science+g_k
let percentage = obtain/totalMarks*100;
console.log('Total Marks:',obtain);
console.log('Percentage:',percentage);
if(percentage >= 80 && percentage < 100){
  console.log('Grade:',"A+");
}else if(percentage >= 70 && percentage < 80){
  console.log('Grade:', "A");
}else if(percentage >= 60 && percentage < 70){
  console.log('Grade:', "B");
}else if(percentage >= 50 && percentage < 60){
  console.log('Grade:', "C");
}else if(percentage >= 40 && percentage < 50){
  console.log('Grade:', "A")
}else{
  console.log("fail");
}

// type car = {
//   model: string;
//   manfacture : string;
//   [key:string] : string;
// }

// function cars(
//   model:string,manfacture:string,optional:Record<string,any>){
// return { 
//   model,
//   manfacture,
//   ...optional,
// }
// }

// const myCar = cars("corolla","toyota",{color: "silver",year: "2024"})
// console.log(myCar)

// type car ={
//   manfacture : string;
//   model : string;
//   [key:string] : string;
// }

// function cars(manfacture:string,model:string,optional:Record<string,any>){
// return{
//   manfacture,
//   model,
//   ...optional

// }
// }

// const carModel = cars("toyota","corolla",{color:"white",year:"2024"})
// console.log(carModel)


// let msg:string = "this is your book";
// function titlCase(arr:string){
// return arr.split(' ').map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join(' ');;
// }

// console.log(titlCase(msg))

// let msg: string = "hello dear my friends"
// console.log(msg.toLocaleUpperCase());
// console.log(msg.toLocaleLowerCase());

// function titlCase(arr:string){
// return arr.split(' ').map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join(' ');;
// }

// console.log(titlCase(msg))

// type id = number | string

// function num(ID:id){
//   if(typeof ID === 'string'){
//     console.log(ID.toUpperCase());
//   }else{
//     console.log(ID);
//   }
// }
// num('muslim')

// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

 let msg:string = "this is your book";
function titlCase(arr:string){
 return arr.split(' ').map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join(' ');;
 }

 console.log(titlCase(msg))
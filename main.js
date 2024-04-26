import inquirer from "inquirer";
let balance = 10000;
let pin = 1234;
let answer = await inquirer.prompt([{
        message: "Enter your pin",
        type: "number",
        name: "pin"
    }]);
if (answer.pin === pin) {
    console.log("your pin is correct");
    let answer = await inquirer.prompt([{
            message: "Enter your method",
            type: "list",
            name: "select",
            choices: ["withdraw", "checkBalance", "FastCash"]
        }]);
    if (answer.select === "withdraw") {
        let answer = await inquirer.prompt([{
                message: " enter your money",
                type: "number",
                name: "amount"
            }]);
        balance -= answer.amount;
        if (answer.amount === 500) {
            console.log("your remaining balance is " + balance);
        }
        else if (answer.amount === 1000) {
            console.log("your remaining balance is " + balance);
        }
        else if (answer.amount === 1500) {
            console.log("your remaining balance is " + balance);
        }
        else if (answer.amount === 2000) {
            console.log("your remaining balance is " + balance);
        }
    }
    if (answer.select === "checkBalance") {
        console.log("your remaining balance is " + balance);
    }
}
else {
    console.log("invalid pin");
}

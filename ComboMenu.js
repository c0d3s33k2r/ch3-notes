const readLine = require('readline-sync');

let order = [];

order.push( readLine.question("What sandwhich would you like to order? \nWe have a Chicken for $5.25, a beef for $6.25, and a tofu for $5.75! "));

console.log(`You ordered: ${order[0]}`);


let drink = [];

drink.push(readLine.question("Would you like a drink with this meal? \nWe have small $1.00, medium $2.00, large $3.00!"));

console.log(`You ordered ${drink[0]}`);


// if(answer=="no"){
//     let fry = [];
//
//     fry.push(readLine.question("Would you like to order fries along with your order?"));
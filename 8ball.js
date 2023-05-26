const readLine = require('readline-sync');
let answers=['yes', 'no', 'maybe', 'never', 'always'];

console.log("Welcome to my magic 8 ball where i will answer all your questions!");

readLine.question("Ask a question: ");

let randomNum = Math.floor(Math.random()*answers.length);
let answer = answers[randomNum];
console.log(answer);

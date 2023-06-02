const readLine = require ('readline-sync');
let answerList = ['The wizards scream yes!', 'Never in a million years!', 'maybe'];

let prompt = readLine.question("This code is the mystical code from wizards of the past");
let prompt2 = readLine.question("What are you confused about?: ");

let randomNum = Math.floor(Math.random()*answerList.length);
let randomAnswer = answerList[randomNum];
console.log(randomAnswer);

const readLine = require ('readline-sync');

let question = [''];
let values = [1, 2, 3, 4,];

let question1 = readLine.question("Enter a verb: ");
let question2 = readLine.question("Enter a noun: ");
let question3 = readLine.question("Enter a verb: ");
let question4 = readLine.question("Enter a noun(person): ");
let question5 = readLine.question("Enter a number 2-30: ");
let question6 = readLine.question("Enter a noun(animal, plural): ");
let question7 = readLine.question("Enter a verb: ");
let question8 = readLine.question("Enter a noun(animal, plural): ");
let question9 = readLine.question("Enter a noun: ");
let question10 = readLine.question("Enter a verb: ");
let question11 = readLine.question("Enter a number 2-30: ");
let question12 = readLine.question("Enter a noun(animal, plural): ");
let question13 = readLine.question("Enter a adjective: ");
let question14 = readLine.question("Enter a noun: ");
let question15 = readLine.question("Enter a verb: ");
let question16 = readLine.question("Enter a noun: ");
let question17 = readLine.question("Enter a verb: ");
let question18 = readLine.question("Enter a noun: ");
let question19 = readLine.question("Enter a noun: ");
let question20 = readLine.question("Enter a verb: ");
let question21 = readLine.question("Enter a adjective: ");
let question22 = readLine.question("Enter a noun: ");

question.push(question1, question2, question3, question4, question5, question6, question5, question6, question7, question8, question9, question10, question11,
    question12, question13, question14, question15, question16, question17, question18, question19, question20, question21, question22);

console.log(`During the summer, Bryan likes to ${question[1]} while gripping onto a/the ${question[2]}
A few moments later, Bryan begins to ${question[3]} on a/${question[4]}.
Meanwhile in the winter, Bryan meets ${question[5]} ${question[6]} and tries to ${question[7]}.
But then ${question[8]} appeared in front of Bryan to give him a/${question[9]}.
With this item Bryan ${question[10]} and confronts ${question[11]} more ${question[12]}.
This makes Bryan ${question[13]} and he begins to run away again to his ${question[14]}.
He begins to ${question[15]} while sleeping at night.  When he wakes up, he sees a huge ${question[16]} and it starts to ${question[17]} him.
He wants to ${question[18]} the thing with his giant ${question[19]} and when he made contact, it goes through it and Bryan starts ${question[20]}.
He wakes up all ${question[21]} and thinks about making a new journey /a/ ${question[22]}.`);
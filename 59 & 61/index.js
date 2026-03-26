/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times
*/

let random = Math.random();
let a = Number(prompt("Enter first number"));
let c = prompt("Enter operation");
let b = Number(prompt("Enter second number"));

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

console.log(random);

if (random > 0.1) {
  // Perform correct calculation
  console.log(`The result is ${eval(`${a} ${c} ${b}`)}`);
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
} else {
  // Perform wrong calculation
  c = obj[c];
  console.log(`The result is ${eval(`${a} ${c} ${b}`)}`);
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}

alert("Hello, World!");

console.log("This is a message in the console.");
console.log("This is 2nd message in the console.");
console.log("This is 3rd message in the console.");

var a = prompt("Enter a number:");
var istrue = confirm("Is this true?");

if(istrue){
    console.log("You win!");
}
else{
    console.log("You lose!");
}
console.log("The number you entered is: " + a);
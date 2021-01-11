let hello = "   Hello, World!  ";
let wsRegex = /\S+.*\S/; // Change this line
let result = hello.match(wsRegex); // Change this line
console.log(result)
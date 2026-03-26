let firstNumber = 10;
let secondNumber = 20;

//Adding 2 numbers without function
console.log(`Sum of ${firstNumber} and ${secondNumber} is ${firstNumber + secondNumber}`);

//Function to add 2 numbers
function sum(a,b){
    return a + b;
}

console.log(`Sum of ${firstNumber} and ${secondNumber} with function is ${sum(firstNumber,secondNumber)}`);

//Demonstrating hoisting 
sayHello();

//Function without parameter
function sayHello(){
    console.log("Hello user");
}

//If a function is not called but defined, it is of no use. It will be a deadcode in the codebase.
sayHello();

//Normal functions are hoisted and initialized in Javascript which means we can call our functions before it's defination




console.log(sayHi());

//Arrow functions in Javascript
const sayHi = () => {
    return "Hi";
}

console.log(sayHi());

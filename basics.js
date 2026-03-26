// Javascript is dynamically typed language which means datatype of a variable can be changed 
var a = 10
console.log(`This is integer value ${a} is of ${typeof a}`);
var a = "Kishor"
console.log(`This is a string value ${a} is of ${typeof a}`)
var a = true
console.log(`This is the boolean value ${a} is of ${typeof a}`)

//Javascript is a case sensitive language 
var b = 5
var B = 15
console.log(`These are values of ${b} and ${B}`)
// This treats both b and B differently because both of these are of different case


function scope() {
    //Since var is global scope it is allowed to use in this function 
    console.log(a);

    //Since let is of block scope if I use this outside the block it throws refference error 
    let c = 30;

    //This will throw error "can not redeclare a block scoped variable"
    //let c = 40;

    //let variable can be reinitialized but can not be redeclared
    c = 40;

    //Const is also block scoped variable
    const d = "Kishor";

    //Type error can not assign to a const
    //d = "Infopine"
}

scope()

//Refference error
//console.log(c);

//Refference error
//console.log(d);

//var hoisted and initialized with undefined , let is hoisted but not initialized will enter temporal deadzone

console.log(user);
var user;

//Refference error
// console.log(dev);
// let dev;

//Error const declaration must be initialized, we can not delcare a const with out initialisation
//const code;





// Datatypes in javascript 

let one = null;
console.log(`This is ${one} of type ${typeof one}`);
let two = 345;
console.log(`This is ${two} of type ${typeof two}`);
let three = "a string";
console.log(`This is ${three} of type ${typeof three}`);
//Used to represent a unique value which can not be overwritten 
let four = Symbol("This is a symbol");
console.log(`This is ${four.toString()} of type ${typeof four}`);
let five = true;
console.log(`This is ${five} of type ${typeof five}`)
//Used when a number is greater then Number.MAX_SAFE_INTEGER
let six = BigInt(100435678986763456789);
console.log(`This is ${six} of type ${typeof six}`);
let seven = undefined;
console.log(`This is ${seven} of type ${typeof seven}`);



console.log(temporary);
var temporary;

console.log(letVariable);
let letVariable;
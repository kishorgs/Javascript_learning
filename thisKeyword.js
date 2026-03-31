//this refers to the object that is executing the current function.
//But the value of this depends on how the function is called

//When this is called gobally it reffers to window object 
console.log(this);

//Event in a normal function it reffers to window object
function  show(){
    console.log(this);
}

show();

//When a method is called as a method of an object , this reffers to an object
const user = {
    name : "Kishor",
    greet : function(){
        console.log(this.name);
    }
}

user.greet(); //returns user name since this reffers the the object which is calling the function


//It is very imported how we call a function while using this keyword
const users = {
    name : "Kishor",
    greet : function(){
        console.log("This is to show correct place to use the value",this.name);
    }
}

const fn = users.greet; //This assigns the function to another variable and calls that variable 

fn(); //Here it is undefined because the function is independant function


//using this keyword with arrow functions
const obj = {
    name : "Kishor",
    greet: () => {
        console.log("This is from not working arrow function",this.name);
    }
}

obj.greet();

//Since arrow function will not hold any refference it checks in its lexicle scope for the given variable name


//Proper working of this keyword in arrow function
const obj1 = {
    name : "Kishor",
    greet() {
        const inner = () => {
            console.log("This is from working arrow function",this.name);
        }
        inner();
    }
}

obj1.greet();

//In this code the inner arrow function is checking it's parent scope for checking existance of object, greet function is getting refference of the object and passing to inner function.


//Inside constructor 
function Person(name){
    this.name = name;
}

const p1 = new Person("Kishor");
console.log("This is a constructor ",p1.name);
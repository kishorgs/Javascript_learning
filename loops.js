// for(let index = 0; index < 100; index++){
//     console.log(i);
// }


//Program to print sum of n natural numbers 
// let sum = 0;
// let number = 5;

// for(let index = 1; index <= number; index++){
//     sum += index;
// }

// console.log("Sum of "+number+" natural numbers is "+sum);



let students = {
    "Kishor" : 90,
    "Kiran" : 80,
    "Mahesh" : 60,
    "Karan" : 70 
}

//For in loop
for(let student in students){
    console.log(`marks of ${student} is ${students[student]}`);
}

//For of loop , can only be used on iterables 
for(let student of "Kishor"){
    console.log(student);
}


//Use case of for in and for of
//For arrays for of is best choice, can use plain for loop , can use for each loop for arrays for objects for in loop workd well 
//Because for in returns keys as a string not as a value , order is not guranteed 


// for each loop, should be used when we need to iterate through each element and perform an action on each element without needing to return or break the loop
let numbers = [1,2,3,4,5,6];

numbers.forEach((number)=>console.log(number*number));

//Array.from method is used to create array from any other form of data
let name = "Kishor";
const newArray = Array.from(name);
console.log(newArray);


//While loop, While loop is used when number of iterations are not fixed 
let n = 10;
let i = 0; //Initialization
while(i<n){ //Condition 
    console.log(i);
    i++; //Increment / decrement
}


//Do while loop
let number = 10;
let index = 0;
do{
    console.log(index);
    index++;
}while(index > number);


//Map function on array
numbers.map((value, index, array)=>{
    console.log(value*value, index, array);
})


//Filter method on array
let filteredArray = numbers.filter((value)=>{
    return value > 3
})

console.log(filteredArray);

//Map is used to take values of each element of the array and perform a operation and return
//Filter is used to filter out array values based on a condition 

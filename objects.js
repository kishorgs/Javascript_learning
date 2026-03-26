

//Objects in javascript 

//Basic syntax of an object

// variable_type varibale_name = {
//     key1 : value1,
//     key2 : value2
// }

//Create object in JS
const student = {
    "Name" : "Kishor",
    "Age" : 24,
    "Gender" : "Male",
}

//To print whole object
console.log(student);

//To print specific property value
console.log(student.Name);
console.log(student["Age"]);

//To add properties 
student.city = "Bangalore";
console.log(student);

//To delete a property
delete student.city;
console.log(student);

//To update the property
student.Age = 23;
console.log(student);

//To check if a property exist
//Using in operator 
console.log("Name" in student);

//Using hasOwnProperty method
console.log(student.hasOwnProperty("name"));

//TO iterate over a object
for(key in student){
    console.log(key , student[key]);
}

//Using object methods
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

//Copy a object
const student1 = {...student};
console.log(student1);

//To merge objects
const obj1 = {a:1};
const obj2 = {b:2};

const merged = {...obj1,...obj2};

console.log(merged);

//Freeze will not allow any changes to the object for ever 
Object.freeze(student);
student.Name = "Kishor G"; //Not applied
student.city = "Bengaluru"; //Not applied
console.log(student)

//Seal will allow to update but not addition or removal of properties
Object.seal(merged);
merged.a = "Kishor G"; //Applied
merged.city = "Bengaluru"; //Not applied
console.log(merged);

//Destructuring of object 
const { Name , Age } = student;
console.log(Name);

//Optional chaining , This will allow us to use nestes properties without giving a erro , without this if we use student.address.city if address doesn't exists it throughs error as "cannot read properties of undefined"
console.log(student?.address?.city);


//Nested objects
const obj = {
    user : {
        profile : {
            name : "Kishor"
        }
    }
}

console.log(obj.user.profile.name);


//Object to JSON
JSON.stringify(student);
console.log(student);

//JSON to object
const student2 = JSON.parse('{"name":"Kishor"}');
console.log(student2);

const deepCopy = structuredClone(student);
console.log(`This is deepcopy ${JSON.stringify(deepCopy)}`);

const deepCopy1 = JSON.parse(JSON.stringify(student));
console.log(deepCopy1)




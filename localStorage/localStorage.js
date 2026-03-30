//User object 
const user = {
    name : "",
    age : ""
}

//To change the document title
document.title = "This is to learn localstorage";

//To design the body component
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

//To design a form layout 
const formComponent = document.createElement('form');
formComponent.method = "POST";
formComponent.action = "www.google.com";
formComponent.style.display = "flex";
formComponent.style.flexDirection = "column";
formComponent.style.gap = "10px";
formComponent.style.width = "250px";

//To design the name input field 
const nameInput = document.createElement('input');
nameInput.name = "name";
nameInput.type = "text";
nameInput.placeholder = "Enter your name : ";
nameInput.style.padding = "5px";
nameInput.style.border = "1px solid gray";
nameInput.style.borderRadius = "5px";
nameInput.setAttribute('autocomplete','off');

//TO design a age input field
const ageInput = document.createElement('input');
ageInput.type = "number";
ageInput.name = "age";
ageInput.placeholder = 'Enter your age : ';
ageInput.style.padding = "5px";
ageInput.style.border = "1px solid gray";
ageInput.style.borderRadius = "5px"

//To design session input field
const sessionInput = document.createElement('input');
sessionInput.placeholder = "Enter your theme prefference";
sessionInput.style.padding = "5px";
sessionInput.style.border = "1px solid gray";
sessionInput.style.borderRadius = "5px"

//To design the submit button
const submitButton = document.createElement('button');
submitButton.textContent = "Submit";
submitButton.style.backgroundColor = "blue";
submitButton.style.padding = "10px";
submitButton.style.border = "0";
submitButton.style.color = "white";
submitButton.style.fontWeight = "600";
submitButton.style.borderRadius = "10px";
submitButton.style.margin = "10px";
submitButton.style.cursor = "pointer";

//Attaching form component to the document
formComponent.append(nameInput, ageInput, sessionInput, submitButton);
document.body.append(formComponent);

//Event listener for submit action
formComponent.addEventListener("submit",(event)=>{
    event.preventDefault();

    user.name = nameInput.value;
    user.age = ageInput.value;

    localStorage.setItem('user',JSON.stringify(user));
    sessionStorage.setItem('theme', sessionInput.value); //Storing data in session storage
});


//Read data from local storage
const readDataButton = document.createElement('button');
readDataButton.textContent = "Read data";

readDataButton.addEventListener('click',()=>{
    const p = document.createElement('p');
    const user = JSON.parse(localStorage.getItem('user'));

    p.textContent = JSON.stringify(user);
    document.body.append(p);
});

document.body.append(readDataButton);

//Remove data from local storage
const removeDataButton = document.createElement('button');
removeDataButton.textContent = "Remove data";

removeDataButton.addEventListener('click',()=>{
    localStorage.removeItem("user");
});


//Clear data from local storage
const clearDataButton = document.createElement('button');
clearDataButton.textContent = "Clear data";

clearDataButton.addEventListener('click',()=>{
    localStorage.clear();
});

document.body.append(removeDataButton);
document.body.append(clearDataButton)


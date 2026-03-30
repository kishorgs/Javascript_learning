document.title = "This is to practice";
console.log(document.querySelector("h1").innerHTML);

//querySelector method using id attribute
let containerDev = document.querySelector('#containerDiv');
console.log("Query selector using Id", containerDev);

//querySelector method using class attribute
let title = document.querySelector('.title');
console.log(`Query selector using class: ${title.textContent.trim()}`);

//querySelector using tag name
let paragraph = document.querySelector('p').innerHTML;
console.log(`Query selector using tag name: ${paragraph}`);

//querySelector using for nested component 
let nested_component = document.querySelector('ul .item');
console.log("Query selector using nested elements:", nested_component);

//querySelectorAll usage
let list_items = document.querySelectorAll('.item');
list_items.forEach((item)=>{
    console.log("Query Selector All method usecase ",item.textContent);
});


//This is to demonstrate addEventListener 
let button = document.querySelector('button#btn'); //We can use tag and it's associated id together
button.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log("Click event triggered");
    console.log("This element triggered the event : ",event.target); //To check which element actually triggered the event
})


//This block is to demo classList methods
let classListDemoDiv = document.querySelector('#demoDiv');
let addClassButton = document.querySelector('#add');
let removeClassButton = document.querySelector('#remove');
let toggleClassButton = document.querySelector('#toggle');

//Event Listener to add a class to div
addClassButton.addEventListener("click",()=>{
    classListDemoDiv.classList.add('active');
});

//Event Listener to remove a class from div
removeClassButton.addEventListener("click",()=>{
    classListDemoDiv.classList.remove('active');
});

//Event Listener to toggle a class in div 
toggleClassButton.addEventListener("click",()=>{
    classListDemoDiv.classList.toggle('active');
});



//Using textContent in real time
let counterSpan = document.querySelector('#counter');
let counter = parseInt(counterSpan.textContent); //read inner text using textContent
let counterButton = document.querySelector('#increment');
let dynamicCounter = document.querySelector('#dynamicCounter');

counterButton.addEventListener("click",()=>{
    counter += 1;
    counterSpan.textContent = counter; //Update counter using textContent
    dynamicCounter.innerHTML = `<p>${counter}</p>`;     //Using innerHTML property to update data we can use the same for reading the data 
});


//Major difference between innerHTML and textContent is textContent works on text inside html , innerHTML works on adding and removing HTML nodes



//createElement() method

//This method is used to create a HTML node under the current document

const h1 = document.createElement('h1');
h1.textContent = "This is created using JS";
document.body.append(h1);    //Under document root there will be head and under head body so we can only insert element under body or may be under any new component we can not append to document directly.


//append / appendChild 
//Both of these methods are used for the same purpose to add new html node to document , when we do createElement it only creates a element in the memory it won't add the element to the document for that we should use one of the above method 
//appendChild was older version and append is newer version of appenChild
//appendChild allows us to append only one element at a time , we can only append a HTML DOM element , it returns the element which is appended 
//append is newer alternative for appenChild which appends multiple elements at once , it takes both HTML element and text content , it returns undefined

const newElement = document.createElement('p');
const newElement2 = document.createElement('p');
const textElement = "This is a text";

newElement.textContent = "This is new element";
newElement2.textContent = "This is new element 2"

document.body.appendChild(newElement); //If we add more than 1 element and text element we get error 
document.body.append(newElement, newElement2, textElement); //append takes multiple elements to add , it takes text data also , we can not append same element twice because of this the first element won't show up for the second time.


//remove(), This method is used to remove a document added to DOM 
h1.remove(); // This only removed the node from the frontend rendering we can restore it later, to remove the element completely from the memory we should remove the element creation code from the code


//preventDefault() this is used to prevent the default action of the browser , consider the below example when a submit event triggers on a form by defualt browser redirects , but using prevent default we can stop browser from refresh and make api call and from there we can redirect after saving the data.

const formComponent = document.createElement('form');
formComponent.method = "POST";
formComponent.action = "https://www.google.com";

const nameInput = document.createElement('input');
nameInput.name = 'name';
nameInput.type = "text";
nameInput.placeholder = "Enter your name";

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = "Submit";

formComponent.append(nameInput, submitButton);
document.body.append(formComponent);

formComponent.addEventListener("submit",(event)=>{
    event.preventDefault();
    alert("Form has been submitted");
});


//Event deligation 

const list = document.createElement('ul');

const buttonsList = [
    {
        "name" : "add",
        "action" : "add"
    },
    {
        "name" : "remove",
        "action" : "remove"
    },
    {
        "name" : "edit",
        "action" : "edit"
    },
    {
        "name" : "delete",
        "action" : "delete"
    },
]

buttonsList.map((button)=>{
    const listitem = document.createElement('li');
    const buttonNode = document.createElement('button');
    buttonNode.setAttribute('style', "cursor:pointer");
    buttonNode.style.backgroundColor = "red";
    buttonNode.style.border = "0";
    buttonNode.style.padding = "5px";
    buttonNode.style.borderRadius = "5px";
    buttonNode.style.color = "white";
    listitem.style.padding = "5px 10px";

    buttonNode.textContent = button.name;

    listitem.append(buttonNode);
    list.append(listitem);
});

document.body.append(list);
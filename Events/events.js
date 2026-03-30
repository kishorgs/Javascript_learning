let clickCount = 0;
let doubleClickCount = 0;
let mouseOverCount = 0;
let mouseOutCount = 0;
let mouseDownCount = 0;
let mouseUpCount = 0;

const buttonClick = () => {
    console.log(`Click event count is ${++clickCount}`);
}

const buttonDoubleClick = () => {
    console.log(`Double clicked ${++doubleClickCount} many times`);
}

const domTexts = () => {
    document.getElementById("mouseOverText").innerHTML = `1. MouseOverEvent : User hovered this div for ${mouseOverCount} many times <br>`;
    document.getElementById("mouseOutText").innerHTML = `2. MouseOutEvent : mouse out triggered for ${mouseOutCount} times `;
    document.getElementById("mouseDownText").innerHTML = `3. MouseDownEvent : mouse down triggered for ${mouseDownCount} times`;
    document.getElementById("mouseUpText").innerHTML = `4. MouseUpEvent : mouse up triggered for ${mouseUpCount} times`;
}

domTexts();

const mouseOver = () => {
    mouseOverCount++;
    domTexts();
}

const mouseOut = () => {
    mouseOutCount++;
    domTexts();
}

const mouseDown = () => {
    mouseDownCount++;
    domTexts();
}

const mouseUp = () => {
    mouseUpCount++;
    domTexts();
}




//Keyboard events --------------------------------------------------------------------------------------------------------------------

let keyDownLine = document.createElement('p');
document.getElementById("keyBoardEventDiv").appendChild(keyDownLine);

let keyUpLine = document.createElement('p');
document.getElementById('keyBoardEventDiv').appendChild(keyUpLine);

document.addEventListener("keydown",(event)=>{
    keyDownLine.textContent = `${event.key} is entered , ${event.code} is the code , ${event.keyCode} is the key code`;
});

document.addEventListener("keyup",(event)=>{
    keyUpLine.textContent = `${event.key} is released, ${event.code} is the code, ${event.keyCode} is the key code`;
})


// FORM events --------------------------------------------------------------------------------------------------------------------


let formSucessElement = document.createElement('p');
formSucessElement.textContent = "Form submitted successfully";
formSucessElement.style.color = "green";

//Submit triggers when form is submitted
document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    document.getElementById('form').appendChild(formSucessElement);
})

//Input triggers when you enter each key in the input field 
let p = document.createElement('p');

document.getElementById('nameInput').addEventListener('input',(e)=>{
    p.textContent = `${e.target.value}`;
    document.getElementById('form').appendChild(p);
})

//Change triggers when you enter whole data and moves out of focus
let p1 = document.createElement('p');

document.getElementById('nameChange').addEventListener('change',(e)=>{
    p1.textContent = `${e.target.value}`;
    document.getElementById('form').appendChild(p1);
})


//Focus triggers when a input field gains cursor focus 
let focusPTag = document.createElement('p');

document.getElementById('nameChange').addEventListener('focus',(e)=>{
    focusPTag.textContent = "Name input got the focus";
    document.getElementById('form').appendChild(focusPTag);
});



//Blur triggers when a input field looses focus
document.getElementById('nameChange').addEventListener('blur',(e)=>{
    focusPTag.textContent = "Name input lost the focus";
})



//Window events ---------------------------------------------------------------------------------------------------------

//Load event triggers when the browser window is loaded entirly
window.addEventListener('load',()=>{
    let p = document.createElement('p');
    p.textContent = "Page fully loaded";
    document.body.appendChild(p);
});


//Resize event will be called on load
let screenWidthComponent = document.createElement('p');
document.body.appendChild(screenWidthComponent);

window.addEventListener('resize',()=>{
    screenWidthComponent.textContent = window.innerWidth;
});


//Scroll even this will be triggered when user scrolls the browser window 
let scrollAlertComponent = document.createElement('p');
document.body.append(scrollAlertComponent);

window.addEventListener('scroll',()=>{
    scrollAlertComponent.textContent = `Browser is scrolled for ${window.scrollY} pixels`;
});


//Clipboard events----------------------------------------------------------------------------------------------

let clipboardEventComponent = document.createElement('p');
document.body.append(clipboardEventComponent);

window.addEventListener('copy',()=>{
    clipboardEventComponent.textContent = "User copied some data";
});

window.addEventListener('paste',() => {
    clipboardEventComponent.textContent = "User pasted something";
});




//Drag and drop event handlers --------------------------------------------------------------------------------
const dragComponent = document.getElementById('dragItem');
const dropComponent = document.getElementById('dragDropComponent');

dragComponent.addEventListener('drag',()=>{
    console.log("Dragged");
});

dropComponent.addEventListener('dragover', (e) => {
    e.preventDefault();
});

dropComponent.addEventListener('drop',(e)=>{
    e.preventDefault();
    console.log("Dropped");
})
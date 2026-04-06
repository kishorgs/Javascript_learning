//What I used to do earlier
// const TitleInput = document.createElement('input');
// TitleInput.placeholder = "Enter task title : ";

// const descriptionInput = document.createElement('input');
// descriptionInput.placeholder = "Enter the task description : ";

//What I did in first attempt
// function createInputElement({id, className , placeholder, type = "text"}){
//     const input = document.createElement('input');
//     input.placeholder = placeholder;
//     input.type = type;
//     input.setAttribute('id', id);
//     input.setAttribute('class', className);
//     return input;
// }

// const titleInputElement = createInputElement({id : 'title', className : 'title', placeholder : "Enter your name : ", type : 'text'});

// document.body.append(titleInputElement);



//What I learnt
function createInputElement(options = {}){
     const {
        id,
        className,
        placeholder, 
        type = "text"
     } = options;

     const input = document.createElement('input');

     if(id) input.id = id;
     if(className) input.className = className;
     if(placeholder) input.placeholder = placeholder;
     if(type) input.type = type;

     return input;
}

export function createButton(options = {}){
   const {
      id,
      className,
      buttonText,
      onClick
   } = options;

   const button = document.createElement('button');

   if(id) button.id = id;
   if(className) button.className = className;
   if(buttonText) button.textContent = buttonText;
   if(onClick) button.addEventListener('click', onClick);

   return button;
}

export const appContainer = document.getElementById('app');
appContainer.classList.add('appContainer');

export const titleInputElement = createInputElement({id: 'title', placeholder: 'Enter task title :', className: 'title', type: 'text'});
titleInputElement.classList.add('inputElement');

export const descriptionInputElement = createInputElement({id:'description', className: 'descrption', placeholder: 'Enter the description :', type: 'text'});
descriptionInputElement.classList.add('inputElement');

export const createTaskFormSubmitButton = createButton({id: 'submitButton', className: 'submitButton', buttonText: 'Create Task'});
createTaskFormSubmitButton.classList.add('button'); 

export const createTaskFormResetButton = createButton({id: 'cancelButton', className: 'cancelButton' , buttonText: 'Reset' , onClick: resetInputs});
createTaskFormResetButton.classList.add('button');

function resetInputs(){
   titleInputElement.value = "";
   descriptionInputElement.value = "";
}

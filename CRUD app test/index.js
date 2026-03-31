const addButton = document.createElement('button');
const editButton = document.createElement('button');
const deleteButton = document.createElement('button');
const viewButton = document.createElement('button');

const tasks = {
    title : "",
    description : ""
}

addButton.textContent = "Add";
editButton.textContent = "Edit";
deleteButton.textContent = 'Delete';
viewButton.textContent = 'View';

// I did not added this part because of this all the buttons used to add the data even when I click delete it was not deleting the data, why because since all the buttons were inside the form all the buttons used to fire the submit event but when I externally mentioned which button should fire the submit event it worked well
// addButton.type = "submit";
// editButton.type = "button";
// viewButton.type = "button";
// deleteButton.type = "button";

const taskFormComponent = document.createElement('form');
taskFormComponent.style.display = 'flex';
taskFormComponent.style.flexDirection = 'column';
taskFormComponent.style.width = "250px";
taskFormComponent.method = "POST";
taskFormComponent.action = "www.google.com";

const taskNameInput = document.createElement('input');
const taskDescriptionInput = document.createElement('input');

taskFormComponent.append(taskNameInput, taskDescriptionInput);

document.body.append(taskFormComponent);

taskFormComponent.append(addButton, editButton, deleteButton, viewButton);

taskFormComponent.addEventListener('submit',(event)=>{
    event.preventDefault();
    tasks.title = taskNameInput.value;
    tasks.description = taskDescriptionInput.value;

    localStorage.setItem("tasks",JSON.stringify(tasks));
});


const showDataDiv = document.createElement('div');

let data = '';

editButton.addEventListener('click',()=>{
    tasks.title =  taskNameInput.value;
    tasks.description = taskDescriptionInput.value;

    localStorage.setItem('tasks',JSON.stringify(tasks));
});

deleteButton.addEventListener('click',()=>{
    localStorage.removeItem('tasks');
});

viewButton.addEventListener('click',()=>{
    data = JSON.parse(localStorage.getItem('tasks'));
    showDataDiv.innerHTML = `<span>Title : ${data.title} </span> <br> <span> Description : ${data.description}</span>`;
})

document.body.append(showDataDiv);


let username = sessionStorage.getItem('username');

if(!username){
    username = prompt("Enter you name : ");
    sessionStorage.setItem('username',username);
}

document.querySelector('#welcome').textContent = `Welcome ${username}`;


const addTaskButton = document.createElement('button');
addTaskButton.textContent = "Add task";

addTaskButton.addEventListener('click',()=>{
    openAddTaskDialog();
});

const tasks = [];

function openAddTaskDialog() {
    const dialog = document.createElement('dialog');

    const titleInput = document.createElement('input');
    titleInput.placeholder = "Enter title";

    const descriptionInput = document.createElement('input');
    descriptionInput.placeholder = "Enter description";

    const saveButton =  document.createElement('button');
    saveButton.textContent = "Save";

    saveButton.addEventListener('click',()=>{
        if(!titleInput.value || !descriptionInput.value){
            alert("Please enter all the values");
        }

        const title = titleInput.value;
        const description = descriptionInput.value;

        const task = {
            title,
            description
        }
        console.log(task);

        // tasks.push(JSON.stringify(task));
        tasks.push(task)
        localStorage.setItem('tasks',JSON.stringify(tasks));

    });

    const cancel = document.createElement('button');

    cancel.textContent = "Cancel";
    cancel.addEventListener('click',()=>{
        dialog.remove();
    });

    dialog.append(titleInput,descriptionInput,saveButton, cancel);

    document.body.append(dialog);

    dialog.showModal();
}

function renderTasks() {
    const tasks = localStorage.getItem('tasks') || [];

    const table = document.createElement('table');

    const title = document.createElement('th');
    title.textContent = "Title";

    const description = document.createElement('th');
    description.textContent = "Description";

    const actions = document.createElement('th');
    actions.textContent = "Actions";

    
    table.append(title,description,actions);
    document.body.append(table);
    

    tasks.forEach((task, index)=>{
        const row = document.createElement('tr');

        const titleData = document.createElement('td');
        titleData.textContent = task.title;

        const descriptionData = document.createElement('td');
        descriptionData.textContent = task.description;

        const editButton = document.createElement('button');
        editButton.textContent = "Edit";

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";

        const action = document.createElement('td');
        action.append(editButton, deleteButton);

        row.append(titleData,descriptionData,action);

        table.append(row);

    });

}

renderTasks();

document.body.append(addTaskButton);


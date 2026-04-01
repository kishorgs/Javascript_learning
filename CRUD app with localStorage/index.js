//Titile of the webpage 
document.title = "CRUD app";

//To access session storage
let username = sessionStorage.getItem('username');

//Basic app layout components
const container = document.querySelector('#container');
const dataDiv = document.createElement('div');
const navbar = document.querySelector('#navbar');
const addTaskButton = document.createElement('button');

//To set session data
if(!username){
    username = prompt("Enter your name : ");
    sessionStorage.setItem("username",username);
}

//To display welsome message based on the session data
document.querySelector("#welcome").textContent = `Welcome ${username}`;

document.body.append(container);
container.append(dataDiv);

addTaskButton.textContent = "Add task";
addTaskButton.classList.add('button');
navbar.append(addTaskButton);

//Add task button event listener 
addTaskButton.addEventListener('click',()=>{
    openAddTaskDialog();
});

//Function to demonstrate closure , In this function since I am returning addTask , getTasks, updateTask and deleteTask methods I am able to access these methods and can not access tasks and saveTasks method directly , this approch prevents us from updating or deleting the data by mistake without authorisation 
function taskManagerFunction() {

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function saveTasks(){
        localStorage.setItem('tasks',JSON.stringify(tasks));
        location.reload();
    }

    return{
        //To add task to storage
        addTask(task){
            tasks.push(task);
            saveTasks();
        },
        //To get all the tasks from storage
        getTasks(){
            return tasks;
        },
        //To update required task
        updateTask(index,updatedTask){
            tasks[index] = updatedTask;
            saveTasks();
        },
        //To delete a task
        deleteTask(index){
            tasks.splice(index,1);
            saveTasks();
        }
    };
}

//Here the function "taskManagerFunction" is assigned to taskManager which is returning the CRUD operation methods which we can access using taskManager
const taskManager = taskManagerFunction();


//Function to opne dialog for add task and edit task , edit task triggers if the index is passed while calling this method
function openAddTaskDialog(editIndex = null){

    const dialog = document.createElement('dialog');
    dialog.classList.add('dialog');

    const dialogTitle = document.createElement('h3');
    dialogTitle.textContent = editIndex !== null ? "Edit task" : "Add new task";
    dialogTitle.style.textAlign = "center";

    const titleInput = document.createElement('input');
    titleInput.placeholder = "Title";

    const descriptionInput = document.createElement('input');
    descriptionInput.placeholder = "Description";

    const buttonsDiv = document.createElement('div');
    buttonsDiv.style.display = "flex";
    buttonsDiv.style.justifyContent = "space-between";
    buttonsDiv.style.width = "100%";

    const saveButton = document.createElement('button');
    saveButton.textContent = editIndex == null ? "Add" : "Update";
    saveButton.classList.add('button');

    const closeButton = document.createElement("button");
    closeButton.textContent = "Cancel";
    closeButton.classList.add('button');

    //Auto filling title and description if the dialog is opened for edit purpose
    if(editIndex !== null){
        const task = taskManager.getTasks()[editIndex];
        titleInput.value = task.title;
        descriptionInput.value = task.description;
    }

    buttonsDiv.append(closeButton, saveButton);

    const closeDialog = ()=>  dialog.remove();

    //To close dialog using close button
    closeButton.addEventListener("click", closeDialog);

    //To close dialog when clicked outside the dialog scope 
    dialog.addEventListener("click", (e) => {
        if (e.target === dialog) closeDialog();
    });

    //To close the dialog when esc button is clicked 
    dialog.addEventListener("cancel", closeDialog);

    //Save button event listener
    saveButton.addEventListener('click',() => {
        const title = titleInput.value.trim();
        const description = descriptionInput.value.trim();

        if(!title || !description){
            alert("All fields are required");
            return;
        }

        const task = {
            title,
            description
        }

        //Deciding to add or update the tasks
        if(editIndex === null){
            taskManager.addTask(task);
        }else{
            taskManager.updateTask(editIndex,task);
        }

        closeDialog();
    });

    dialog.append(dialogTitle, titleInput, descriptionInput, buttonsDiv);
    document.body.append(dialog);

    dialog.showModal();
}

//Function to render the tasks from localStorage
function renderTasks(){

    dataDiv.innerHTML = "";

    const table = document.createElement('table');
    table.classList.add('table');

    const titleheader = document.createElement('th');
    titleheader.textContent = "Title";

    const descriptionHeader = document.createElement('th');
    descriptionHeader.textContent = "Description";

    const actionHeader = document.createElement('th');
    actionHeader.textContent = "Actions";

    table.append(titleheader, descriptionHeader , actionHeader);

    const tasks = taskManager.getTasks();

    tasks.forEach((task, index) => {
        const row = document.createElement('tr');

        const title = document.createElement('td');
        title.textContent = task.title;

        const description = document.createElement('td');
        description.textContent = task.description;

        const editButton = document.createElement('button');
        editButton.textContent = "Edit";
        editButton.classList.add('button','edit-btn');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.classList.add('button','delete-btn');

        editButton.addEventListener('click',()=>{
            openAddTaskDialog(index);
        });

        deleteButton.addEventListener('click',()=>{
            openConfirmDeleteDialog(index);
        });

        const action = document.createElement('td');
        action.append(editButton, deleteButton);

        
        row.append(title,description,action);

        table.append(row);
    });
    dataDiv.append(table);
}

//dialog to confirm deletion if the user clicks the delete button in the data table
function openConfirmDeleteDialog(index = null){
    const dialog = document.createElement('dialog');
    dialog.textContent = `Are you sure want to delete? ${tasks[index].title}`;

    const confirm = document.createElement('button');
    confirm.textContent = "Confirm";

    const cancel = document.createElement('button');
    cancel.textContent = "Cancel";

    confirm.addEventListener('click',()=>{
        taskManager.deleteTask(index);
    });

    //To close the dialog when cancle button is clicked
    cancel.addEventListener('click', ()=>{
        dialog.remove()
    });

    //To close the dialog when clicked outside the dialog scope
    dialog.addEventListener('click',(event)=>{
        if(event.target == dialog) dialog.remove(); 
    });

    //Tp close the dialog when esc is clicked
    dialog.addEventListener('cancel', ()=>{
        dialog.remove()
    });

    dialog.append(confirm, cancel);

    document.body.append(dialog);

    dialog.classList.add('dialog');

    dialog.showModal();
}

//To display "No data found" if tasks is empty
const tasks = taskManager.getTasks();

if(tasks.length == 0){
    const noDataFound = document.createElement('p');
    noDataFound.textContent = "No data found";
    dataDiv.append(noDataFound);
}else{
    renderTasks();
}
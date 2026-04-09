import { taskManagementForm } from "./ui/createTaskForm/createTaskForm.js";
import { modal } from "./ui/modal/modal.js";
import { createElement } from "./utility.js";
import { viewTasks } from "./ui/viewTasks/viewTasks.js";

export async function loadTasks() {
    const res = await fetch('http://localhost:3000/tasks');
    const data = await res.json();
    return data;
}

try{
    const appContainer = document.querySelector('#app');
    const header = document.querySelector('#header');
    const createTaskModal = modal({},taskManagementForm(false, null, () => createTaskModal.close()));

    const createTaskButton = createElement('button',{
        id : 'button',
        className : 'button createTaskButton',
        text : 'Create task'
    });

    createTaskButton.addEventListener('click',()=>{
        createTaskModal.open();
    });

    // const tasksTable = viewTasks(fetch("http://localhost:3000/tasks").then((res)=>res.json()).then((data)=>data));

    loadTasks().then((data) => {
        const taskTable = viewTasks(data);
        appContainer.append(header,taskTable);
    });

    header.append(createTaskButton);
    document.body.append(appContainer);
}catch(error){
    console.log("Error managing DOM elements ", error);
}

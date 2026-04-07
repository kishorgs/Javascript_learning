import { taskManagementForm } from "./ui/createTaskForm/createTaskForm.js";
import { modal } from "./ui/modal/modal.js";
import { createElement } from "./utility.js";
import { taskManager } from "./storage.js";
import { viewTasks } from "./ui/viewTasks/viewTasks.js";

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

    const tasksTable = viewTasks(taskManager.getTasks());

    header.append(createTaskButton);
    appContainer.append(header, tasksTable);
    document.body.append(appContainer);
}catch(error){
    console.log("Error managing DOM elements ", error);
}
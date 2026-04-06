import { taskManagementForm } from "./ui/createTaskForm/createTaskForm.js";
import { modal } from "./ui/modal/modal.js";
import { createElement } from "./utility.js";

const appContainer = document.querySelector('#app');
const header = document.querySelector('#header');
const createTaskModal = modal({},taskManagementForm);

const createTaskButton = createElement('button',{
    id : 'button',
    className : 'button createTaskButton',
    text : 'Create task'
});

createTaskButton.addEventListener('click',()=>{
    createTaskModal.open();
});

header.append(createTaskButton);
appContainer.append(header);
document.body.append(appContainer)
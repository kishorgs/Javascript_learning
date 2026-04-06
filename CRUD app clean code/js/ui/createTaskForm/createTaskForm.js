import { createElement } from "../../utility.js";
import { saveTasks } from "../../storage.js";

export const taskManagementForm = createElement('form', {
    id : 'form',
    className : 'form',
    attributes : {method : 'POST', action : '#'},
    events : {
        submit : (event) => {
            event.preventDefault();

            const title = titleInputElement.value.trim();
            const description = descriptionInputElement.value.trim();

            saveTasks({ title , description });
        }
    }
});

const taskManagementFormHeader = createElement('h3', {
    id : 'taskManagerDialogHader',
    className : 'taskManagerDialogHader',
    text : 'Create task',
    styles : { textAlign : 'center'}
});

const titleInputElement = createElement('input', {
    id : 'title',
    className : 'title input',
    attributes : {
        placeholder : "Enter the task title : ",
        type : 'text',
        autoComplete : 'off'
    }
})

const descriptionInputElement = createElement('input',{
    id : 'description',
    className : 'description input',
    attributes : {
        placeholder : 'Enter the description : ',
        type : 'text',
        autoComplete : 'off'
    }
})

const createTaskButton = createElement('button', {
    id: 'createTaskButton',
    className: 'button',
    text : 'Create Task',
    attributes : {
        type : 'submit'
    }
})


taskManagementForm.append(taskManagementFormHeader, titleInputElement, descriptionInputElement, createTaskButton);
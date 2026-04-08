import { createElement } from "../../utility.js";
import { taskManager } from "../../storage.js";

export function taskManagementForm(editModal = false, taskId = null, closeModal = null) {
    const form = createElement('form', {
        id : 'form',
        className : 'form',
        attributes : {method : 'POST', action : '#'},
        events : {
            submit : (event) => {
                try{
                    event.preventDefault();

                    const title = titleInputElement.value.trim();
                    const description = descriptionInputElement.value.trim();

                    if(!editModal){
                        taskManager.saveTasks({ title , description });
                    }else{
                        taskManager.editTask(taskId,{title,description});
                    }

                    titleInputElement.value = '';
                    descriptionInputElement.value = '';

                    if(closeModal){
                        closeModal();
                    }

                    location.reload();  
                }catch(error){
                    console.log('Error submitting the task ', error);
                }
            }
        }
    });

    const taskManagementFormHeader = createElement('h3', {
        id : 'taskManagerDialogHader',
        className : 'taskManagerDialogHader',
        text : editModal ? 'Edit task': 'Create task',
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

    if(editModal && taskId){
        const tasks = taskManager.getTasks();

        const task = tasks.find(task => task.id === taskId);

        if(task){
            titleInputElement.value = task.title;
            descriptionInputElement.value = task.description;
        }
    }

    const createTaskButton = createElement('button', {
        id: 'createTaskButton',
        className: 'button',
        text : editModal ? 'Edit Task' : 'Create Task',
        attributes : {
            type : 'submit'
        }
    })

    
    form.append(taskManagementFormHeader, titleInputElement, descriptionInputElement, createTaskButton);
    return form;
}




//This comment is added to test merge conflicts
//This is to produce conflict once again
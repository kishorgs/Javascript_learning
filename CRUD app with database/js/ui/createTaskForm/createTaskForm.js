import { createElement } from "../../utility.js";
import { loadTasks } from "../../app.js";

async function saveTasks({title,description}){
    try{
        if(!title || !description){
            alert('Both title and description needs to be filled');
            return;
        }

        const response = await fetch('http://localhost:3000/tasks',{
            method : 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                title,
                description
            })
        });

        const savedTasks = await response.json();

        return savedTasks;
    }catch(error){
        console.log("Error saving a task: ", error);
        return;
    }
}

async function editTask(id,modifiedTask){
    try{
        if(!id){
            alert("Enter a valid id ");
            return;
        }

        const result = await fetch(`http://localhost:3000/tasks/${id}`,{
            method : 'PUT',
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify(modifiedTask)
        });

        const data = result.json();

        return data;

    }catch(error){
        console.error('Error editing task ',error);
    }
}

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
                        saveTasks({title,description});
                    }else{
                        editTask(taskId,{title,description});
                    }

                    titleInputElement.value = '';
                    descriptionInputElement.value = '';

                    if(closeModal){
                        closeModal();
                    }  
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
        loadTasks().then((tasks) => {
           const task = tasks.find(task => task.id === taskId);

            if(task){
                titleInputElement.value = task.title;
                descriptionInputElement.value = task.description;
            }
        });
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

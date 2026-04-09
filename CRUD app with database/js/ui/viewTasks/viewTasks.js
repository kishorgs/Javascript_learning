import { createElement } from "../../utility.js";
import { modal } from "../modal/modal.js";
import { taskManagementForm } from "../createTaskForm/createTaskForm.js";
import { confirmDeleteModal } from "../confirmDeleteModal/confirmDeleteModal.js";

async function deleteTask(id) {
    try{
        if(!id){
            alert("Task doesn't exists");
        }

        const response = await fetch(`http://localhost:3000/tasks/${id}`,{
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json"
            },
        })

        const data =  response.json();

        return data;
    }catch(error){
        console.error("Error deleting the task : ",error);
    }
}

export function viewTasks(tasks) { 

    if(tasks.length === 0){
        return createElement('p', {
            id : 'noTasksMessage',
            text : 'No tasks available.',
        });
    }

    const table = createElement('table',{id : 'tasksTable', className : 'tasksTable'});

    const tableHead = createElement('thead');

    const titleHeader = createElement('th',{text : 'Title'});

    const descriptionheader = createElement('th', {text : 'Description'});

    const actionsHeader = createElement('th', {text : 'Actions'});

    tasks.forEach((task)=>{
        
        const editTaskModal = modal({},taskManagementForm(true, task.id, () => editTaskModal.close()));
        
        const tableRow = createElement('tr');

        const titleData = createElement('td',{text : task.title ? task.title : 'No title'});

        const descriptionData = createElement('td', {text : task.description ? task.description : 'No description'});

        const actionButtons = createElement('td');

        const editButton = createElement('button', {text : 'Edit'});

        const deleteButton = createElement('button' , {text : 'Delete'});

        editButton.addEventListener('click',editTaskModal.open);

        deleteButton.addEventListener('click', () => {
            const deleteTaskModal = modal({}, confirmDeleteModal(task.id, (id) => {
                deleteTask(id);
                deleteTaskModal.close();
                location.reload();
            }, () => {
                deleteTaskModal.close();
            }));

            deleteTaskModal.open();
        });

        actionButtons.append(editButton, deleteButton);

        tableRow.append(titleData, descriptionData, actionButtons);

        table.append(tableRow);
    });

    tableHead.append(titleHeader, descriptionheader, actionsHeader);

    table.append(tableHead);

    return table;
}
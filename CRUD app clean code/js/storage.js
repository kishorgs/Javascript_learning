import { constants } from "./constants.js";
import { generateID } from "./utility.js";
import { Task } from "./task.js";

export const taskManager = (() => {
    function getTasks(){
        try{
            const stored = localStorage.getItem(constants.quicknotes_tasks);

            if(!stored) return [];

            const parsed  = JSON.parse(stored);

            return Array.isArray(parsed) ? parsed.map(t => new Task(t.id, t.title, t.description)) : [];
        }catch(error){
            console.log("Error fetching tasks : ", error);
            return [];
        }
    }

    function validateTask({title, description}) {
        if(!title || !description){
            alert("Please enter both title and description");
            return false;
        }
        return true;
    }

    function saveTasks({title, description}) {
        try{
            if(!validateTask({title, description})){
                return false;
            }

            const tasks = getTasks();

            const task = new Task(generateID(), title, description);

            tasks.push(task);

            localStorage.setItem(constants.quicknotes_tasks,JSON.stringify(tasks));        
        }catch(error){
            console.log("Error saving tasks : ", error);
        }
    }

    function editTask(id,modifiedTask){
        try{
            const tasks = getTasks()

            const updatedtasks = tasks.map(task => {
                if(task.id === id){
                    return {
                        ...task,
                        ...modifiedTask
                    }
                }
                return task;
            });

            localStorage.setItem(constants.quicknotes_tasks, JSON.stringify(updatedtasks));

            return true;
        }catch(error){
            console.log("Error editing the task", error);
            return false;
        }
    }

    const deleteTask = (id) => {
        try{
            const tasks = getTasks();
            const filteredTasks = tasks.filter(task => task.id !== id);
            localStorage.setItem(constants.quicknotes_tasks, JSON.stringify(filteredTasks));
            return true;

        }catch(error){
            console.log("Error deleting the task", error);
            return false;
        }
    }

    return{
        saveTasks,
        getTasks,
        editTask,
        deleteTask
    }

})();
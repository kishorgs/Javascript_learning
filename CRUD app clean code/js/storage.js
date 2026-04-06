import { constants } from "./constants.js";

export function getTasks(){
    const stored = localStorage.getItem(constants.quicknotes_tasks);

    if(!stored) return [];

    try{
        const parsed  = JSON.parse(stored);

        return Array.isArray(parsed) ? parsed : [];
    }catch(error){
        console.log("Error fetching tasks : ", error);
    }
}

export function validateTask({title, description}) {
    if(!title || !description){
        alert("Please enter both title and description");
    }
}

export function saveTasks({title, description}) {
    try{
        const tasks = getTasks();

        validateTask({title, description});

        const task = {
            title : title,
            description : description
        }

        tasks.push(task);

        localStorage.setItem(constants.quicknotes_tasks,JSON.stringify(tasks));        
    }catch(error){
        console.log("Error saving tasks : ", error);
    }
}
const TASKS_KEY = "quicknotes_tasks";

export function loadTasks(){
    try{
        const stored = localStorage.getItem(TASKS_KEY);

        if(!stored) return [];

        const parsed = JSON.parse(stored);

        return Array.isArray(parsed) ? parsed : [];
    }catch(error){
        console.log('error loading tasks:',error);
        return [];
    }
}

export function saveTasks({title , description}){
    try{
        const tasks = loadTasks();

        if(!title || !description){
            alert('Both Title and Description needs to be filled');
        }

        const task = {
            title,
            description
        }

        tasks.push(task);

        localStorage.setItem(TASKS_KEY,JSON.stringify(tasks));
    }catch(error){
        console.error('Error saving tasks : ', error);
    }
}

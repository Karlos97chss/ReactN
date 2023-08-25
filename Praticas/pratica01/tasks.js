const tasks = [];

function getTasks(){
    return tasks;
}


function addTask(taskName){
    const newTask ={
        id:taskId,
        name: taskName,
        completed: false,
    };
    tasks.push(newTask);
}

function removeTask(taskId){
    tasks = tasks.filter(task => task.id !== taskId)
}

function updateTask(taskId, updateTask){
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1){
        tasks[taskIndex] = {...tasks[taskIndex], ...updateTask};
    }
}

module.exports = {
    getTasks,
    addTask,
    removeTask,
    updateTask,
};

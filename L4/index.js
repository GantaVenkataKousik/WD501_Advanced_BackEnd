const toDoList = () => {
    const tasks = [];
    
    const addTask = (task) => {
        tasks.push(task);
    };
    
    const markTaskAsCompleted = (index) => {
        tasks[index].completed = true;
    };
    
    const findOverdueTasks = () => {
        const today = new Date();
        return tasks.filter(item => !item.completed && new Date(item.dueDate) < today);
    };
    
    const findTasksDueToday = () => {
        const today = new Date();
        return tasks.filter(item => !item.completed && new Date(item.dueDate).toISOString().split("T")[0] === formatDate(today));
    };
    
    const findTasksDueLater = () => {
        const today = new Date();
        return tasks.filter(item => !item.completed && new Date(item.dueDate) > today);
    };
    
    const displayTasks = (list) => {
        return list.map(item => {
            const checkbox = item.completed ? '[x]' : '[ ]';
            return `${checkbox} ${item.title} ${formatDate(new Date(item.dueDate))}`;
        });
    };

    return {
        tasks,
        addTask,
        markTaskAsCompleted,
        findOverdueTasks,
        findTasksDueToday,
        findTasksDueLater,
        displayTasks,
    };
};

module.exports = toDoList;

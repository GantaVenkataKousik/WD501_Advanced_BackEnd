const toDoList = require('../index');
const { tasks, markTaskAsCompleted, addTask } = toDoList(); // Destructuring the returned object for clearer access

describe("To-Do List Test Suite", () => {
    beforeAll(() => {
        // Adding an initial task before running tests
        addTask({
            title: "Initial task",
            completed: false,
            dueDate: new Date().toLocaleDateString("en-CA")
        });   
    });

    test("Should add a new task", () => {
        const initialTaskCount = tasks.length;
        // Adding a new task
        addTask({
            title: "New task",
            completed: false,
            dueDate: new Date().toLocaleDateString("en-CA")
        });
        // Checking if the task count increased
        expect(tasks.length).toBe(initialTaskCount + 1);
    });

    test("Should mark a task as complete", () => {
        // Checking if the initial task is incomplete
        expect(tasks[0].completed).toBe(false);
        // Marking the initial task as complete
        markTaskAsCompleted(0);
        // Checking if the task is marked as complete
        expect(tasks[0].completed).toBe(true);
    });
});

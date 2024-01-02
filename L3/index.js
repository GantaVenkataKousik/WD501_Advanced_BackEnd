// Function definitions with nested functions
function todoList () {
  const todos = [];

  function all () {
    return todos;
  }

  function add (todo) {
    todos.push (todo);
  }

  function markAsComplete (index) {
    todos[index].completed = true;
  }

  function overdue () {
    const currentDate = new Date ();
    return todos.filter (
      todo => !todo.completed && new Date (todo.dueDate) < currentDate
    );
  }

  function dueToday () {
    const currentDate = new Date ();
    const formattedToday = formattedDate (currentDate);
    return todos.filter (
      todo => !todo.completed && todo.dueDate === formattedToday
    );
  }

  function dueLater () {
    const currentDate = new Date ();
    const formattedToday = formattedDate (currentDate);
    return todos.filter (
      todo => !todo.completed && todo.dueDate > formattedToday
    );
  }

  function toDisplayableList (todoArray) {
    return todoArray.map (todo => ({
      title: todo.title,
      dueDate: formattedDate (new Date (todo.dueDate)),
      completed: todo.completed,
    }));
  }

  function formattedDate (date) {
    return date.toISOString ().split ('T')[0];
  }

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
}

// Creating todos instance for adding the todo tasks
const todos = todoList ();

// Adding tasks
const formattedDate = d => {
  return d.toISOString ().split ('T')[0];
};

const dateToday = new Date ();
const today = formattedDate (dateToday);
const yesterday = formattedDate (
  new Date (dateToday.setDate (dateToday.getDate () - 1))
);
const tomorrow = formattedDate (
  new Date (dateToday.setDate (dateToday.getDate () + 2))
);

todos.add ({title: 'Submit assignment', dueDate: yesterday, completed: false});
todos.add ({title: 'Pay rent', dueDate: today, completed: true});
todos.add ({title: 'Service Vehicle', dueDate: today, completed: false});
todos.add ({title: 'File taxes', dueDate: tomorrow, completed: false});
todos.add ({title: 'Pay electric bill', dueDate: tomorrow, completed: false});

console.log("My Todo-list\n");

// Displaying todo-list
console.log("Overdue");
const overdues = todos.overdue();
const formattedOverdues = todos
  .toDisplayableList(overdues)
  .map((todo) => `[ ] ${todo.title} ${todo.dueDate}`)
  .join("\n");
console.log(formattedOverdues);
console.log("\n");

console.log("Due Today");
const itemsDueToday = todos.dueToday();
const formattedItemsDueToday = todos
  .toDisplayableList(itemsDueToday)
  .map((todo) => `[x] ${todo.title}`)
  .join("\n");
console.log(formattedItemsDueToday);
console.log("\n");

console.log("Due Later");
const itemsDueLater = todos.dueLater();
const formattedItemsDueLater = todos
  .toDisplayableList(itemsDueLater)
  .map((todo) => `[ ] ${todo.title} ${todo.dueDate}`)
  .join("\n");
console.log(formattedItemsDueLater);
console.log("\n");

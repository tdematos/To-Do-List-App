// create an array that stores my todo's
const toDoArray = [];

class ToDo {
  constructor(taskName, description, complete) {
    this.id;
    this.taskName = taskName;
    this.description = description;
    this.complete = complete;
  }
}

// create a function for pushing todos to array
function addToDoToArray(toDo) {
  toDoArray.push(toDo);
}

// function for opening modal
function openModal() {
  const addItem = document.querySelector("#add-todo");
  const modal = document.querySelector("dialog");
  const taskTitle = document.querySelector(".task-title");
  taskTitle.innerText = "";

  addItem.addEventListener("click", () => {
    modal.showModal();
  });
}

// function for closing modal
function closeModal() {
  const closeModalbutton = document.querySelector(".cancel-button");
  const modal = document.querySelector("dialog");

  closeModalbutton.addEventListener("click", () => {
    modal.close();
  });
}

// create a function for displaying todo from array
function displayToDo() {
  const addTaskButton = document.querySelector(".add-task-button");
  const modal = document.querySelector("dialog");
  const taskTitle = document.querySelector(".task-title");
  const taskDescription = document.querySelector(".task-description");
  const toDoContainer = document.querySelector(".need-todo");

  addTaskButton.addEventListener("click", (event) => {
    event.preventDefault();

    const toDo = document.createElement("div");
    const checkBox = document.createElement("input");
    const toDoBox = document.createElement("div");
    const toDoItem = document.createElement("p");
    const toDODescription = document.createElement("p");
    const deleteToDoItem = document.createElement("span");

    toDoContainer.appendChild(toDo);
    toDo.appendChild(checkBox);
    toDo.appendChild(toDoBox);
    toDoBox.appendChild(toDoItem);
    toDoBox.appendChild(toDODescription);
    toDo.appendChild(deleteToDoItem);

    toDoItem.innerText = taskTitle.value;
    toDODescription.innerText = taskDescription.value;
    deleteToDoItem.innerText = "delete";

    toDo.classList.add("to-do");
    toDoItem.classList.add("todo-item-title");
    checkBox.classList.add("todo-checkbox");
    toDoBox.classList.add("todo-box");
    toDODescription.classList.add("todo-description");
    deleteToDoItem.classList.add("material-symbol-outlined");
    deleteToDoItem.setAttribute("id", "delete-todo");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("name", "todo-item-check");

    const newToDo = new ToDo(taskTitle.value, taskDescription.value, false);

    addToDoToArray(newToDo);
    sortCompletedToDo(checkBox);

    renderToDoList();
    modal.close();
  });
}

// function that completes todo and moves them to bottom of hr rule
function completeToDo() {
  const toDoContainer = document.querySelector(".need-todo");

  toDoContainer.addEventListener("change", (event) => {
    if (event.target.classList.contains("todo-checkbox")) {
      sortCompletedToDo(event.target);
      renderToDoList();
    }
  });
}

// function for sorting the array item to the back of the array
function sortCompletedToDo(checkBox) {
  const todoItem = checkBox.parentNode;
  const taskName = todoItem.querySelector(".todo-item-title").innerText;

  // Find the todo item in the array by its task name
  const completedToDo = toDoArray.find((todo) => todo.taskName === taskName);

  if (completedToDo) {
    // Set complete property to true
    // completedToDo.complete = true;

    // Remove it from the original position
    toDoArray.splice(toDoArray.indexOf(completedToDo), 1);

    // Push it to the end
    toDoArray.push(completedToDo);
  }
}

// function to rerender todo
function renderToDoList() {
  const toDoContainer = document.querySelector(".need-todo");

  toDoContainer.innerHTML = "";

  toDoArray.forEach((todo) => {
    const toDo = document.createElement("div");
    const checkBox = document.createElement("input");
    const toDoBox = document.createElement("div");
    const toDoItem = document.createElement("p");
    const toDODescription = document.createElement("p");
    const deleteToDoItem = document.createElement("span");

    toDo.appendChild(checkBox);
    toDo.appendChild(toDoBox);
    toDoBox.appendChild(toDoItem);
    toDoBox.appendChild(toDODescription);
    toDo.appendChild(deleteToDoItem);

    toDoItem.innerText = todo.taskName;
    toDODescription.innerText = todo.description;
    deleteToDoItem.innerText = "delete";

    toDo.classList.add("to-do");
    toDoItem.classList.add("todo-item-title");
    toDoBox.classList.add("todo-box");
    toDODescription.classList.add("todo-description");
    checkBox.classList.add("todo-checkbox");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("name", "todo-item-check");
    deleteToDoItem.classList.add("material-symbols-outlined");
    deleteToDoItem.setAttribute("id", "delete-todo");

    // Set the checkbox state based on the completion status
    checkBox.checked = todo.complete;

    toDoContainer.appendChild(toDo);
    deleteToDo();
  });
}

//a function for deleting todo's
function deleteToDo() {
  const deleteIcon = document.querySelector("#delete-todo");

  deleteIcon.addEventListener("click", (array) => {
    array.splice(i);
  });
}

// Initialization function
function initialize() {
  openModal();
  closeModal();
  displayToDo();
  completeToDo();
}

// Call initialization function when the page loads
document.addEventListener("DOMContentLoaded", initialize);

console.log(toDoArray);

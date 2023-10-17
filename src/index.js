//create an array that stores my todo's
const toDoArray = [];

class ToDo {
  constructor(taskName, description) {
    this.taskName = taskName;
    this.description = description;
  }
}

//create a function for pushing todos to array
function addToDoToArray(toDo) {
  toDoArray.push(toDo);
}

//function for opening modal
function openModal() {
  const addItem = document.querySelector("#add-todo");
  const modal = document.querySelector("dialog");

  addItem.addEventListener("click", () => {
    modal.showModal();
  });
}

openModal();

//function for closing modal
function closeModal() {
  const closeModalbutton = document.querySelector(".cancel-button");
  const modal = document.querySelector("dialog");

  closeModalbutton.addEventListener("click", () => {
    modal.close();
  });
}

closeModal();

//create a function for displaying todo from array
function displayToDo() {
  const addTaskButton = document.querySelector(".add-task-button");
  const modal = document.querySelector("dialog");
  const taskTitle = document.querySelector(".task-title");
  const toDoContainer = document.querySelector(".need-todo");

  addTaskButton.addEventListener("click", (event) => {
    event.preventDefault();

    const toDo = document.createElement("div");
    const checkBox = document.createElement("input");
    const toDoItem = document.createElement("p");

    toDoContainer.appendChild(toDo);
    toDo.appendChild(checkBox);
    toDo.appendChild(toDoItem);

    toDoItem.innerText = taskTitle.value;

    toDo.classList.add("to-do");
    toDoItem.classList.add("todo-item-title");
    checkBox.classList.add("todo-checkbox");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("name", "todo-item-check");

    const newToDo = new ToDo(taskTitle.value);

    addToDoToArray(newToDo);
    completeToDo();
    modal.close();
  });
}
displayToDo();

console.log(toDoArray);

//function that completes todo and moves them to bottom of hr rule
function completeToDo() {
  const checkBoxes = document.querySelectorAll(".todo-checkbox");

  console.log(checkBoxes);
}

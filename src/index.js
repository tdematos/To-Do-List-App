class ToDo {
  constructor(taskName, description) {
    this.taskName = taskName;
    this.description = description;
  }
}

class Project {
  constructor() {}
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
// function for creating a to do item
function addToDo() {
  const addTaskButton = document.querySelector(".add-task-button");

  addTaskButton.addEventListener("click", (event) => {
    event.preventDefault();
    const modal = document.querySelector("dialog");
    const taskTitle = document.querySelector(".task-title");
    const toDoContainer = document.querySelector(".todo-panel");
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

    modal.close();
  });
}
addToDo();

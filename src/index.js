// create an array that stores my todo's and project
const projectArray = [];

class ToDo {
  constructor(id, taskName, description, complete) {
    this.id = id;
    this.taskName = taskName;
    this.description = description;
    this.complete = complete;
  }
}

class Project {
  constructor(ProjectName) {
    this.ProjectName = ProjectName;
    this.ToDo = [];
  }

  addItemToProject(toDo) {
    this.ToDo.push(toDo);
  }
}

// create a function for adding a project to array
function addProjectToArray(Project) {
  projectArray.push(Project);
}

// a function for adding projects
function addProjectModal() {
  const addProjectButton = document.querySelector(".add-project-button");
  const projectTitleInput = document.querySelector(".project-title");
  const modal = document.querySelector(".project-modal");

  addProjectButton.addEventListener("click", (event) => {
    event.preventDefault();

    const projectItem = document.createElement("p");
    projectItem.classList.add("project-item");
    projectItem.innerText = projectTitleInput.value;

    const project = new Project(projectTitleInput.value);

    console.log(project);
    addProjectToArray(project);

    projectTitleInput.value = "";
    modal.close();

    // Render the projects
    renderProjects();
  });
}

// a function for opening projects
function openNewProjectModal() {
  const addProjectButton = document.querySelector("#add-project");
  const modal = document.querySelector(".project-modal");
  const projectTitle = document.querySelector(".project-title");
  projectTitle.innerText = "";

  addProjectButton.addEventListener("click", () => {
    modal.showModal();
  });
}

// a function for closing project modal
function closeNewProjectModal() {
  const closeModalbutton = document.querySelector(".cancel-project-button");
  const modal = document.querySelector(".project-modal");

  closeModalbutton.addEventListener("click", () => {
    modal.close();
  });
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

// function for displaying todo from array
function displayToDo(project) {
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

    const newToDo = new ToDo(
      generateUniqueId(),
      taskTitle.value,
      taskDescription.value,
      false
    );

    project.addItemToProject(newToDo);
    sortCompletedToDo(checkBox);

    taskTitle.value = "";
    taskDescription.value = "";

    renderToDoList();
    modal.close();
  });
}

// function that completes todo and moves them to the bottom of hr rule
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

  // Find the todo item in the projects by its task name
  for (const project of projectArray) {
    const completedToDo = project.ToDo.find(
      (todo) => todo.taskName === taskName
    );

    if (completedToDo) {
      // Remove it from the original position
      project.ToDo.splice(project.ToDo.indexOf(completedToDo), 1);

      // Push it to the end
      project.ToDo.push(completedToDo);
      break; // Exit the loop once the item is found and moved
    }
  }
}

// function to re-render todo
function renderToDoList() {
  const toDoContainer = document.querySelector(".need-todo");

  toDoContainer.innerHTML = "";

  // Iterate through each project's todos
  for (const project of projectArray) {
    project.ToDo.forEach((todo) => {
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
    });
  }

  deleteToDo();
}

// a function for deleting todo's
function deleteToDo() {
  const toDoContainer = document.querySelector(".need-todo");

  toDoContainer.addEventListener("click", (event) => {
    if (event.target.id === "delete-todo") {
      const todoItem = event.target.parentNode;
      const taskName = todoItem.querySelector(".todo-item-title").innerText;

      // Find the project containing the todo item
      for (const project of projectArray) {
        const todo = project.ToDo.find((todo) => todo.taskName === taskName);

        if (todo) {
          const todoIndex = project.ToDo.indexOf(todo);

          // Remove the todo item from the project's array
          project.ToDo.splice(todoIndex, 1);

          // Re-render the todo list
          renderToDoList();
          break; // Exit the loop once the todo is found and deleted
        }
      }
    }
  });
}

// function for generating a unique ID
function generateUniqueId() {
  return Date.now() + Math.random().toString(36).substring(2, 9);
}

// Initialization function
function initialize() {
  // Add the default project
  const defaultProject = new Project("Shopping List");
  projectArray.push(defaultProject);

  openNewProjectModal();
  closeNewProjectModal();
  addProjectModal();
  renderProjects();
  openModal();
  closeModal();
  displayToDo(defaultProject);
  completeToDo();
}

// Function to render projects
function renderProjects() {
  const projectListContainer = document.querySelector(".project-list");

  // Clear existing projects
  projectListContainer.innerHTML = "";

  // Display each project
  projectArray.forEach((project) => {
    const projectItem = document.createElement("p");
    projectItem.classList.add("project-item");
    projectItem.innerText = project.ProjectName;
    projectListContainer.appendChild(projectItem);
  });
}

// Call initialization function when the page loads
document.addEventListener("DOMContentLoaded", initialize);

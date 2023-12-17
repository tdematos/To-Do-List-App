// import "./style.css";
// import "./darkstyle.css";
// import { compareAsc, format } from "date-fns";

// const { ConcatenationScope } = require("webpack");

// create an array that stores my todo's and project
const projectArray = [];
let selectedProject = null;
let changeProjectNameBtn = null;

// Function to set the selected project
function setSelectedProject(project) {
  selectedProject = project;
}

//A function for toggling dark mode
function toggleDarkMode() {
  const darkModeButton = document.querySelector(".dark-mode");
  const bodyElement = document.querySelector("body");

  darkModeButton.addEventListener("click", () => {
    bodyElement.classList.toggle("dark-mode-theme");
  });
}

class ToDo {
  constructor(id, taskName, description, complete, date, priority) {
    this.id = id;
    this.taskName = taskName;
    this.description = description;
    this.complete = complete;
    this.date = date;
    this.priority = priority;
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

    addProjectToArray(project);

    projectTitleInput.value = "";
    modal.close();

    // Render the projects
    renderProjects();
    openEditProjectNameModal();
  });
}

//Code for opening project edit modal
function openEditProjectNameModal() {
  const editProjectNodeList = document.querySelectorAll(".edit-project-name");
  const editProjectNameModal = document.querySelector(
    ".edit-project-name-modal"
  );

  Array.from(editProjectNodeList).forEach((editProjectButton) => {
    editProjectButton.addEventListener("click", () => {
      editProjectNameModal.showModal();
      editProjectName(editProjectButton);
    });
  });
}

//code to close edit project name modal
function closeEditProjectNameModal() {
  const editProjectNameModal = document.querySelector(
    ".edit-project-name-modal"
  );
  const closeEditButton = document.querySelector(".cancel-edit-project-button");

  closeEditButton.addEventListener("click", () => {
    editProjectNameModal.close();
    editProjectName(editProjectButton);
  });
}

//code for editing project name
function editProjectName(editProjectButton) {
  console.log("Editing project");
  const editProjectNameModal = document.querySelector(
    ".edit-project-name-modal"
  );
  const currentProjectName = document.querySelector(".current-project-name");
  const editInput = document.querySelector(".task-title-edit");

  const editParentNode = editProjectButton.parentNode;
  const projectText = editParentNode.textContent.trim();
  const projectName = projectText.slice(0, -4);
  currentProjectName.innerText = "Current Name:" + " " + projectName;

  // Remove the previous event listener if it exists
  if (changeProjectNameBtn) {
    changeProjectNameBtn.removeEventListener("click", onProjectNameChange);
  }

  changeProjectNameBtn = document.querySelector(".edit-project-button");
  changeProjectNameBtn.addEventListener("click", onProjectNameChange);

  function onProjectNameChange() {
    const newProjectName = editInput.value;
    const editParentNodeText = editParentNode.textContent.trim();
    const originalProjectName = editParentNodeText.slice(0, -4);

    const foundProjectIndex = projectArray.findIndex(
      (project) => project.ProjectName === originalProjectName
    );

    if (foundProjectIndex !== -1) {
      projectArray[foundProjectIndex].ProjectName = newProjectName;
      editProjectNameModal.close();
      renderProjects(); // Update the list of projects in the UI
    } else {
      console.error("Project not found in the array!");
    }
  }
}

//a function that swithes between projects
function switchProject() {
  const projectItems = document.querySelectorAll(".project-item");

  console.log(projectItems);
  projectItems.forEach((item) => {
    item.addEventListener("click", () => {
      console.log(item.innerText);
    });
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
  const dueDateSelected = document.querySelector(".due-date");

  addTaskButton.addEventListener("click", (event) => {
    event.preventDefault();

    // Check if a project is selected
    if (!selectedProject) {
      alert("Please select a project to add todos.");
      return;
    }

    const toDo = document.createElement("div");
    const checkBox = document.createElement("input");
    const toDoBox = document.createElement("div");
    const toDoItem = document.createElement("p");
    const toDODescription = document.createElement("p");
    const deleteToDoItem = document.createElement("span");
    const container = document.createElement("div");
    const taskDueDate = document.createElement("p");
    const prioritySelector = document.querySelector("select");

    toDoContainer.appendChild(toDo);
    toDo.appendChild(container);
    container.appendChild(checkBox);
    container.appendChild(toDoBox);
    toDoBox.appendChild(toDoItem);
    toDoBox.appendChild(toDODescription);
    toDoBox.appendChild(taskDueDate);
    toDo.appendChild(deleteToDoItem);

    toDoItem.innerText = taskTitle.value;
    toDODescription.innerText = taskDescription.value;
    deleteToDoItem.innerText = "delete";
    taskDueDate.innerText = dueDateSelected.value;

    container.classList.add("input-container");
    toDo.classList.add("to-do");
    toDoItem.classList.add("todo-item-title");
    checkBox.classList.add("todo-checkbox");
    toDoBox.classList.add("todo-box");
    toDODescription.classList.add("todo-description");
    taskDueDate.classList.add("task-due-date");
    deleteToDoItem.classList.add("material-symbol-outlined");
    deleteToDoItem.setAttribute("id", "delete-todo");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("name", "todo-item-check");

    const newToDo = new ToDo(
      generateUniqueId(),
      taskTitle.value,
      taskDescription.value,
      false,
      dueDateSelected.value,
      prioritySelector.value
    );

    selectedProject.addItemToProject(newToDo);
    sortCompletedToDo(checkBox);

    // Clear input fields and close modal
    taskTitle.value = "";
    taskDescription.value = "";
    modal.close();

    // Render the todos for the selected project
    renderToDoList();
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

  if (selectedProject) {
    selectedProject.ToDo.forEach((todo) => {
      const toDo = document.createElement("div");
      const checkBox = document.createElement("input");
      const toDoBox = document.createElement("div");
      const toDoItem = document.createElement("p");
      const toDODescription = document.createElement("p");
      const deleteToDoItem = document.createElement("span");
      const container = document.createElement("div");
      const taskDueDate = document.createElement("p");

      toDo.appendChild(container);
      container.appendChild(checkBox);
      container.appendChild(toDoBox);
      toDoBox.appendChild(toDoItem);
      toDoBox.appendChild(toDODescription);
      toDoBox.appendChild(taskDueDate);
      toDo.appendChild(deleteToDoItem);

      toDoItem.innerText = todo.taskName;
      toDODescription.innerText = todo.description;
      deleteToDoItem.innerText = "delete";
      taskDueDate.innerText = todo.date;

      container.classList.add("input-container");
      toDo.classList.add("to-do");
      toDoItem.classList.add("todo-item-title");
      checkBox.classList.add("todo-checkbox");
      checkBox.setAttribute("type", "checkbox");
      checkBox.setAttribute("name", "todo-item-check");
      taskDueDate.classList.add("task-due-date");
      toDoBox.classList.add("todo-box");
      toDODescription.classList.add("todo-description");
      deleteToDoItem.classList.add("material-symbols-outlined");
      deleteToDoItem.setAttribute("id", "delete-todo");

      checkBox.checked = todo.complete;

      // Set the background color based on the priority value of each todo item
      switch (todo.priority) {
        case "Low":
          taskDueDate.style.backgroundColor = "yellow";
          break;
        case "Medium":
          taskDueDate.style.backgroundColor = "orange";
          break;
        case "High":
          taskDueDate.style.backgroundColor = "red";
          break;
        default:
          console.log("No priority selected!"); // Handle cases where priority is not set
      }

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
      const foundProject = projectArray.find((project) => {
        return project.ToDo.some((todo) => todo.taskName === taskName);
      });

      if (foundProject) {
        const todo = foundProject.ToDo.find(
          (todo) => todo.taskName === taskName
        );
        const todoIndex = foundProject.ToDo.indexOf(todo);

        // Remove the todo item from the project's array
        foundProject.ToDo.splice(todoIndex, 1);

        // Re-render only the todo list for the specific project
        renderToDoList();
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
  const defaultProject = new Project("My Todo List");
  projectArray.push(defaultProject);

  openNewProjectModal();
  closeNewProjectModal();
  addProjectModal();
  renderProjects();
  openModal();
  closeModal();
  displayToDo(defaultProject);
  completeToDo();
  toggleDarkMode();
  closeEditProjectNameModal();
  openEditProjectNameModal();
  console.log(projectArray);
}

// Function to render projects
function renderProjects() {
  const projectListContainer = document.querySelector(".project-list");

  // Clear existing projects
  projectListContainer.innerHTML = "";

  projectArray.forEach((project) => {
    const projectItem = document.createElement("p");
    projectItem.classList.add("project-item");
    projectItem.innerText = project.ProjectName;

    //create edit project icon
    const editProjectButton = document.createElement("span");
    editProjectButton.classList.add(
      "material-symbols-outlined",
      "edit-project-name"
    );
    editProjectButton.innerText = "edit";
    projectItem.appendChild(editProjectButton);

    projectItem.addEventListener("click", () => {
      // Set the selected project when a project is clicked
      setSelectedProject(project);
      // Render todos for the selected project
      renderToDoList();
    });

    projectListContainer.appendChild(projectItem);
  });
}

// Call initialization function when the page loads
document.addEventListener("DOMContentLoaded", initialize);

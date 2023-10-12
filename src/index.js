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

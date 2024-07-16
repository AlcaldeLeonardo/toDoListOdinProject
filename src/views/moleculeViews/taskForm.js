import { titleDOM } from "../atomViews/titleDOM";

export function modalContainer(Modal){
  const container = createDiv("modalContainer")

  container.appendChild(Modal)

  return container
}
export function addTaskModal(){
  const modal = createDiv("addTaskModal modalContainer__modalcard card")
  const closeBtn = document.createElement("span")
  closeBtn.className = "modalcard__close"
  closeBtn.innerHTML = "X"

  modal.appendChild(closeBtn);
  modal.appendChild(titleDOM("Add a Task", "h2", "modalcard__title title titleH2"))
  modal.appendChild(taskFormDOM())

  return modal
}



function taskFormDOM() {
  const taskForm = document.createElement("form");
  taskForm.className = "modalContainer__addTaskForm addTaskForm";

  // Title
  taskForm.appendChild(
    createInputFormDiv(
      "modalContainer__formDiv modalContainer__formDiv formDiv formDiv--title",
      "Title",
      "titleTask",
      "Make the Plate"
    )
  );

  // Description
  taskForm.appendChild(
    createInputFormDiv(
      "modalContainer__formDiv formDiv formDiv--description",
      "Description",
      "taskDescription",
      "... is a nice day for Make the plate"
    )
  );

  // Priority
  taskForm.appendChild(createTaskPriorityInputDiv());

  // Due Date
  taskForm.appendChild(
    createInputFormDiv("modalContainer__formDiv formDiv formDiv--dueDate", "Due Date", "dueDateTask", "", "date")
  );

  taskForm.appendChild(createSubmitBtn())

  return taskForm;
}

function createDiv(classCss) {
  const div = document.createElement("div");
  div.className = classCss;
  return div;
}

function createSubmitBtn(){
  const div = createDiv("submitDiv")
  const input = document.createElement("input")
  input.id = "submit"
  input.className = "submit__btn btn--primary"
  input.value = "Add Task"
  div.appendChild(input)


  return div
}

function createInputFormDiv(divClassCss, labelText,inputId, placeholderInput, inputType = "text") {
  const input = document.createElement("input");
  const label = document.createElement("label");
  const div = createDiv(divClassCss);

  label.htmlFor = inputId;
  label.textContent = labelText

  input.className = "modalContainer__input";
  input.type = inputType
  input.id = inputId;
  input.name = inputId;
  input.placeholder = placeholderInput;

  div.appendChild(label);
  div.appendChild(input);

  return div;
}

function createTaskPriorityInputDiv() {
  let id = "taskPriority";
  const values = ["high", "medium", "low"];
  const div = createDiv("modalContainer__formDiv formDiv formDiv--priority");
  const label = document.createElement("label");
  const select = document.createElement("select");
  label.htmlFor = id;
  label.textContent = "Priority";
  select.id = id;
  select.className = "modalContainer__input"

  values.forEach((optionValue) => {
    const option = document.createElement("option");
    option.value = optionValue;
    option.innerHTML = optionValue;

    select.appendChild(option);
  });

  div.appendChild(label);
  div.appendChild(select);
  return div;
}

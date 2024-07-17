import { addTaskController } from "../../controllers/addTaskController";
import { updateStorage } from "../../modules/updateStorage";
import { createDiv } from "./createDiv";


export function createSubmitBtn() {
  const div = createDiv("submitDiv");
  const input = document.createElement("input");
  input.id = "submit";
  input.type = "submit";
  input.className = "submit__btn btn--primary";
  input.value = "Add Task";
  div.appendChild(input);

  input.addEventListener("click", (e) => {
    addTaskController(e);
    updateStorage();
  });

  return div;
}

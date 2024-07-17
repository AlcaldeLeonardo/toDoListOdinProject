import { addCollectionController } from "../../controllers/addCollectionController";
import { createDiv } from "./createDiv";


export function createCollectionSubmitBtn() {
  const div = createDiv("submitDiv");
  const input = document.createElement("input");
  input.id = "collectionSubmit";
  input.type = "submit";
  input.className = "submit__btn btn--primary";
  input.value = "Add Collection";
  div.appendChild(input);

  input.addEventListener("click", (e) => {
    addCollectionController(e);
  });

  return div;
}

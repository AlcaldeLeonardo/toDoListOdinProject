import { CollectionArray } from "../../modules/classes/CollectionArray";
import { addTaskModal } from "../moleculeViews/modalContainer";
import { updateScreen } from "../updateScreen";

export function plusBtnDOM(){
  const btn = btnDOM("+", "main__addToDo btn", "addBtn")

  if(CollectionArray.collections.length === 0){
    btn.style.display = "none";
  }
  btn.addEventListener("click", () => {
    updateScreen(CollectionArray.ActiveCollection, addTaskModal());

    document.querySelector("#titleTask").focus();
  })

  return btn;
}

export function editBtn() {
  const btn = btnDOM("Edit", "btn btn--primary", "editBtn")
  
  return btn;
}
export function delBtn() {
  const btn = btnDOM("Delete", "btn btn--red", "delBtn")
  return btn;
}

function btnDOM(nameBtn = "function", classCss = "btn", id = ""){
  const btn = document.createElement("button")
  btn.innerHTML = nameBtn;
  if(id) btn.id = id;
  btn.className = classCss;

  return btn;
}
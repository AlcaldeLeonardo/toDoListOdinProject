import { plusBtnDOM } from "../atomViews/btnsDOM";
import { toDocard } from "./cards";

export function mainDOM(collectinObj){
  const {TasksArray} = collectinObj
  const mainElement = document.createElement("main")
  mainElement.className = "main"

  mainElement.appendChild(plusBtnDOM())
  TasksArray.forEach(task => {
    mainElement.appendChild(toDocard(task))
  });

  return mainElement;
}
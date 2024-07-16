import { plusBtnDOM } from "../atomViews/btnsDOM";
import { paragraphDOM } from "../atomViews/paragraph";
import { titleDOM } from "../atomViews/titleDOM";
import { toDocard } from "./toDocard";

export function mainDOM(collectinObj) {
  const mainElement = document.createElement("main");
  mainElement.className = "main";
  mainElement.innerHTML = "";
  
  mainElement.appendChild(plusBtnDOM());

  if (collectinObj) {
    const { TasksArray } = collectinObj;

    TasksArray.forEach((task) => {
      mainElement.appendChild(toDocard(task));
    });
  } else {
    mainElement.appendChild(
      titleDOM(
        "You don't have Tasks Collections, press the Plus button to add new Tasks!!!",
        "h1"
      )
    );
  }

  return mainElement;
}

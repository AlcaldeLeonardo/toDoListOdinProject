import { delBtn } from "../atomViews/delBtn";
import { editBtn } from "../atomViews/editBtn";

export function buttonBoxDOM(){

  const buttonBox = document.createElement(`div`);
  buttonBox.className = "toDoCard__buttonBox buttonBox"
  buttonBox.appendChild(editBtn());
  buttonBox.appendChild(delBtn());

  return buttonBox;
}
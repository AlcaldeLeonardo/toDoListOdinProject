import { delBtn, editBtn } from "../atomViews/btnsDOM";

export function buttonBoxDOM(){

  const buttonBox = document.createElement(`div`);
  buttonBox.className = "toDoCard__buttonBox buttonBox"
  buttonBox.appendChild(editBtn());
  buttonBox.appendChild(delBtn());

  return buttonBox;
}
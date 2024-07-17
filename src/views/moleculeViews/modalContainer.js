import { createDiv } from "./createDiv";

export function modalContainer(Modal = null) {
  const container = createDiv("modalContainer");

  if (Modal) {
    container.appendChild(Modal);
  } else {
    container.innerHTML = "";
    container.style.display = "none";
  }

  return container;
}


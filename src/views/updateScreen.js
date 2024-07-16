import { parallaxFX } from "./parallaxFX";
import { asideDOM } from "./moleculeViews/asideDOM";
import { headerDOM } from "./moleculeViews/headerDOM";
import { mainDOM } from "./moleculeViews/mainDOM";
import { addTaskModal, modalContainer } from "./moleculeViews/modalContainer";
import { renderer } from "./renderer";

export function updateScreen(ActiveColeccion, modal = null) {
  const root = document.querySelector("#root")
  root.innerHTML = "";

  renderer(modalContainer(modal))

  renderer(headerDOM(ActiveColeccion));

  renderer(asideDOM())

  renderer(mainDOM(ActiveColeccion))


  parallaxFX();
}
import { parallaxFX } from "../modules/parallaxFX";
import { asideDOM } from "./moleculeViews/asideDOM";
import { headerDOM } from "./moleculeViews/headerDOM";
import { mainDOM } from "./moleculeViews/mainDOM";
import { addTaskModal, modalContainer } from "./moleculeViews/taskForm";
import { renderer } from "./renderer";

export function updateScreen(ActiveColeccion){
  const root = document.querySelector("#root")
  root.innerHTML = "";

  renderer(modalContainer(addTaskModal()))

  renderer(headerDOM(ActiveColeccion));

  renderer(asideDOM())

  renderer(mainDOM(ActiveColeccion))


  parallaxFX();
}
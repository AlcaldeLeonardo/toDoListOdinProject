import { parallaxFX } from "./parallaxFX";
import { asideDOM } from "./moleculeViews/asideDOM";
import { headerDOM } from "./moleculeViews/headerDOM";
import { mainDOM } from "./moleculeViews/mainDOM";
import { renderer } from "./renderer";
import { modalContainer } from "./moleculeViews/modalContainer";
import { CollectionArray } from "../modules/classes/CollectionArray";

/**
 * Renders the screen with the provided modal and active collection.
 *
 * @param {Object} modal - The modal to be displayed on the screen, defaults to null if not provided.
 * @return {void} 
 */
export function updateScreen(modal = null) {
  const root = document.querySelector("#root")
  root.innerHTML = "";

  renderer(modalContainer(modal))

  renderer(headerDOM(CollectionArray.ActiveCollection));

  renderer(asideDOM())

  renderer(mainDOM(CollectionArray.ActiveCollection))


  parallaxFX();

}
import { CollectionArray } from "../../modules/classes/CollectionArray";
import { titleDOM } from "../atomViews/titleDOM";
import { collectionCard } from "./cards";

export function asideDOM(){
  const aside = document.createElement("aside")
  aside.className = "aside"

  const titleSection = document.createElement("div")
  titleSection.className = "aside__titleSection"
  titleSection.appendChild(titleDOM("Collections List", "h2", "aside__titleH2 titleH2 title"))
  aside.appendChild(titleSection);
  
  const cardSection = document.createElement("div")
  cardSection.className = "aside__cardSection"

  CollectionArray.collections.forEach(collection => {
    cardSection.appendChild(collectionCard(collection))
  });
  aside.appendChild(cardSection);

  return aside;
}
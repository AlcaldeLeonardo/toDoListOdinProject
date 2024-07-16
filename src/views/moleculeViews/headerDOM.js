import { titleDOM } from "../atomViews/titleDOM";

export function headerDOM(collection) {
  const header = document.createElement("header");
  header.className = "header";

  header.innerHTML = ""

  if(collection) header.appendChild(titleDOM(collection.Title,"h1", "header_titleH1 title titleH1"));


  return header;
}

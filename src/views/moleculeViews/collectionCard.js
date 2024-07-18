import { collectionCardDelController } from "../../controllers/collectionCardDelController"
import { setActiveCollectionController } from "../../controllers/setActiveCollectionController"
import { CollectionArray } from "../../modules/classes/CollectionArray"
import { titleDOM } from "../atomViews/titleDOM"
import { updateScreen } from "../updateScreen"
import { buttonBoxDOM } from "./buttonBoxDOM"

export function collectionCard(tasksCollectionObj) {
  const {title} = tasksCollectionObj
  const card = document.createElement(`div`)
  const cardTitle = titleDOM(title, "h3", "titleH3 title card__title", "colectionTitle")
  
  card.className = "aside__element card"
  card.id = `collection${tasksCollectionObj.id}`

  const pendingTasks = tasksCollectionObj.tasksArray.some(task => task.success === false)
  console.log(pendingTasks)
  console.log(tasksCollectionObj.tasksArray.length)
  if (tasksCollectionObj.tasksArray.length !== 0 && !pendingTasks) {
    card.classList.add("card--done")
  }
  
  card.appendChild(cardTitle);
  card.appendChild(buttonBoxDOM());
  
  
  cardTitle.addEventListener("click", () => setActiveCollectionController(tasksCollectionObj))

  card.querySelector("#delBtn").addEventListener("click",()=> collectionCardDelController(tasksCollectionObj))

  return card;
}
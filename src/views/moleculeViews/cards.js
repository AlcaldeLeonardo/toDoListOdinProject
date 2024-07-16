import { CollectionArray } from "../../modules/classes/CollectionArray";
import { TasksCollection } from "../../modules/classes/TasksCollection";
import { paragraphDOM, spanWithLabelDOM } from "../atomViews/paragraph";
import { titleDOM } from "../atomViews/titleDOM";
import { updateScreen } from "../updateScreen";
import { buttonBoxDOM } from "./buttonBoxDOM";

export function toDocard(task) {
  const { id, title, description, priority, dueDate } = task;
  const card = document.createElement("div");

  //set DOM Atributes Task Card
  card.className = "main__toDoCard toDoCard card";
  card.id = id;

  // Task Card Title
  card.appendChild(
    titleDOM(
      title,
      "h3",
      "toDoCard__title card__title title titleH3",
      `taskTitleCard${id}`
    )
  );

  // Task Card Body
  const cardBody = document.createElement(`div`);
  cardBody.classList = "toDoCard__body";
  card.appendChild(cardBody)

  // Task Card Descrition
  cardBody.appendChild(paragraphDOM(description, "toDoCard__description"));
  
  //Task Card Priority
  cardBody.appendChild(paragraphDOM(spanWithLabelDOM("Priority", priority),"toDoCard__priority card__priority"));
  
  // Task Card Due Date
  cardBody.appendChild(paragraphDOM(spanWithLabelDOM("Due Date", dueDate), "toDoCard__dueDate card__dueDate"));

  // Task Card ButtonBox
  
  card.appendChild(buttonBoxDOM())


  return card;
}

export function collectionCard(tasksCollectionObj) {
  const {title} = tasksCollectionObj
  const card = document.createElement(`div`)
  const cardTitle = titleDOM(title, "h3", "titleH3 title card__title", "colectionTitle")
  
  card.className = "aside__element card"
  card.id = `collection${tasksCollectionObj.id}`

  
  card.appendChild(cardTitle);
  card.appendChild(buttonBoxDOM());
  
  
  cardTitle.addEventListener("click", () =>{
    CollectionArray.setActiveCollection(tasksCollectionObj)
    updateScreen(CollectionArray.ActiveCollection);
  })

  return card;
}


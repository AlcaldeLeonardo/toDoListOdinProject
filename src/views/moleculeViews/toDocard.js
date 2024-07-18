import {taskCardDelBtnController} from "../../controllers/taskCardDelBtnController"
import { paragraphDOM } from "../atomViews/paragraph";
import { spanWithLabelDOM } from "../atomViews/spanWithLabelDOM";
import { titleDOM } from "../atomViews/titleDOM";
import { coloringTheCard } from "../coloringTheCard";
import { taskCardButtonBoxDOM } from "./taskCardButtonBoxDOM";
import { format } from "date-fns";

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
  if(task.success === true){
    card.classList.add("toDoCard--done")
  }
  card.appendChild(cardBody)

  // Task Card Descrition
  cardBody.appendChild(paragraphDOM(description, "toDoCard__description"));
  
  //Task Card Priority
  cardBody.appendChild(paragraphDOM(spanWithLabelDOM("Priority", priority),"toDoCard__priority card__priority"));
  coloringTheCard(card, task)
  
  // Task Card Due Date
cardBody.appendChild(paragraphDOM(spanWithLabelDOM("Due Date", format(dueDate, "PPPP")), "toDoCard__dueDate card__dueDate"));

  // Task Card ButtonBox
  
  card.appendChild(taskCardButtonBoxDOM(task))

  card.querySelector("#delBtn").addEventListener("click",()=> taskCardDelBtnController(task))

  return card;
}
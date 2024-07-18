import { CollectionArray } from "../modules/classes/CollectionArray";
import { Task } from "../modules/classes/Task";
import { updateStorage } from "../modules/updateStorage";
import { modalContainer } from "../views/moleculeViews/modalContainer";
import { updateScreen } from "../views/updateScreen";
import { removeModalController } from "./removeModalController";

export function addTaskController(e) {
  const form = document.querySelector(".modalContainer__addTaskForm.addTaskForm");
  
  if (form.checkValidity()) {
    e.preventDefault();
  
    const title = document.getElementById("titleTask").value;
    const description = document.getElementById("taskDescription").value;
    const priority = document.getElementById("taskPriority").value;
    const dueDate = document.getElementById("dueDateTask").value;
  
    const newTask = new Task(title, description, priority, dueDate);
    CollectionArray.ActiveCollection.addTask(newTask);
    removeModalController(modalContainer());
    updateStorage()
    updateScreen();
  }
}

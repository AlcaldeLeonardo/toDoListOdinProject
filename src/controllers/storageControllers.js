import { CollectionArray } from "../modules/classes/CollectionArray";
import { Task } from "../modules/classes/Task";
import { TasksCollection } from "../modules/classes/TasksCollection";

export function updateStorage() {
  localStorage.setItem(
    "collections",
    JSON.stringify(CollectionArray.collections)
  );
  console.log(JSON.parse(localStorage.getItem("collections")));
}

export function getStorage() {
  if (localStorage.getItem("collections")) {
    const StorageCollections = JSON.parse(localStorage.getItem("collections"));

    StorageCollections.forEach((collection) => {
      const collectionObj = new TasksCollection(collection.title);
      CollectionArray.addCollection(collectionObj);

      collection.tasksArray.forEach((task) => {
        const taskObj = new Task(
          task.title,
          task.description,
          task.priority,
          task.dueDate
        );
        collectionObj.addTask(taskObj);
      });
    });
  }
}

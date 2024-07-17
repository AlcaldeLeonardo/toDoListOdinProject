import { CollectionArray } from "../modules/classes/CollectionArray";
import { Task } from "../modules/classes/Task";
import { TasksCollection } from "../modules/classes/TasksCollection";

/**
 * Retrieves the stored collections and tasks from the local storage and
 * creates the corresponding objects.
 *
 * @return {void} This function does not return a value.
 */


export function getStorage() {
  // If there is something in the local storage, we must have called this function
  // before and have some data saved. So we must retrieve the collections from
  // the local storage and create the corresponding objects.
  if (localStorage.getItem("collections")) {
    const StorageCollections = JSON.parse(localStorage.getItem("collections"));

    // Go through each collection that we have stored in the local storage.
    StorageCollections.forEach((collection) => {
      // Create a new TasksCollection object with the title that we have stored
      // in the local storage.
      const collectionObj = new TasksCollection(collection.title);

      // Add this new TasksCollection object to the CollectionArray so that we can
      // access it later.
      CollectionArray.addCollection(collectionObj);

      // Go through each task that we have stored in the local storage.
      collection.tasksArray.forEach((task) => {
        // Create a new Task object with the title, description, priority, and due
        // date that we have stored in the local storage.
        const taskObj = new Task(
          task.title,
          task.description,
          task.priority,
          task.dueDate
        );

        // Add this new Task object to the TasksCollection object that we created
        // above.
        collectionObj.addTask(taskObj);
      });
    });
  }
}

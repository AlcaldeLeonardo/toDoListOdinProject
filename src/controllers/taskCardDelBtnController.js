import { CollectionArray } from "../modules/classes/CollectionArray";
import { updateScreen } from "../views/updateScreen";
import { updateStorage } from "../modules/updateStorage";

export function taskCardDelBtnController(task){
    const ActiveCollection = CollectionArray.ActiveCollection;

    ActiveCollection.deleteTask(task.id)
    updateStorage();
    updateScreen(CollectionArray.ActiveCollection)
}
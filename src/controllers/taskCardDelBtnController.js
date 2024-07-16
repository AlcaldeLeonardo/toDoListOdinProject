import { CollectionArray } from "../modules/classes/CollectionArray";
import { updateScreen } from "../views/updateScreen";

export function taskCardDelBtnController(task){
    const ActiveCollection = CollectionArray.ActiveCollection;

    ActiveCollection.deleteTask(task.id)
    updateScreen(CollectionArray.ActiveCollection)
}
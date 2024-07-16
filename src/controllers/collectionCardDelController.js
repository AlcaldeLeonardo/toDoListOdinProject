import { CollectionArray } from "../modules/classes/CollectionArray";
import { updateScreen } from "../views/updateScreen";

export function collectionCardDelController(tasksCollectionObj) {
    CollectionArray.deleteCollection(tasksCollectionObj);
    updateScreen(CollectionArray.ActiveCollection);
  
}

import { CollectionArray } from "../modules/classes/CollectionArray";
import { updateScreen } from "../views/updateScreen";
import { updateStorage } from "./storageControllers";

export function collectionCardDelController(tasksCollectionObj) {
    CollectionArray.deleteCollection(tasksCollectionObj);
    updateStorage();
    updateScreen(CollectionArray.ActiveCollection);
}

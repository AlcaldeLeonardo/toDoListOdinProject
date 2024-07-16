import { CollectionArray } from "../modules/classes/CollectionArray";
import { updateScreen } from "../views/updateScreen";

export function setActiveCollectionController(tasksCollectionObj){
  CollectionArray.setActiveCollection(tasksCollectionObj)
  updateScreen(CollectionArray.ActiveCollection);
}
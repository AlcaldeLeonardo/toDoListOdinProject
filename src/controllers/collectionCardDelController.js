import { CollectionArray } from "../modules/classes/CollectionArray";
import { updateScreen } from "../views/updateScreen";

export function collectionCardDelController(tasksCollectionObj) {
  if(CollectionArray.collections.length > 1){
    CollectionArray.deleteCollection(tasksCollectionObj);
    updateScreen(CollectionArray.ActiveCollection);
  }else{
    alert("no se puede eliminar la ultima coleccion")
  }
}

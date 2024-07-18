export class CollectionArray {
  static collections = [];
  static ActiveCollection = null;
  static addCollection(collection) {
    CollectionArray.collections.push(collection);
    CollectionArray.setActiveCollection(collection);
  }

  static deleteCollection(collection) {
    const index = CollectionArray.collections.findIndex(obj => obj.id === collection.id);
    if (index !== -1) {
      CollectionArray.collections.splice(index, 1);
      CollectionArray.ActiveCollection = CollectionArray.collections[0]
    }
  }
  static setActiveCollection(collection){
    CollectionArray.ActiveCollection = collection;
  }
}

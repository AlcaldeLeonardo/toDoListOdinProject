export class CollectionArray {
  static collections = [];
  static ActiveCollection = null;
  static addCollection(collection) {
    CollectionArray.collections.push(collection);
    CollectionArray.setActiveCollection(collection);
  }

  static deleteCollection(collection) {
    CollectionArray.collections = CollectionArray.filter(
      (obj) => obj.title !== collection.title
    );
  }
  static setActiveCollection(collection){
    CollectionArray.ActiveCollection = collection;
  }
}

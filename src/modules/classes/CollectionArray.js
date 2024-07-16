export class CollectionArray {
  static collections = [];
  static ActiveCollection = null;
  static addCollection(collection) {
    CollectionArray.collections.push(collection);
    CollectionArray.setActiveCollection(collection);
  }

  static deleteCollection(collection) {
    CollectionArray.collections = CollectionArray.collections.filter(
      (obj) => obj.title !== collection.title
    );
    CollectionArray.ActiveCollection = this.collections[this.collections.length-1]
  }
  static setActiveCollection(collection){
    CollectionArray.ActiveCollection = collection;
  }
}

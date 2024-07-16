export class CollectionArray {
  static collections = [];
  static addCollection(collection) {
    CollectionArray.collections.push(collection);
  }

  static deleteCollection(collection) {
    CollectionArray.collections = CollectionArray.filter(
      (obj) => obj.title !== collection.title
    );
  }
}

import { CollectionArray } from "../modules/classes/CollectionArray";

/**
 * Updates the "collections" item in the local storage with the current state of the CollectionArray.
 *
 * @return {void} This function does not return a value.
 */
export function updateStorage() {
  localStorage.setItem(
    "collections",
    JSON.stringify(CollectionArray.collections)
  );
}

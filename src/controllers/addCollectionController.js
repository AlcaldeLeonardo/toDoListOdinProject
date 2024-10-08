import { CollectionArray } from '../modules/classes/CollectionArray'
import { TasksCollection } from '../modules/classes/TasksCollection'
import { updateScreen } from '../views/updateScreen'
import { updateStorage } from '../modules/updateStorage'

export function addCollectionController(e) {
  const form = document.querySelector(
    '.modalContainer__addCollectionForm.addCollectionForm'
  )
  const title = document.querySelector('#titleCollection').value

  if (form.checkValidity()) {
    e.preventDefault()
    const collection = new TasksCollection(title)
    CollectionArray.addCollection(collection)
    updateStorage()
    updateScreen()

  }
}

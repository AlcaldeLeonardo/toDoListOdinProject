import { createInputFormDiv } from './createInputFormDiv'
import { createCollectionSubmitBtn } from '../atomViews/createCollectionSubmitBtn'

export function collectionFormDOM () {
  const collectionForm = document.createElement('form')
  collectionForm.className = 'modalContainer__addCollectionForm addCollectionForm'

  // Title
  collectionForm.appendChild(
    createInputFormDiv(
      'collectionFormTitle modalContainer__formDiv modalContainer__formDiv formDiv formDiv--title',
      'Title',
      'titleCollection',
      'Collection Name'
    )
  )
  collectionForm.appendChild(createCollectionSubmitBtn())

  return collectionForm
}

import { titleDOM } from '../atomViews/titleDOM'
import { updateScreen } from '../updateScreen'
import { addCollectionModal } from './addCollectionModal'

export function headerDOM (collection) {
  const header = document.createElement('header')
  const addColectionBtn = document.createElement('button')
  addColectionBtn.innerHTML = 'Add Collection'
  addColectionBtn.className = 'header__addColectionBtn btn btn--primary'

  addColectionBtn.addEventListener('click', () => {
    updateScreen(addCollectionModal())
    document.querySelector('#titleCollection').focus()
  })

  header.className = 'header'

  header.innerHTML = ''

  if (collection) header.appendChild(titleDOM(collection.Title, 'h1', 'header_titleH1 title titleH1'))
  else header.appendChild(titleDOM('Nothing Here Yet', 'h1', 'header_titleH1 title titleH1'))
  header.appendChild(addColectionBtn)

  return header
}

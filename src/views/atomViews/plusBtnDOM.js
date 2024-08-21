import { CollectionArray } from '../../modules/classes/CollectionArray'
import { addTaskModal } from '../moleculeViews/addTaskModal'
import { updateScreen } from '../updateScreen'
import { btnDOM } from './btnDOM'

export function plusBtnDOM () {
  const btn = btnDOM('+', 'main__addToDo btn', 'addBtn')

  if (CollectionArray.collections.length === 0) {
    btn.style.display = 'none'
  }
  btn.addEventListener('click', () => {
    updateScreen(addTaskModal())

    document.querySelector('#titleTask').focus()
  })

  return btn
}

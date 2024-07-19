import { removeModalController } from '../../controllers/removeModalController'
import { titleDOM } from '../atomViews/titleDOM'
import { createDiv } from '../atomViews/createDiv'
import { taskFormDOM } from './taskFormDOM'

export function addTaskModal () {
  const modal = createDiv('addTaskModal modalContainer__modalcard card')
  const closeBtn = document.createElement('span')
  closeBtn.className = 'modalcard__close'
  closeBtn.innerHTML = 'X'

  closeBtn.addEventListener('click', () => {
    removeModalController(modal)
  })

  modal.appendChild(closeBtn)
  modal.appendChild(
    titleDOM('Add a Task', 'h2', 'modalcard__title title titleH2')
  )
  modal.appendChild(taskFormDOM())

  return modal
}

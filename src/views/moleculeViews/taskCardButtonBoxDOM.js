import { delBtn } from '../atomViews/delBtn'
import { successBtn } from '../atomViews/doneBtn'

export function taskCardButtonBoxDOM (task) {
  const buttonBox = document.createElement('div')
  buttonBox.className = 'toDoCard__buttonBox buttonBox'
  buttonBox.appendChild(successBtn(task))
  buttonBox.appendChild(delBtn())

  return buttonBox
}

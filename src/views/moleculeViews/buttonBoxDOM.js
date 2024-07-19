import { delBtn } from '../atomViews/delBtn'

export function buttonBoxDOM () {
  const buttonBox = document.createElement('div')
  buttonBox.className = 'toDoCard__buttonBox buttonBox'
  buttonBox.appendChild(delBtn())

  return buttonBox
}

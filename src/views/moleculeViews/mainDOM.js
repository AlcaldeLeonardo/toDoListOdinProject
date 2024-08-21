import { plusBtnDOM } from '../atomViews/plusBtnDOM'
import { titleDOM } from '../atomViews/titleDOM'
import { toDocard } from './toDocard'

export function mainDOM (collectinObj) {
  const mainElement = document.createElement('main')
  mainElement.className = 'main'
  mainElement.innerHTML = ''

  mainElement.appendChild(plusBtnDOM())

  if (collectinObj) {
    const tasksArray = collectinObj.tasksArray

    tasksArray.forEach((task) => {
      mainElement.appendChild(toDocard(task))
    })
  } else {
    mainElement.appendChild(
      titleDOM(
        "You don't have nothing here yet, press the add Collection button to start!!!",
        'h2',
        'card titleH2 title'
      )
    )
  }

  return mainElement
}

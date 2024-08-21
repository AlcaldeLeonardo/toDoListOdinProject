import { createDiv } from '../atomViews/createDiv'

export function createTaskPriorityInputDiv () {
  const id = 'taskPriority'
  const values = ['high', 'medium', 'low']
  const div = createDiv('modalContainer__formDiv formDiv formDiv--priority')
  const label = document.createElement('label')
  const select = document.createElement('select')
  label.htmlFor = id
  label.textContent = 'Priority'
  select.id = id
  select.className = 'modalContainer__input'

  values.forEach((optionValue) => {
    const option = document.createElement('option')
    option.value = optionValue
    option.innerHTML = optionValue

    select.appendChild(option)
  })

  div.appendChild(label)
  div.appendChild(select)
  return div
}

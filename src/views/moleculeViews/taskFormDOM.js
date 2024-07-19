import { createTaskPriorityInputDiv } from './createTaskPriorityInputDiv'
import { createInputFormDiv } from './createInputFormDiv'
import { createSubmitBtn } from '../atomViews/createSubmitBtn'

export function taskFormDOM () {
  const taskForm = document.createElement('form')
  taskForm.className = 'modalContainer__addTaskForm addTaskForm'

  // Title
  taskForm.appendChild(
    createInputFormDiv(
      'modalContainer__formDiv modalContainer__formDiv formDiv formDiv--title',
      'Title *',
      'titleTask',
      'Make the Plate'
    )
  )

  // Description
  taskForm.appendChild(
    createInputFormDiv(
      'modalContainer__formDiv formDiv formDiv--description',
      'Description',
      'taskDescription',
      '... is a nice day for Make the plate',
      'text',
      false
    )
  )

  // Priority
  taskForm.appendChild(createTaskPriorityInputDiv())

  // Due Date
  taskForm.appendChild(
    createInputFormDiv(
      'modalContainer__formDiv formDiv formDiv--dueDate',
      'Due Date *',
      'dueDateTask',
      '',
      'date'
    )
  )

  taskForm.appendChild(createSubmitBtn())

  return taskForm
}

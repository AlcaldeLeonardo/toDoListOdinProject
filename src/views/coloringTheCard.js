export function coloringTheCard (card, task) {
  const priorityClasses = {
    high: 'toDoCard--high',
    medium: 'toDoCard--medium',
    low: 'toDoCard--low'
  }

  const priorityClass = priorityClasses[task.priority]
  if (priorityClass) {
    card.classList.add(priorityClass)
  }
}

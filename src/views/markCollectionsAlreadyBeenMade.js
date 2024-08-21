export function markCollectionsAlreadyBeenMade (card, tasksCollectionObj) {
  const pendingTasks = tasksCollectionObj.tasksArray.some(task => task.success === false)
  console.log(pendingTasks)
  console.log(tasksCollectionObj.tasksArray.length)
  if (tasksCollectionObj.tasksArray.length !== 0 && !pendingTasks) {
    card.classList.add('card--done')
  }
} // TODO: markCollectionsAlreadyBeenMade

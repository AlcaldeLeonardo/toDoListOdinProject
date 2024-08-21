export class TasksCollection {
  static staticId = 0

  constructor (title, tasksArray = []) {
    this.id = TasksCollection.staticId
    this.title = title
    this.tasksArray = tasksArray
    TasksCollection.staticId++
  }

  get Title () {
    return this.title
  }

  get TasksArray () {
    return this.tasksArray
  }

  addTask (task) {
    this.tasksArray.push(task)
  }

  deleteTask (taskId) {
    const index = this.tasksArray.findIndex((obj) => obj.id === taskId)
    if (index !== -1) {
      this.tasksArray.splice(index, 1)
    }
  }
}

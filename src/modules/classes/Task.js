export class Task {
  static idStatic = 0

  constructor (title, description, priority, dueDate = new Date(), success = false) {
    this.id = Task.idStatic
    this.title = title
    this.description = description
    this.priority = priority
    this.dueDate = dueDate
    this.success = success

    Task.idStatic++
  }
}

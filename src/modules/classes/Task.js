export class Task {
    static idStatic = 0

    constructor(title, description, priority, dueDate = new Date()){
        this.id = Task.idStatic
        this.title = title;
        this.description = description;
        this.priority = priority
        this.dueDate = dueDate;

        Task.idStatic ++;
    }
}
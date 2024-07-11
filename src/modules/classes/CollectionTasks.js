export class CollectionTasks{
    #tasksArray;

    constructor(title,tasksArray = []){
        this.title = title
        this.#tasksArray = tasksArray;
    }

    get Title(){
        return this.title;
    }
    get TasksArray(){
        return this.#tasksArray;
    }
    addTask(task){
        this.#tasksArray.push(task)
    }

    deleteTask(taskId){
        this.#tasksArray = this.#tasksArray.filter(obj => obj.id !== taskId);
    }
}
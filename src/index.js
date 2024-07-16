import './css/reset.css'
import './scss/style.scss'
import { Task } from './modules/classes/Task';
import { TasksCollection } from './modules/classes/TasksCollection';
import { CollectionArray } from './modules/classes/CollectionArray';
import { updateScreen } from './views/updateScreen';


// Coleccion y tasks de prueba

const toDo0 = new Task("Hacer la cama", "nada mas que eso", "low",new Date())
const toDo1 = new Task("Sacar la basura", "Otra tarea horrible", "medium",new Date())
const toDo2 = new Task("Resolver la ecuacion de la vida", "Tan filosifico iba a ser?", "high",new Date())
const toDo3 = new Task("Hacer la merienda", "de amor no se vive", "low",new Date())

const collection = new TasksCollection("Cosas de Prueba")
collection.addTask(toDo0)
collection.addTask(toDo1)
const collection1 = new TasksCollection("Cosas del trabajo")
collection1.addTask(toDo2)
collection1.addTask(toDo3)

CollectionArray.addCollection(collection)
CollectionArray.addCollection(collection1)


// PRUEBAS DE RENDER

// Header
// CollectionArray.setActiveCollection()

updateScreen(CollectionArray.ActiveCollection)
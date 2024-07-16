import './css/reset.css'
import { parallaxFX } from './modules/parallaxFX';
import './scss/style.scss'
import { renderer } from './views/renderer'
import { Task } from './modules/classes/Task';
import { collectionCard, toDocard } from './views/moleculeViews/cards';
import { TasksCollection } from './modules/classes/CollectionTasks';
import { mainDOM } from './views/moleculeViews/mainDOM';
import { CollectionArray } from './modules/classes/CollectionArray';
import { asideDOM } from './views/moleculeViews/asideDOM';
import { headerDOM } from './views/moleculeViews/headerDOM';


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

renderer(headerDOM(collection1));

// aside
renderer(asideDOM())

// Main
renderer(mainDOM(collection))


parallaxFX();
import './css/reset.css'
import './scss/style.scss'
import { Task } from './modules/classes/Task';
import { TasksCollection } from './modules/classes/TasksCollection';
import { CollectionArray } from './modules/classes/CollectionArray';
import { updateScreen } from './views/updateScreen';

// Coleccion y tasks de prueba
const defaultCollection = new TasksCollection("Cosas de Prueba")
const collection1 = new TasksCollection("Cosas del trabajo")

CollectionArray.addCollection(defaultCollection)
CollectionArray.addCollection(collection1)


// PRUEBAS DE RENDER
updateScreen(CollectionArray.ActiveCollection)
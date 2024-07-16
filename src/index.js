import './css/reset.css'
import './scss/style.scss'
import { Task } from './modules/classes/Task';
import { TasksCollection } from './modules/classes/TasksCollection';
import { CollectionArray } from './modules/classes/CollectionArray';
import { updateScreen } from './views/updateScreen';

// Coleccion y tasks de prueba


// PRUEBAS DE RENDER
updateScreen(CollectionArray.ActiveCollection)
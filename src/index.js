import './css/reset.css'
import './scss/style.scss'

import { CollectionArray } from './modules/classes/CollectionArray';
import { updateScreen } from './views/updateScreen';

// PRUEBAS DE RENDER
updateScreen(CollectionArray.ActiveCollection)
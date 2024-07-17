import './css/reset.css'
import './scss/style.scss'

import { CollectionArray } from './modules/classes/CollectionArray';
import { updateScreen } from './views/updateScreen';
import { getStorage } from "./modules/getStorage";

// App Initialization
getStorage();
// Screen Initialization
updateScreen(CollectionArray.ActiveCollection)

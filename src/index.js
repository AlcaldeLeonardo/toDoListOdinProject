import './css/reset.css'
import './scss/style.scss'

import { updateScreen } from './views/updateScreen';
import { getStorage } from "./modules/getStorage";
import { setFavicon } from './setFavicon';


setFavicon();

// App Initialization
getStorage();
// Screen Initialization
updateScreen()

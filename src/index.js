import './css/reset.css'
import { parallaxFX } from './modules/parallaxFX';
import './scss/style.scss'
import { renderer } from './views/renderer'
import { titleH2DOM } from './views/atomViews/titleDOM'

// renderer(titleH2DOM("Hola"))

renderer();
parallaxFX();
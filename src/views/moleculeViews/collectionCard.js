import { collectionCardDelController } from '../../controllers/collectionCardDelController'
import { setActiveCollectionController } from '../../controllers/setActiveCollectionController'
import { titleDOM } from '../atomViews/titleDOM'
import { buttonBoxDOM } from './buttonBoxDOM'
import { markCollectionsAlreadyBeenMade } from '../markCollectionsAlreadyBeenMade'

export function collectionCard (tasksCollectionObj) {
  const { title } = tasksCollectionObj
  const card = document.createElement('div')
  const cardTitle = titleDOM(title, 'h3', 'titleH3 title card__title', 'colectionTitle')

  card.className = 'aside__element card'
  card.id = `collection${tasksCollectionObj.id}`

  markCollectionsAlreadyBeenMade(card, tasksCollectionObj)

  card.appendChild(cardTitle)
  card.appendChild(buttonBoxDOM())

  cardTitle.addEventListener('click', () => setActiveCollectionController(tasksCollectionObj))

  card.querySelector('#delBtn').addEventListener('click', () => collectionCardDelController(tasksCollectionObj))

  return card
}

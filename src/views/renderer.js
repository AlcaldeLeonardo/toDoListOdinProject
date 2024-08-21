export function renderer (elementDOM = document.createElement('div')) {
  const root = document.querySelector('#root')
  root.appendChild(elementDOM)
}

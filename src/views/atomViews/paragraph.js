export function paragraphDOM (text, classCss = '') {
  const p = document.createElement('p')
  p.innerHTML = text
  p.className = classCss

  return p
}

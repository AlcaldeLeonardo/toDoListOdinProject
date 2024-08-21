export function btnDOM (nameBtn = 'function', classCss = 'btn', id = '') {
  const btn = document.createElement('button')
  btn.innerHTML = nameBtn
  if (id) btn.id = id
  btn.className = classCss

  return btn
}

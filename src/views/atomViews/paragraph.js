export function paragraphDOM(text, classCss = ""){
  const p = document.createElement(`p`)
  p.innerHTML = text;
  p.className = classCss;

  return p;
}

export function spanWithLabelDOM(label, data){
  return `<span class="toDoCard__label">${label}: </span><span">${data}</span>`
}
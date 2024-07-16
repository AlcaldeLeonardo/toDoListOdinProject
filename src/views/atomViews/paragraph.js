export function paragraphDOM(text, classCss = ""){
  const p = document.createElement(`p`)
  p.innerHTML = text;
  p.className = classCss;

  return p;
}

export function spanWithLabelDOM(label, data){
  if(data == "high") return `<span class="toDoCard__label">${label}: </span><span style= "color:red">${data}</span>`
  if(data == "medium") return `<span class="toDoCard__label">${label}: </span><span style= "color:#d50">${data}</span>`
  if(data == "low") return `<span class="toDoCard__label">${label}: </span><span style= "color:green">${data}</span>`
  return `<span class="toDoCard__label">${label}: </span><span>${data}</span>`
}
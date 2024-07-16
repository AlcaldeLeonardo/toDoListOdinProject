export function paragraphDOM(text, classCss = ""){
  const p = document.createElement(`p`)
  p.innerHTML = text;
  p.className = classCss;

  return p;
}

export function spanWithLabelDOM(label, data) {
  const colorMap = {
    high: "red",
    medium: "#d50",
    low: "green"
  };

  const color = colorMap[data] || "";
  const style = color ? `style="color: ${color}"` : "";

  return `<span class="toDoCard__label">${label}: </span><span ${style}>${data}</span>`;
}

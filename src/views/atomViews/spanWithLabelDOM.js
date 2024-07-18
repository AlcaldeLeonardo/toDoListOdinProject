
export function spanWithLabelDOM(label, data) {
  const colorMap = {
    high: "red",
    medium: "#d50",
    low: "green"
  };

  const color = colorMap[data] || "";
  const style = color ? `style="font-weight: bold; color: ${color}"` : "";

  return `<span class="toDoCard__label">${label}: </span><span ${style}>${data}</span>`;
}

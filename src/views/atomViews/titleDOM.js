export function titleDOM(text, tag = "h2", classCss = "titleH2", idDOM = ""){
    const title = document.createElement(tag)
    title.className = classCss;
    if(idDOM) title.id = idDOM;
    title.textContent = text;

    return title
}
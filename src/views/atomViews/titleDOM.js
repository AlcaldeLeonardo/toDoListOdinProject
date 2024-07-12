export function titleH2DOM(text, idDOM = "", classCss = "titleH2"){
    const title = document.createElement(`h2`)
    title.className = classCss;
    if(idDOM) title.id = idDOM;
    title.textContent = text;

    return title
}
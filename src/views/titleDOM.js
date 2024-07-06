export function titleH2DOM(text, classCss = "titleH2"){
    const title = document.createElement(`h2`)
    title.className = classCss;
    title.textContent = text;

    return title
}
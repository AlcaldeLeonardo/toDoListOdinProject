export function parallaxFX(){
    const background = document.querySelector(".appContainer")
    
    window.addEventListener("scroll",()=>{
        background.style.backgroundPositionY = +(window.scrollY/5)+ "px";
        console.log('background :>> ', background.style.backgroundPositionY);
    })
}
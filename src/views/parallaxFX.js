export function parallaxFX(){
    const background = document.querySelector(".appContainer")
    
    window.addEventListener("scroll",()=>{
        background.style.backgroundPositionY = +(window.scrollY/20)+ "px";
        console.log('background :>> ', background.style.backgroundPositionY);
    })
}
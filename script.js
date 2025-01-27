
function mainAnimation() {
    const logo = document.querySelector(".logo")
    const language = document.querySelector(".language")
    const moon = document.querySelector(".fa-moon")
    const menu = document.querySelector(".fa-bars")
    logo.classList.add("intro")
    setTimeout(() => {
       menu.classList.add("intro") 
    }, 500);
    setTimeout(() => {
       language.classList.add("intro") 
    }, 700);
    setTimeout(() => {
        moon.classList.add("intro")
    }, 1000);
    console.log("funca")
}
mainAnimation()

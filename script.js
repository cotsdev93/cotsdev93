function mainAnimation() {
  const logo = document.querySelector(".logo");
  const language = document.querySelector(".language");
  const moon = document.querySelector(".fa-moon");
  const menu = document.querySelector(".fa-bars");
  logo.classList.add("intro");
  setTimeout(() => {
    menu.classList.add("intro");
  }, 500);
  setTimeout(() => {
    language.classList.add("intro");
  }, 700);
  setTimeout(() => {
    moon.classList.add("intro");
  }, 1000);

  const moreInfo = document.querySelector(".moreInfo");
  const presentation = document.querySelector(".presentation");
  const welcomeMessage = document.querySelector(".welcomeMessage");
  setTimeout(() => {
    moreInfo.classList.add("intro");
  }, 1100);
  setTimeout(() => {
    presentation.classList.add("intro");
  }, 1300);
  setTimeout(() => {
    welcomeMessage.classList.add("intro");
  }, 1600);
}
mainAnimation();

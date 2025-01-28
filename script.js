function mainAnimation() {
  const logo = document.querySelector(".logo");
  const language = document.querySelector(".language");
  const moon = document.querySelector(".fa-moon");
  const menu = document.querySelector(".fa-bars");
  logo.classList.add("intro");
  setTimeout(() => {
    menu.classList.add("intro");
  }, 300);
  setTimeout(() => {
    language.classList.add("intro");
  }, 700);
  setTimeout(() => {
    moon.classList.add("intro");
  }, 1000);

  const moreInfo = document.querySelector(".moreInfo");
  const presentation = document.querySelector(".presentation");

  const wOne = document.querySelector(".wOne");
  const wTwo = document.querySelector(".wTwo");
  const pOne = document.querySelector(".pOne")
  const pTwo = document.querySelector(".pTwo")

  setTimeout(() => {
    moreInfo.classList.add("intro");
  }, 1300);
  setTimeout(() => {
    presentation.classList.add("intro");
  }, 1300);
  setTimeout(() => {
    wOne.classList.add("intro");
  }, 1800);
  setTimeout(() => {
    wTwo.classList.add("intro");
  }, 1700);
  setTimeout(() => {
    pOne.classList.add("intro")
  }, 1600);
  setTimeout(() => {
    pTwo.classList.add("intro")
  }, 1500);
}
mainAnimation();

///////////////////////////////////////////////////////////// NAV

const logo = document.querySelector(".logo");

logo.addEventListener("click", (event) => {
  event.preventDefault();

  if (myProjects.classList.contains("displayBlock")) {
    reverseMyProjectsAnimation();
    mainAnimation();
    setTimeout(() => {
      main.classList.remove("displayNone");
    }, 700);
  }
});

///////////////////////////////////////////////////////////// main

function mainAnimation() {
  const elementsWithDelays = [
    { selector: ".logo", delay: 0 },
    { selector: ".fa-bars", delay: 300 },
    { selector: ".language", delay: 700 },
    { selector: ".fa-moon", delay: 1000 },
    { selector: ".moreInfo", delay: 1300 },
    { selector: ".presentation", delay: 1300 },
    { selector: ".wOne", delay: 1800 },
    { selector: ".wTwo", delay: 1700 },
    { selector: ".pOne", delay: 1600 },
    { selector: ".pTwo", delay: 1500 },
  ];

  elementsWithDelays.forEach(({ selector, delay }) => {
    const element = document.querySelector(selector);
    if (element) {
      setTimeout(() => {
        element.classList.add("intro");
      }, delay);
    }
  });
}

mainAnimation();

function reverseAnimation() {
  const elementsWithDelays = [
    { selector: ".pTwo", delay: 700 },
    { selector: ".pOne", delay: 600 },
    { selector: ".moreInfo", delay: 500 },
    { selector: ".presentation", delay: 400 },
    { selector: ".pTwo", delay: 300 },
    { selector: ".pOne", delay: 200 },
    { selector: ".wTwo", delay: 100 },
    { selector: ".wOne", delay: 0 },
    { selector: ".fa-moon", delay: 300 },
    { selector: ".language", delay: 400 },
  ];

  elementsWithDelays.forEach(({ selector, delay }) => {
    const element = document.querySelector(selector);
    if (element) {
      setTimeout(() => {
        element.classList.remove("intro");
      }, delay);
    }
  });
}


//////////////////////////////////////////////////////////// my projects

const myProjectsInfo = document.querySelector(".myProjects");

myProjectsInfo.addEventListener("click", () => {
  const main = document.querySelector("#main");
  const myProjects = document.getElementById("myProjects");

  reverseAnimation();

  setTimeout(() => {
    main.classList.add("displayNone");
    myProjects.classList.add("displayBlock");
  }, 1000);
  setTimeout(() => {
    myProjectsAnimation();
  }, 1100);
});

function myProjectsAnimation() {
  const titleContainer = document.querySelector(".titleContainer");
  const listContent = document.querySelector(".listContent");
  titleContainer.classList.add("animation");
  listContent.classList.add("animation");
}

function reverseMyProjectsAnimation() {
  const titleContainer = document.querySelector(".titleContainer");
  const listContent = document.querySelector(".listContent");
  const previewContainer = document.querySelector(".previewContainer");
  const myProjects = document.getElementById("myProjects");

  titleContainer.classList.remove("animation");
  listContent.classList.remove("animation");

  setTimeout(() => {
    myProjects.classList.toggle("displayBlock");
  }, 750);
}

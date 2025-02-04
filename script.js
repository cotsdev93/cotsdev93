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
  if (moreAboutMe.classList.contains("displayBlock")) {
    console.log("funca");
    reverseMoreAboutMeAnimation();
    mainAnimation();
    setTimeout(() => {
      main.classList.remove("displayNone");
    }, 700);
  }
});

///////////////////////////////////////////////////////////// Dark mode

const moon = document.querySelector(".fa-moon");
const sun = document.querySelector(".fa-sun");
const body = document.querySelector("body");
const language = document.querySelector(".language");
const welcomeText = document.querySelectorAll(".welcomeText");

moon.addEventListener("click", (event) => {
  event.preventDefault();
  moon.style.transform = "translateY(-20px)";
  sun.style.transform = "translateY(-20px)";
  body.classList.add("moon");
  sun.style.opacity = "1";
  logo.classList.add("moon");
  language.classList.add("moon");

  welcomeText.forEach((element) => {
    element.classList.add("moon");
  });
});

sun.addEventListener("click", (event) => {
  event.preventDefault();
  moon.style.transform = "translateY(0px)";
  sun.style.transform = "translateY(0px)";
  body.classList.remove("moon");
  logo.classList.remove("moon");
  language.classList.remove("moon");

  welcomeText.forEach((element) => {
    element.classList.remove("moon");
  });
});


///////////////////////////////////////////////////////////// main

function mainAnimation() {
  const elementsWithDelays = [
    { selector: ".logo", delay: 0 },
    { selector: ".fa-bars", delay: 300 },
    { selector: ".language", delay: 700 },
    { selector: ".theme", delay: 1000 },
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
    { selector: ".theme", delay: 300 },
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
    previewContainer.style.opacity = "1";
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
  const myProjects = document.getElementById("myProjects");

  titleContainer.classList.remove("animation");
  listContent.classList.remove("animation");

  setTimeout(() => {
    myProjects.classList.toggle("displayBlock");
  }, 750);
}

const previewContainer = document.querySelector(".previewContainer");
const myProjects = document.querySelector("#myProjects");
const ganadera = document.querySelector(".ganadera");
const das = document.querySelector(".das");
const dres = document.querySelector(".dres");

function showPreview(className) {
  previewContainer.classList.add(className);
  setTimeout(() => {
    previewContainer.style.opacity = "1"; 
  }, 50); 
}

function hidePreview(className) {
  previewContainer.style.opacity = "0"; 
  setTimeout(() => {
    previewContainer.classList.remove(className); 
  }, 50);
}

ganadera.addEventListener("mouseenter", () => showPreview("ganadera"));
ganadera.addEventListener("mouseleave", () => hidePreview("ganadera"));

das.addEventListener("mouseenter", () => showPreview("das"));
das.addEventListener("mouseleave", () => hidePreview("das"));

dres.addEventListener("mouseenter", () => showPreview("dres"));
dres.addEventListener("mouseleave", () => hidePreview("dres"));

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    if (
      previewContainer.classList.contains("ganadera") ||
      previewContainer.classList.contains("das") ||
      previewContainer.classList.contains("dres")
    ) {
      previewContainer.style.opacity = "1";
    }
  }
});

/////////////////////////////////////////////// more about me

const moreAboutMeInfo = document.querySelector(".moreAboutMe");
const moreAboutMe = document.getElementById("moreAboutMe");

moreAboutMeInfo.addEventListener("click", () => {
  reverseAnimation();

  setTimeout(() => {
    main.classList.add("displayNone");
    moreAboutMe.classList.add("displayBlock");
  }, 1000);

  setTimeout(() => {
    moreAboutMeAnimation();
  }, 1100);
});

function moreAboutMeAnimation() {
  const mamAbout = document.querySelector(".mamAbout");
  const mamCarrousel = document.querySelector(".mamCarrousel");

  mamAbout.classList.add("animation");
  setTimeout(() => {
    mamCarrousel.classList.add("animation");
  }, 100);
}

function reverseMoreAboutMeAnimation() {
  const mamAbout = document.querySelector(".mamAbout");
  const mamCarrousel = document.querySelector(".mamCarrousel");

  mamAbout.classList.remove("animation");
  setTimeout(() => {
    mamCarrousel.classList.remove("animation");
  }, 100);
  setTimeout(() => {
    moreAboutMe.classList.toggle("displayBlock");
  }, 750);
}

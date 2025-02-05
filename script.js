///////////////////////////////////////////////////////////// NAV

const logo = document.querySelector(".logo");

logo.addEventListener("click", (event) => {
  event.preventDefault();

  if (myProjects.classList.contains("displayBlock")) {
    reverseMyProjectsAnimation();
    mainAnimation();
    setTimeout(() => {
      main.classList.remove("displayNone");
    }, 1800);
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
const pText = document.querySelectorAll(".pText");
const arrow = document.querySelectorAll(".fa-arrow-right");
const mamText = document.querySelectorAll(".mamText");
const titleContainer = document.querySelector(".titleContainer");
const mpLinks = document.querySelectorAll(".mpLinks");
const workTitle = document.querySelector(".workTitle");

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

  pText.forEach((element) => {
    element.classList.add("moon");
  });
  arrow.forEach((element) => {
    element.classList.add("moon");
  });
  mamText.forEach((element) => {
    element.classList.add("moon");
  });
  titleContainer.classList.add("moon");
  mpLinks.forEach((element) => {
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
  sun.style.opacity = "0";
  welcomeText.forEach((element) => {
    element.classList.remove("moon");
  });

  pText.forEach((element) => {
    element.classList.remove("moon");
  });

  arrow.forEach((element) => {
    element.classList.remove("moon");
  });

  mamText.forEach((element) => {
    element.classList.remove("moon");
  });

  mpLinks.forEach((element) => {
    element.classList.remove("moon");
  });
  titleContainer.classList.remove("moon");
});

///////////////////////////////////////////////////////////// main

function mainAnimation() {
  const elementsWithDelays = [
    { selector: ".logo", delay: 0 },
    { selector: ".fa-bars", delay: 300 },
    { selector: ".language", delay: 700 },
    { selector: ".theme", delay: 1000 },
    { selector: ".moreInfo", delay: 1850 },
    { selector: ".presentation", delay: 2000 },
    { selector: ".pTwo", delay: 2200 },
    { selector: ".pOne", delay: 2400 },
    { selector: ".wTwo", delay: 2600 },
    { selector: ".wOne", delay: 2800 },
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
    { selector: ".wOne", delay: 0 },
    { selector: ".wTwo", delay: 100 },
    { selector: ".pOne", delay: 600 },
    { selector: ".pTwo", delay: 700 },
    { selector: ".moreInfo", delay: 500 },
    { selector: ".presentation", delay: 400 },
    { selector: ".pTwo", delay: 300 },
    { selector: ".pOne", delay: 200 },
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
  const mpLinksGanadera = document.querySelector(".mpLinksGanadera");
  const mpLinksDas = document.querySelector(".mpLinksDas");
  const mpLinksDres = document.querySelector(".mpLinksDres");

  setTimeout(() => {
    titleContainer.classList.add("animation");
  }, 800);
  setTimeout(() => {
    mpLinksGanadera.classList.add("animation");
  }, 600);
  setTimeout(() => {
    mpLinksDas.classList.add("animation");
  }, 400);
  setTimeout(() => {
    mpLinksDres.classList.add("animation");
  }, 200);
}

function reverseMyProjectsAnimation() {
  const titleContainer = document.querySelector(".titleContainer");
  const myProjects = document.getElementById("myProjects");
  const mpLinksGanadera = document.querySelector(".mpLinksGanadera");
  const mpLinksDas = document.querySelector(".mpLinksDas");
  const mpLinksDres = document.querySelector(".mpLinksDres");

  setTimeout(() => {
    titleContainer.classList.remove("animation");
  }, 200);
  setTimeout(() => {
    mpLinksGanadera.classList.remove("animation");
  }, 400);
  setTimeout(() => {
    mpLinksDas.classList.remove("animation");
  }, 600);
  setTimeout(() => {
    mpLinksDres.classList.remove("animation");
  }, 800);

  setTimeout(() => {
    myProjects.classList.toggle("displayBlock");
  }, 950);
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

// ganadera.addEventListener("mouseenter", () => showPreview("ganadera"));
// ganadera.addEventListener("mouseleave", () => hidePreview("ganadera"));

// das.addEventListener("mouseenter", () => showPreview("das"));
// das.addEventListener("mouseleave", () => hidePreview("das"));

// dres.addEventListener("mouseenter", () => showPreview("dres"));
// dres.addEventListener("mouseleave", () => hidePreview("dres"));

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
  const textAbout = document.querySelector(".textAbout");
  const titleAbout = document.querySelector(".titleAbout");
  mamAbout.classList.add("animation");

  setTimeout(() => {
    titleAbout.classList.add("animation");
  }, 800);
  setTimeout(() => {
    textAbout.classList.add("animation");
  }, 600);
  setTimeout(() => {
    mamCarrousel.classList.add("animation");
  }, 400);
}

function reverseMoreAboutMeAnimation() {
  const mamAbout = document.querySelector(".mamAbout");
  const mamCarrousel = document.querySelector(".mamCarrousel");
  const textAbout = document.querySelector(".textAbout");
  const titleAbout = document.querySelector(".titleAbout");
  setTimeout(() => {
    titleAbout.classList.remove("animation");
  }, 200);
  setTimeout(() => {
    textAbout.classList.remove("animation");
  }, 400);
  setTimeout(() => {
    mamCarrousel.classList.remove("animation");
  }, 600);
}

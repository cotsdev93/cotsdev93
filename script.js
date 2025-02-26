///////////////////////////////////////////////////////////// NAV
const logo = document.querySelector(".logo");

logo.addEventListener("click", (event) => {
  event.preventDefault();

  if (myProjects.classList.contains("displayBlock")) {
    reverseMyProjectsAnimation();
    setTimeout(() => {
      mainAnimation();
    }, 1100);
    setTimeout(() => {
      main.classList.remove("displayNone");
    }, 1800);
  }
  if (moreAboutMe.classList.contains("displayBlock")) {
    reverseMoreAboutMeAnimation(currentId);
    setTimeout(() => {
      mainAnimation();
    }, 500);
    setTimeout(() => {
      main.classList.remove("displayNone");
    }, 1100);
  }
  if (menuMain.classList.contains("displayBlock")) {
    reverseMenuAnimation();
    setTimeout(() => {
      menuMain.classList.remove("displayBlock");
    }, 1100);
    setTimeout(() => {
      mainAnimation();
    }, 1101);
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
const titleAbout = document.querySelector(".titleAbout");
const textAbout = document.querySelector(".textAbout");
const optionMenu = document.querySelectorAll(".optionMenu");

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

  titleAbout.classList.add("moon");
  textAbout.classList.add("moonText");

  menu.classList.add("moon");

  optionMenu.forEach((element) => {
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

  titleAbout.classList.remove("moon");
  textAbout.classList.remove("moonText");

  menu.classList.remove("moon");
  work.classList.add("moon");

  optionMenu.forEach((element) => {
    element.classList.remove("moon");
  });
});

///////////////////////////////////////////////////////////// menu

const menu = document.querySelector(".fa-bars");
const menuMain = document.getElementById("menu");
const home = document.querySelector(".home");
const work = document.querySelector(".work");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
const network = document.querySelectorAll(".network");

menu.addEventListener("click", (event) => {
  if (menuMain.classList.contains("displayBlock")) {
    event.preventDefault();
    console.log("funca");
    reverseMenuAnimation();
    setTimeout(() => {
      menuMain.classList.remove("displayBlock");
      setTimeout(() => {
        console.log("va");
        mainAnimation();
      }, 100);
    }, 900);
  } else if (moreAboutMe.classList.contains("displayBlock")) {
    event.preventDefault();
    console.log("funca");
    reverseMoreAboutMeAnimation();
    setTimeout(() => {
      menuMain.classList.remove("displayBlock");
      setTimeout(() => {
        console.log("va");
        menuAnimation();
      }, 100);
    }, 900);
  } else if (myProjects.classList.contains("displayBlock")) {
    event.preventDefault();
    console.log("funca");
    reverseMyProjectsAnimation();
    setTimeout(() => {
      menuMain.classList.remove("displayBlock");
      setTimeout(() => {
        console.log("va");
        menuAnimation();
      }, 100);
    }, 900);
  } else {
    event.preventDefault();
    reverseAnimation();
    setTimeout(() => {
      menuAnimation();
    }, 500);
  }
});

function menuAnimation() {
  setTimeout(() => {
    main.classList.add("displayNone");
  }, 300);
  setTimeout(() => {
    menuMain.classList.add("displayBlock");
    // setTimeout(() => {
    //   menuAnimation();
    // }, 100);
  }, 400);
  setTimeout(() => {
    home.classList.add("animation");
  }, 500);
  setTimeout(() => {
    work.classList.add("animation");
  }, 600);
  setTimeout(() => {
    about.classList.add("animation");
  }, 700);
  setTimeout(() => {
    contact.classList.add("animation");
  }, 800);
  network.forEach((network) => {
    setTimeout(() => {
      network.classList.add("animation");
    }, 900);
  });
}

function reverseMenuAnimation() {
  network.forEach((network) => {
    setTimeout(() => {
      network.classList.remove("animation");
    }, 200);
  });
  setTimeout(() => {
    contact.classList.remove("animation");
  }, 300);
  setTimeout(() => {
    about.classList.remove("animation");
  }, 400);
  setTimeout(() => {
    work.classList.remove("animation");
  }, 500);
  setTimeout(() => {
    home.classList.remove("animation");
  }, 600);
}

///////////////////////////////////////////////////////////// main

function mainAnimation() {
  main.classList.remove("displayNone");

  const elementsWithDelays = [
    { selector: ".logo", delay: 0 },
    { selector: ".fa-bars", delay: 300 },
    { selector: ".language", delay: 400 },
    { selector: ".theme", delay: 600 },
    { selector: ".moreInfo", delay: 800 },
    { selector: ".presentation", delay: 950 },
    { selector: ".pTwo", delay: 1000 },
    { selector: ".pOne", delay: 1150 },
    { selector: ".wTwo", delay: 1300 },
    { selector: ".wOne", delay: 1400 },
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
    // previewContainer.style.opacity = "1";
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
  const previewContainer = document.querySelector(".previewContainer");

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
  }, 500);
  setTimeout(() => {
    mpLinksDres.classList.remove("animation");
  }, 600);

  setTimeout(() => {
    myProjects.classList.toggle("displayBlock");
  }, 1200);
}

const previewContainer = document.querySelector(".previewContainer");
const links = document.querySelectorAll(".mpLinks");

const images = {
  mpLinksGanadera: "./assets/ganaderaArenales.jpg",
  mpLinksDas: "./assets/dasService.jpg",
  mpLinksDres: "./assets/dresOrlandi.jpg",
};

// Agregar eventos a cada link
links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    const className = link.classList[1]; // Segunda clase del enlace
    previewContainer.style.backgroundImage = `url(${images[className]})`;
    previewContainer.style.backgroundSize = "cover";
    previewContainer.style.backgroundPosition = "center";
    previewContainer.style.backgroundRepeat = "no-repeat";
    previewContainer.style.opacity = "1";
  });

  link.addEventListener("mouseleave", () => {
    previewContainer.style.opacity = "0"; // Se oculta cuando el mouse sale
  });
});

/////////////////////////////////////////////// more about me

const moreAboutMeInfo = document.querySelector(".moreAboutMe");
const moreAboutMe = document.getElementById("moreAboutMe");

let currentId = 1; // Variable que mantiene el id actual

moreAboutMeInfo.addEventListener("click", () => {
  reverseAnimation();

  setTimeout(() => {
    main.classList.add("displayNone");
    moreAboutMe.classList.add("displayBlock");
  }, 1000);

  setTimeout(() => {
    moreAboutMeAnimation(currentId); // Pasa el currentId
  }, 1100);
});

function moreAboutMeAnimation(currentId) {
  const mamAbout = document.querySelector(".mamAbout");
  const mamCarrousel = document.querySelector(".mamCarrousel");
  mamTextAnimation(currentId);

  mamAbout.classList.add("animation");

  setTimeout(() => {
    mamCarrousel.classList.add("animation");
  }, 400);
}

function reverseMoreAboutMeAnimation(currentId) {
  const mamAbout = document.querySelector(".mamAbout");
  const mamCarrousel = document.querySelector(".mamCarrousel");
  reverseMamTextAnimation(currentId);
  setTimeout(() => {
    mamCarrousel.classList.remove("animation");
  }, 600);
  setTimeout(() => {
    moreAboutMe.classList.remove("displayBlock");
  }, 1200);
}

function mamTextAnimation(id) {
  const textAbout = document.querySelectorAll(`.textAbout[data-id="${id}"]`);
  const titleAbout = document.querySelectorAll(`.titleAbout[data-id="${id}"]`);

  setTimeout(() => {
    titleAbout.forEach((element) => {
      element.classList.add("animation");
    });
  }, 800);

  setTimeout(() => {
    textAbout.forEach((element) => {
      element.classList.add("animation");
    });
  }, 600);
}

function reverseMamTextAnimation(id) {
  const textAbout = document.querySelectorAll(`.textAbout[data-id="${id}"]`);
  const titleAbout = document.querySelectorAll(`.titleAbout[data-id="${id}"]`);

  setTimeout(() => {
    titleAbout.forEach((element) => {
      element.classList.remove("animation");
    });
  }, 200);

  setTimeout(() => {
    textAbout.forEach((element) => {
      element.classList.remove("animation");
    });
  }, 400);
}

class AboutMe {
  constructor() {
    this.aboutMe = [];
    this.cargarRegistros();
  }

  async cargarRegistros() {
    try {
      // Manejo de errores para evitar fallos en la carga de datos
      const resultado = await fetch("./data/aboutMe.json");
      this.aboutMe = await resultado.json();
      this.mostrarAboutMe(this.aboutMe);
    } catch (error) {
      console.error("Error cargando los registros:", error);
    }
  }

  mostrarAboutMe(data) {
    const mamAbout = document.querySelector(".mamAbout");
    mamAbout.innerHTML = "";
    data.forEach((about) => {
      mamAbout.innerHTML += `
        <div class="aboutContainer">
          <p class="titleAbout" data-id="${about.id}">${about.title}</p>
          <p class="textAbout" data-id="${about.id}">
            ${about.description}
          </p>
        </div>
      `;
    });
  }
}

const aboutMe = new AboutMe();

class MamPhotos {
  constructor() {
    this.photos = [];
    this.cargarRegistros();
  }

  async cargarRegistros() {
    const resultado = await fetch("./data/mamPhotos.json");
    this.photos = await resultado.json();
    this.cargarFotos(this.photos);
    console.log(this.photos);
  }

  cargarFotos(fotos) {
    const carrouselContent = document.querySelector(".carrouselContent");
    carrouselContent.innerHTML = "";
    fotos.forEach((foto) => {
      carrouselContent.innerHTML += `
      <div class="mamImgContainer">
        <img src="${foto.img}"  alt="${foto.alt}">
      </div>
      `;
    });
  }
}

const mamPhotos = new MamPhotos();

const carrousel = document.querySelector(".carrouselContent");
const leftButton = document.querySelector(".leftmam");
const rightButton = document.querySelector(".rightmam");

const mamImgContainer = document.querySelector(".mamImgContainer");
const imgWidth = mamImgContainer
  ? mamImgContainer.querySelector("img").offsetWidth
  : 300; // Ajusta el valor según el tamaño de las imágenes

leftButton.style.opacity = "0";
leftButton.style.pointerEvents = "none";

const updateButtons = () => {
  if (carrousel.scrollLeft <= 0) {
    leftButton.style.opacity = "0";
    leftButton.style.pointerEvents = "none";
  } else {
    leftButton.style.opacity = "0.5";
    leftButton.style.pointerEvents = "auto";
  }

  if (carrousel.scrollLeft + carrousel.clientWidth >= carrousel.scrollWidth) {
    rightButton.style.opacity = "0";
    rightButton.style.pointerEvents = "none";
  } else {
    rightButton.style.opacity = "0.5";
    rightButton.style.pointerEvents = "auto";
  }
};

leftButton.addEventListener("click", () => {
  carrousel.scrollBy({ left: -imgWidth, behavior: "smooth" });
  if (currentId > 1) {
    currentId--;
    console.log(currentId);
  }
});

rightButton.addEventListener("click", () => {
  carrousel.scrollBy({ left: imgWidth, behavior: "smooth" });
  if (currentId < aboutMe.aboutMe.length) {
    currentId++;
    console.log(currentId);
  }
});

carrousel.addEventListener("scroll", updateButtons);

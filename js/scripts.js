"use strict";

/****************Display Video***************/
function manageAutoplay() {
  const videoLocation = document.getElementById("myVideo");
  const container = document.querySelector(".video-container");

  if (window.innerWidth > 1024) {
    videoLocation.removeAttribute("preload");
    videoLocation.setAttribute("autoplay", "");
    container.style.display = "block";
  } else {
    videoLocation.setAttribute("preload", "none");
    videoLocation.removeAttribute("autoplay");
    container.style.display = "none";
  }
}

/*************Modal Window***********/
function handleModalWindow() {
  const projectsSection = document.querySelector(".project-screenshots");

  if (projectsSection) {
    projectsSection.addEventListener("click", (e) => {
      if (e.target.localName === "button") {
        const modalId = e.target.dataset.modalid;
        displayProject(modalId);
      }
    });
  }
}

function displayProject(modalId) {
  let slideIndex = 0;

  const projectOverlay = document.querySelector(".project-overlay");
  const modal = document.getElementById(modalId);
  const close = modal.querySelector(".modal-close");
  const next = modal.querySelector(".next");
  const prev = modal.querySelector(".prev");
  const allSlides = modal.getElementsByClassName("mySlides");

  const showSlide = (index) => {
    if (index >= allSlides.length) {
      slideIndex = 0;
    } else if (index <= -1) {
      slideIndex = allSlides.length - 1;
    } else {
      slideIndex = index;
    }

    for (let i = 0; i < allSlides.length; i++) {
      if (slideIndex === i) {
        allSlides[i].style.display = "block";
      } else {
        allSlides[i].style.display = "none";
      }
    }
  };

  projectOverlay.classList.remove("hidden");
  modal.classList.remove("hidden");

  next.addEventListener("click", () => {
    showSlide(slideIndex + 1);
  });
  prev.addEventListener("click", () => {
    showSlide(slideIndex - 1);
  });

  close.addEventListener("click", () => {
    projectOverlay.classList.add("hidden");
    modal.classList.add("hidden");

    next.removeEventListener("click", () => {
      showSlide(slideIndex + 1);
    });
    prev.removeEventListener("click", () => {
      showSlide(slideIndex - 1);
    });

    slideIndex = 0;
  });

  showSlide(slideIndex);
}

/*********************Init*******************/
manageAutoplay();
handleModalWindow();

/************Global event listeners**********/
window.addEventListener("resize", manageAutoplay);

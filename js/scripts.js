let slideIndex = 1;

/****************Display Video***************/
window.onload = manageAutoplay();

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

window.addEventListener("resize", manageAutoplay);

/***********Display Modal Windown**********/
const projectsSection = document.querySelector(".project-screenshots");

projectsSection.addEventListener("click", (e) => {
  if (e.target.localName === "button") {
    const modalId = e.target.dataset.modalid;
    displayProject(modalId);
  }
});

function displayProject(modalId) {
  const projectOverlay = document.querySelector(".project-overlay");
  const modal = document.getElementById(modalId);
  const close = modal.querySelector(".modal-close");
  const next = modal.querySelector(".next");
  const prev = modal.querySelector(".prev");

  next.addEventListener("click", () => {
    showSlides((slideIndex += 1));
  });
  prev.addEventListener("click", () => {
    showSlides((slideIndex -= 1));
  });

  projectOverlay.classList.remove("hidden");
  modal.classList.remove("hidden");

  close.addEventListener("click", () => {
    projectOverlay.classList.add("hidden");
    modal.classList.add("hidden");
    next.removeEventListener("click", () => {
      showSlides((slideIndex += 1));
    });
    prev.removeEventListener("click", () => {
      showSlides((slideIndex -= 1));
    });
  });

  showSlides(slideIndex);
}

function showSlides(n) {
  const modals = document.querySelectorAll(".modal");
  let activeModal;

  modals.forEach((item) => {
    if (!item.classList.contains("hidden")) {
      activeModal = item;
    }
  });

  if (activeModal) {
    var i;
    var slides = activeModal.getElementsByClassName("mySlides");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
}

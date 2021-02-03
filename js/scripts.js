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
}

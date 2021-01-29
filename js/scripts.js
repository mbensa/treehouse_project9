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

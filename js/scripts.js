window.onload = addAutoplay();

function addAutoplay() {
  let videoLocation = document.getElementById("myVideo");
  let container = document.querySelector(".video-container");
  if (window.innerWidth > 1024) {
    videoLocation.removeAttribute("preload");
    videoLocation.setAttribute("autoplay", "");
    container.style.display = "block";
  }
}

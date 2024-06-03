const bgImageEl = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  // calculating the scroll page
  bgImageEl.style.opacity = 1 - window.pageYOffset / 800;

  bgImageEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";

  //   console.log(window.pageYOffset, 1 - window.pageYOffset / 800);
}

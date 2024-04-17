const prevEl = document.getElementById("prev");

const nextEl = document.getElementById("next");

const slider_img = document.querySelector(".slider-img");

const images = ["a.JPG", "b.JPG", "c.JPG"];
let i = 0;

prevEl.addEventListener("click", () => {
  if (i <= 0) {
    i = images.length;
  }
  i--;
  return setImg();
});

nextEl.addEventListener("click", () => {
  // 0 3-1=2
  if (i >= images.length - 1) {
    i = -1;
  }
  i++;
  return setImg();
});

function setImg() {
  return slider_img.setAttribute("src", "Assets/" + images[i]);
}






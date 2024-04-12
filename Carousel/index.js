const carouselArr = [
  {
    name: "image-01",
    img: "https://imgs.search.brave.com/YX_KBvk0lK0lcLsVHxSZE8rCsyIAPQeTHhBR-kOegTY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U4LzY4/LzNmL2U4NjgzZjQ3/ZDhiY2Q4Yjg2N2I5/ZGY5NGZhZWMzOTU2/LmpwZw",
  },
  {
    name: "image-02",
    img: "https://imgs.search.brave.com/RwkIDcQa6kUNCTg113RIM2yoyO5iiytbgtGCsgstPpM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/ZWF1dGlmdWwtcGll/Y2UtbmF0dXJlLWRh/eWxpZ2h0XzIzLTIx/NDg5OTI0NjYuanBn/P3NpemU9NjI2JmV4/dD1qcGc",
  },
  {
    name: "image-03",
    img: "https://imgs.search.brave.com/l-ApeEqbm1G8nMK5_naOvBsImlojpZDLFSwJ8yPuUyc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdkLzk4/L2M4LzdkOThjODY2/OWVlNDE4ZDQ2MmFi/ZjhhYTJjMGNkZGI3/LmpwZw",
  },
];

console.log(carouselArr.img);

const prevEl = document.getElementById("prev");
const containerEl = document.getElementById("container");
const nextEl = document.getElementById("next");

window.addEventListener("load", () => {
  for (let i = 0; i < carouselArr.length; i++) {
    let box = document.createElement("div");
    containerEl.appendChild(box);
  }
  containerEl.childNodes.forEach((el) => {
    el.innerHTML = `<img src=${carouselArr[0].img} alt="">`;
  });
});

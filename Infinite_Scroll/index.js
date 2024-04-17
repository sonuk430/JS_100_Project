const imgContainerEl = document.getElementById("imgContainer");

getData(2);
function getData(num) {
  for (let i = 0; i <= num; i++) {
    const link = "https://source.unsplash.com/random";
    fetch(link)
      .then((res) => {
        return res;
      })
      .then((data) => {
        let imgage = data.url;

        // console.log(imgage);
        let img = document.createElement("img");
        img.setAttribute("src", "");

        imgContainerEl.appendChild(img);

        img.src = imgage;
      });
  }
}


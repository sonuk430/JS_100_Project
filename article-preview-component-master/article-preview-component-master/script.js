(function () {
  let userContentEl = document.querySelector(".userContent");
  let shearIconEl = document.getElementById("shearIconEl");

  let firstClick = false;
  shearIconEl.addEventListener("click", () => {
    const socileIconsDiv = document.querySelector(".socileIconsDiv");

    if (firstClick == false) {
      firstClick = true;
    //   console.log("true He bhai");
      const div = document.createElement("div");

      div.setAttribute("class", "socileIconsDiv");

      userContentEl.appendChild(div);

      div.innerHTML = `
        <p>Share</p>
        <img src="./images/icon-facebook.svg" alt="facebook">
        <img src="./images/icon-pinterest.svg" alt="pinterest">
        <img src="./images/icon-twitter.svg" alt="twitter">
      
      `;
    } else {
      firstClick == true;
    //   console.log("false He bhai");
      socileIconsDiv.remove();
      firstClick = false;
    }

   
  });
})();

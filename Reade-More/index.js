const pera2El = document.getElementById("pera2");

const readMoreEl = document.getElementById("read-more");

let togal = false;

readMoreEl.addEventListener("click", (event) => {
  event.stopPropagation();
  if (togal == false) {
    togal = true;
    pera2El.style.display = "block";
    readMoreEl.textContent = "Less...";
  } else {
    pera2El.style.display = "none";
    readMoreEl.textContent = "Read More...";
    togal = false;
  }
  console.log("readMoreEl huaa he");
});

document.addEventListener("click", () => {
  console.log("documen log huaa");
  pera2El.style.display = "none";
  readMoreEl.textContent = "Read More...";
  togal = false;
});

const userTaskEl = document.getElementById("userTask");
const userColorEl = document.getElementById("userColor");
const btnEl = document.getElementById("btn");

const ulListEL = document.getElementById("ulList");

btnEl.addEventListener("click", () => {
  let userTask = userTaskEl.value;

  let userColor = userColorEl.value;
  console.log(userColor, userTask);

  let list = document.createElement("li");
  ulListEL.appendChild(list);
  list.innerText = userTask;
  list.style.backgroundColor = userColor;
  userTaskEl.value = "";
  userColorEl.value = "#248568";
});

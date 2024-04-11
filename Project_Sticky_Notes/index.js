const userTitleEl = document.getElementById("userTitle");
const userClorEl = document.getElementById("userClor");
const userTextAreaEL = document.getElementById("userTextArea");
const btnEl = document.getElementById("btn");

const ulListEl = document.getElementById("ulList");

btnEl.addEventListener("click", () => {
  console.log("done");
  let userTitle = userTitleEl.value;
  let userClor = userClorEl.value;
  let userTextArea = userTextAreaEL.value;

    console.log(userTitle, userClor, userTextArea);
  let list = document.createElement("div");

  list.setAttribute("class", "list");

  ulListEl.appendChild(list);
  //   list.innerText = userTitle;
  //   list.style.backgroundColor = userClor;

  list.innerHTML = `
                <h1>${userTitle}</h1>
                <textarea style="background-color: ${userClor} ;">${userTextArea}</textarea>
                <button>❌</button>

`;
userTitleEl.value = "";
userClorEl.value = "#454785";
userTextAreaEL.value = "";
});

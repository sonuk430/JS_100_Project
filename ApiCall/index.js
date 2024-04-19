const userInputEl = document.getElementById("userInput");

const btnEl = document.getElementById("btn");

const nameEl = document.getElementById("name");

const profileNameEl = document.getElementById("profileName");

const picEl = document.getElementById("pic");

btnEl.addEventListener("click", () => {
  let userName = userInputEl.value;

  let url = `https://api.github.com/users/${userName}`;

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
    //   console.log(data);

      let uName = data.name;
      let uId = data.login;
      let uPic = data.avatar_url;

      nameEl.innerText = uName;
      profileNameEl.textContent = uId;
      picEl.src = uPic;
    });
});

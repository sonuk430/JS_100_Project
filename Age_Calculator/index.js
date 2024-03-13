const birthdayEl = document.getElementById("birthday");

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  birth = birthdayEl.value;

  const cruntDate = new Date();

  console.log(cruntDate);
});

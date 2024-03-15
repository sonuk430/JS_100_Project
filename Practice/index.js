const btnL = document.getElementById("btnL");
const btnR = document.getElementById("btnR");
const count = document.getElementById("count");

let val = parseInt(count.innerText);

btnL.addEventListener("click", () => {
  if (val === 0) {
    val.innerText = 0;
  } else {
    val--;
    count.innerText = val;
    console.log(val);
  }
});

btnR.addEventListener("click", () => {
  if (val < 10) {
    val++;
    count.innerText = val;
    console.log(val);
  }
});

/************************ 1st task end ******************************/
function first() {
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
      // console.log(val);
    }
  });

  btnR.addEventListener("click", () => {
    if (val < 10) {
      val++;
      count.innerText = val;
      // console.log(val);
    }
  });
}

first();
/************************ 1st task end ******************************/

function secound() {
  const ProductList = document.getElementById("ProductList");
  const showHidebtn = document.getElementById("showHidebtn");

  let show = true;

  showHidebtn.addEventListener("click", () => {
    if (show === true) {
      show = false;
      ProductList.style.display = "none";
      showHidebtn.innerText = "Show";
    } else {
      ProductList.style.display = "block";
      showHidebtn.innerText = "Hide";
      show = true;
    }
  });
}

secound();

/************************ 2nd task end ******************************/

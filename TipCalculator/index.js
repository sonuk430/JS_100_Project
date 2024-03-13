const billAmountEl = document.getElementById("billAmount");

const tipAmountEl = document.getElementById("tipAmount");

const claculateBtn = document.getElementById("claculateBtn");

const showAmunt = document.getElementById("showAmunt");

claculateBtn.addEventListener("click", () => {
  let bAmount = parseInt(billAmountEl.value);

  let cAmount = parseInt(tipAmountEl.value);

  if (isNaN(bAmount) || isNaN(cAmount)) {
    alert("Plese Enter your Bill Amount & Tip");
  } else {
    showAmunt.innerText = claculatePercentage(bAmount, cAmount);
    billAmountEl.value = "";
    tipAmountEl.value = "";
  }
});

function claculatePercentage(x, y) {
  let ans = x + (x * y) / 100;
  console.log(ans);
  return ans;
}

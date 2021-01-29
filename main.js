//Start first class input
document.getElementById("firstClassCountIncrease").addEventListener("click", function () {
    handleFirstClassChange(true);
    // if(firstclassInput>0){
    //     document.querySelector("firstClassCountDecrease").removeAttribute("disabled");
    //     document.querySelector("firstClassCountDecrease").classList.remove("disabled");
    // }
  });
document.getElementById("firstClassCountDecrease").addEventListener("click", function () {
    handleFirstClassChange(false);
    // if(firstclassInput==0){
    //     document.querySelector("firstClassCountDecrease").setAttribute("disabled", "disabled");
    // }
  });
function handleFirstClassChange(isIncrease) {
  const firstclassInput = document.getElementById("firstClassInput");
  const firstclassCount = parseInt(firstclassInput.value);
  let firstclassNewCount = firstclassCount;
  if (isIncrease == true) {
    firstclassNewCount = firstclassCount + 1;
  }
  if (isIncrease == false) {
    firstclassNewCount = firstclassCount - 1;
  }
  firstclassInput.value = firstclassNewCount;
  calculateTotal();
}
//End first class input

//Start economy class input
document.getElementById("economyCountIncrease").addEventListener("click", function () {
    handleClassChange(true);
  });
document.getElementById("economyCountDecrease").addEventListener("click", function () {
    handleClassChange(false);
  });
function handleClassChange(isIncrease) {
  const economyclassInput = document.getElementById("economyClassInput");
  const economyclassCount = parseInt(economyclassInput.value);
  let economyClassNewCount = economyclassCount;
  if (isIncrease == true) {
    economyClassNewCount = economyclassCount + 1;
  }
  if (isIncrease == false) {
    economyClassNewCount = economyclassCount - 1;
  }
  economyclassInput.value = economyClassNewCount;
  calculateTotal();
}
//End economy class input

//Start total count 
function calculateTotal() {
  const firstclassInput = document.getElementById("firstClassInput");
  const firstclassCount = parseInt(firstclassInput.value);
  const economyclassInput = document.getElementById("economyClassInput");
  const economyclassCount = parseInt(economyclassInput.value);

  const subtotalPrice = firstclassCount * 150 + economyclassCount * 100;
  document.getElementById("subtotal").innerText = subtotalPrice;
  const vat = Math.round(subtotalPrice * 0.1);
  document.getElementById("vat-amount").innerText = vat;
  const grandTotal = subtotalPrice + vat;
  document.getElementById("total").innerText = grandTotal;
}
//End total count 

//show alert
function showAlert(){
    alert("Are you sure to Booked flight ?");
}
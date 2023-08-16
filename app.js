const button = document.getElementById("btn");
button.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  loginArea.style.backgroundColor = "blue";
  const transaction = document.getElementById("transaction-area");
  transaction.style.display = "block";
});

//deposit

const depositbtn = document.getElementById("deposit-btn");
depositbtn.addEventListener("click", function () {
  const depositAmount = document.getElementById("deposit").value;
  const depositNum = parseFloat(depositAmount);
  UpdateSpanText("current-depo", depositNum);
  UpdateSpanText("current-balance",depositNum);
});

//function 
function UpdateSpanText(id, num) {
  const CurrDepo = document.getElementById(id).innerText;
  const CurDepF = parseFloat(CurrDepo);
  const totalDepo = num + CurDepF;
  document.getElementById(id).innerText = totalDepo;
}

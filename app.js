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
  const CurrDepo = document.getElementById("current-depo").innerText;
  const CurDepF = parseFloat(CurrDepo);
  const totalDepo = depositNum + CurDepF;
  console.log(totalDepo);
  document.getElementById("current-depo").innerText = totalDepo;
});

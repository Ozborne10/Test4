function modalOpen() {
  document.getElementById("Modal-Mask").style.display = "flex";
}

Open.addEventListener("click", modalOpen);

function modalClose() {
  document.getElementById("Modal-Mask").style.display = "none";
}

Close.addEventListener("click", modalClose);

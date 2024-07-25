const modeBtn = document.querySelector(".mode-change");
const body = document.querySelector("body");
const header = document.querySelector("header");
const submitBtn = document.querySelector(".btn");
const heroPage = document.querySelector(".hero-page");
let modeChange = true;
modeBtn.addEventListener("click", () => {
  if (modeChange === true) {
    body.style.backgroundColor = "#DEF9C4";
    header.style.backgroundColor = "#9CDBA6";
    heroPage.style.backgroundColor = "#50B498";
    modeChange = false;
  } else {
    body.style.backgroundColor = "#1a3636";
    header.style.backgroundColor = "#40534c";
    heroPage.style.backgroundColor = "#677d6a";
    modeChange = true;
  }
});

submitBtn.addEventListener("click", () => {
  document.getElementById("name").value = "";
});

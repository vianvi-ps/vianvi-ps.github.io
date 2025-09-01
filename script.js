const changecolor = document.getElementById("changecolor2");
const title = document.getElementById("changecolor");

changecolor.addEventListener("click", function () {
  title.style.color = "Slategrey";
});

const fakename = document.getElementById("fakename");
const greetBtn = document.getElementById("greet-btn");
const greeting = document.getElementById("greeting");

greetBtn.addEventListener("click", function () {
  const name = fakename.value;
  greeting.innerHTML = "Hello " + name + ".";
});

btnHTML = document.getElementById("HTML");
btnCSS = document.getElementById("CSS");
btnJavaScript = document.getElementById("JavaScript");

btnHTML.addEventListener("click", function () {
  const aboutHTML = document.getElementById("start-HTML");
  aboutHTML.scrollIntoView({ behavior: "smooth" });
});

btnCSS.addEventListener("click", function () {
  const aboutCSS = document.getElementById("start-CSS");
  aboutCSS.scrollIntoView({ behavior: "smooth" });
});

btnJavaScript.addEventListener("click", function () {
  const aboutJavaScript = document.getElementById("start-JavaScript");
  aboutJavaScript.scrollIntoView({ behavior: "smooth" });
});

btnBacktoCSS = document.getElementById("Back-to-CSS");

btnBacktoCSS.addEventListener("click", function () {
  const aboutCSS = document.getElementById("start-CSS");
  aboutCSS.scrollIntoView({ behavior: "smooth" });
});

const lbtop1 = document.querySelectorAll(".top-1");

lbtop1.forEach((link) => {
  link.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
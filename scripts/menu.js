const menuBtn = document.querySelector(".menu-button");
const ul = document.querySelector("ul");
const menuLine = document.querySelectorAll(".menu-line");

menuBtn.onclick = (e) => {
  menuLine.forEach((element) => {
    element.classList.toggle("clicked");
  });
  ul.classList.toggle("show")
};

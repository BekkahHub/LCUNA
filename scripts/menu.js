// header scroll
const scrollTop = document.querySelector("nav");
window.onscroll = () => {
  var top = window.scrollY;
  console.log(top);
  if (top >= 100) {
    scrollTop.classList.add("scroll");
  } else {
    scrollTop.classList.remove("scroll");
  }
};

// search-box open close js code
let navbar = document.querySelector(".navbar");

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
};

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
  navLinks.classList.toggle("show1");
};

let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function () {
  navLinks.classList.toggle("show3");
};
let aboutArrow = document.querySelector(".about-arrow");
aboutArrow.onclick = function () {
  navLinks.classList.toggle("show4");
};

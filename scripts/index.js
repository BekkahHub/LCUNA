
const navBar = document.querySelector('.nav-bar')
const menu = document.querySelectorAll('.menu')
const content = document.querySelectorAll('.content')



menu.forEach((menu)=>{
    menu.onmouseover=(e)=>{
        e.preventDefault()
        e.target.firstElementChild.style.transform='scale(1)'
    }
    menu.onmouseleave=(e)=>{
        e.preventDefault()
        e.target.firstElementChild.style.transform='scale(0)'
    }
 });
 

 
// slideshow
 
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
};
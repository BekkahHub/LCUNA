
const content = document.querySelectorAll('.content')

 

 
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
    // dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  // dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 7000); // Change image every 2 seconds
};


// text slides 
let slideIndexTwo = 1;
showSlideTwo(slideIndexTwo);

function plusSlides(n) {
  showSlideTwo(slideIndexTwo += n);
}

function currentSlide(n) {
  showSlideTwo(slideIndexTwo = n);
}

function showSlideTwo(n) {
  let i;
  let slideTwo = document.getElementsByClassName("mySlidesTwo");
  let DotTwos = document.getElementsByClassName("dot");
  if (n > slideTwo.length) {slideIndexTwo = 1}    
  if (n < 1) {slideIndexTwo = slideTwo.length}
  for (i = 0; i < slideTwo.length; i++) {
    slideTwo[i].style.display = "none";  
  }
  for (i = 0; i < DotTwos.length; i++) {
    DotTwos[i].className = DotTwos[i].className.replace(" active", "");
  }
  slideTwo[slideIndexTwo-1].style.display = "block";  
  DotTwos[slideIndexTwo-1].className += " active";
}
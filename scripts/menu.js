// const menuBtn= document.querySelector('.menu-button')
// const ul= document.querySelector('ul')
// const menuLine= document.querySelectorAll('.menu-line')
// const a= document.querySelectorAll('.menu')
// const li= document.querySelectorAll('li') 

// menuBtn.onclick= e=>{
//     menuLine.forEach(element =>{
//         element.classList.toggle("clicked")
//     })
//     ul.classList.toggle("show")
// }
 

// a.forEach((element,index) => {
//     const dropdown= document.querySelectorAll('.dropdown')[index]
//     element.onclick=()=>{
        
//         dropdown.classList.toggle('show-dropdown')
//         if (dropdown.classList.contains('show-dropdown')) {
//           li[index].classList.add('show')
//         }
//         else{
//           li[index].classList.remove('show')
//         }
        
       
//     }
// });

// window.onclick = function(event) {
//     if (!event.target.matches('a')) {
//       var dropdowns = document.getElementsByClassName("dropdown");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show-dropdown')) {
//           openDropdown.classList.remove('show-dropdown');
//         }
//       }
//     }
//   }



  // search-box open close js code
  let navbar = document.querySelector(".navbar");
  let searchBox = document.querySelector(".search-box .bx-search");
  // let searchBoxCancel = document.querySelector(".search-box .bx-x");
  
  searchBox.addEventListener("click", ()=>{
    navbar.classList.toggle("showInput");
    if(navbar.classList.contains("showInput")){
      searchBox.classList.replace("bx-search" ,"bx-x");
    }else {
      searchBox.classList.replace("bx-x" ,"bx-search");
    }
  });
  
  // sidebar open close js code
  let navLinks = document.querySelector(".nav-links");
  let menuOpenBtn = document.querySelector(".navbar .bx-menu");
  let menuCloseBtn = document.querySelector(".nav-links .bx-x");
  menuOpenBtn.onclick = function() {
  navLinks.style.left = "0";
  }
  menuCloseBtn.onclick = function() {
  navLinks.style.left = "-100%";
  }
  
  
  // sidebar submenu open close js code
  let htmlcssArrow = document.querySelector(".htmlcss-arrow");
  htmlcssArrow.onclick = function() {
   navLinks.classList.toggle("show1");
  }
  let moreArrow = document.querySelector(".more-arrow");
  moreArrow.onclick = function() {
   navLinks.classList.toggle("show2");
  }
  let jsArrow = document.querySelector(".js-arrow");
  jsArrow.onclick = function() {
   navLinks.classList.toggle("show3");
  }
  


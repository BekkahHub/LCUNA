
const navBar = document.querySelector('.nav-bar')
const menu = document.querySelectorAll('.menu')
const content = document.querySelectorAll('.content')


// window.onscroll = (e)=>{
//     const scrollTop =document.documentElement.scrollTop
//      if (scrollTop>100) {
//          navBar.classList.add('scrolled')
//          menu.forEach((menu)=>{
//             menu.style.color='black'
//          })
//      } else {
//         navBar.classList.remove('scrolled')
//         menu.forEach((menu)=>{
//             menu.style.color='white'
//          })
//      }
// }
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




 $(function() {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  });
 

 
//  const observer = new IntersectionObserver((entries)=>{
//      entries.forEach((entry)=>{
//         if (entry.isIntersecting==true) {
//             entry.target.classList.add('inview')
//           }
//         else{
//             entry.target.classList.remove('inview')
//         }
//      })
//  })
//  content.forEach((content)=>{
//     observer.observe(content)
//  })
 

const navBar = document.querySelector('.nav-bar')
const menu = document.querySelectorAll('.menu')


window.onscroll = (e)=>{
    const scrollTop =document.documentElement.scrollTop
     if (scrollTop>100) {
         navBar.classList.add('scrolled')
         menu.forEach((menu)=>{
            menu.style.color='black'
         })
     } else {
        navBar.classList.remove('scrolled')
        menu.forEach((menu)=>{
            menu.style.color='white'
         })
     }
}
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

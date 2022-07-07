const menuBtn= document.querySelector('.menu-button')
const ul= document.querySelector('ul')
const menuLine= document.querySelectorAll('.menu-line')
const a= document.querySelectorAll('a') 

menuBtn.onclick= e=>{
    menuLine.forEach(element =>{
        element.classList.toggle("clicked")
    })
    ul.classList.toggle("show")
}
 

a.forEach((element,index) => {
    const dropdown= document.querySelectorAll('.dropdown')[index-1]
    element.onclick=()=>{
        
        dropdown.classList.toggle('show-dropdown')
       
    }
});

window.onclick = function(event) {
    if (!event.target.matches('a')) {
      var dropdowns = document.getElementsByClassName("dropdown");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show-dropdown')) {
          openDropdown.classList.remove('show-dropdown');
        }
      }
    }
  }


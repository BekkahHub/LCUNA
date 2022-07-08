const menuBtn= document.querySelector('.menu-button')
const ul= document.querySelector('ul')
const menuLine= document.querySelectorAll('.menu-line')
const a= document.querySelectorAll('.menu')
const li= document.querySelectorAll('li') 

menuBtn.onclick= e=>{
    menuLine.forEach(element =>{
        element.classList.toggle("clicked")
    })
    ul.classList.toggle("show")
}
 

a.forEach((element,index) => {
    const dropdown= document.querySelectorAll('.dropdown')[index]
    element.onclick=()=>{
        
        dropdown.classList.toggle('show-dropdown')
        if (dropdown.classList.contains('show-dropdown')) {
          li[index].classList.add('show')
        }
        else{
          li[index].classList.remove('show')
        }
        
       
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


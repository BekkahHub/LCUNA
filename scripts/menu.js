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
    const dropdown= document.querySelectorAll('.dropdown')
    element.onclick=(e)=>{
      dropdown.forEach((drop)=>{
        drop.classList.remove('show-dropdown')
      })
      const isOpened = dropdown[index].classList.contains('show-dropdown')
      console.log(isOpened)
      if (isOpened) {
        console.log(isOpened)
        dropdown[index].classList.add('show-dropdown')
      }
      else{
        dropdown[index].classList.remove('show-dropdown')
      }
        
        if (isOpened) {
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


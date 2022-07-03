const accordion= document.querySelectorAll('.accordion') 
const accordionBtn= document.querySelectorAll('.accordion-btn') 

accordion.forEach((element,index) => {
    element.onclick=()=>{
       
        element.classList.toggle('open')
        if (element.clientHeight<70) {
            accordionBtn[index].innerHTML='&minus;'
        }
        else{
            accordionBtn[index].innerHTML='&plus;'
        }
    }
});


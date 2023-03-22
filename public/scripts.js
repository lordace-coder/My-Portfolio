

// Create an observer instance
const observer = new IntersectionObserver((entries )=> {
// Check if the target element is intersecting with the viewport
entries.forEach((entry)=>{
        if(entry.isIntersecting){
            console.log(entry,'seen');
            entry.target.classList.add('show')
        }
        else{
            // entry.target.classList.remove('show')
        }
    });
})



const targetElement = document.querySelectorAll('.observe');

targetElement.forEach((el) => observer.observe(el))

// Start observing the target element



$(document).ready(()=>{
    const nav = document.querySelector('.nav');
    // navigation logic
    $('#navbtn').click(()=>{
        if($('#navbtn').hasClass("fa-bars")){
            $('#navbtn').removeClass("fa-bars");
            $('#navbtn').addClass("fa-times");   
           nav.classList.replace('-right-52','right-0');
        }else{
            $('#navbtn').removeClass("fa-times");
            $('#navbtn').addClass("fa-bars"); 
            nav.classList.replace('right-0','-right-52',)
        }
     
    })
})


// scroll effect
var topNv = document.querySelector('nav')

var tnt =   $('nav').css('position')
$(window).on("scroll",function(){
  var topNv = document.querySelector('nav')
  if($(this).scrollTop() > 520 && $('nav').css('position')== 'fixed') {
  topNv.classList.add("glass");
  }else {
    topNv.classList.remove("glass");
  }
})

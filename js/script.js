let navEl = document.getElementById('nav');
let burgerEl = document.getElementById('burgerbar');
let stickyEl = document.getElementById('sticky');
let numberEl = document.getElementById('number1');

burgerEl.addEventListener('click', function(){
    navEl.classList.toggle('activenav')
    stickyEl.classList.toggle('activesticky')
    numberEl.classList.toggle('activenumber')
}
)


$(function(){
    $('.multiple-items').slick({
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 1,
     arrows: true,
     dots:true,
     responsive: [
         {
           breakpoint: 768,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
     ]
   });    
 });
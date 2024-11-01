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
     // რამდენი სურათი გამოჩნდეს
     slidesToShow: 3,
     // სლაიდის დროს რამდენი ელემნტით გადავიდეს 
     slidesToScroll: 1,
     // რომ გამოჩნდეს ღილაკები
     arrows: true,
     // რომ გამოჩნდეს ბურთულები
     dots:true,
     // responsiv-ის კოდი
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
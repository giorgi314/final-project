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

let allEl =document.getElementById('all');
let saleEl = document.getElementById('sale');
let rentEl = document.getElementById('rent');
let saleBox1 = document.getElementById('sale1');
let saleBox2 = document.getElementById('sale2');
let saleBox3 = document.getElementById('sale3');
let saleBox4 = document.getElementById('sale4');
let rentBox1 = document.getElementById('rent1');
let rentBox2 = document.getElementById('rent2');

saleEl.addEventListener('click', function(){
  rentBox1.classList.toggle('hiderent')
  rentBox2.classList.toggle('hiderent')
  saleBox1.classList.toggle('salewidth')
  saleBox2.classList.toggle('salewidth')
  saleBox3.classList.toggle('salewidth')
  saleBox4.classList.toggle('salewidth')
}
)
rentEl.addEventListener('click', function(){
  saleBox1.classList.toggle('hidesale')
  saleBox2.classList.toggle('hidesale')
  saleBox3.classList.toggle('hidesale')
  saleBox4.classList.toggle('hidesale')
  rentBox1.classList.toggle('salewidth')
  rentBox2.classList.toggle('salewidth')
}
)

let subEl = document.getElementById('sub7');
subEl.addEventListener('click', function() {
  alert('Thank you! Our manager will contact you shortly')
})

let searchEl = document.getElementById('city-search')
searchEl.addEventListener('click', function(){
  alert('sorry, we dont have apartments in this city')
})

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


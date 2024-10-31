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

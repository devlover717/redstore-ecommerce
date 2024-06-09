//preloader 
const preloader = document.querySelector('.preloader')

window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader')
})



// navbar 

const navUl = document.querySelector('#navUl');
const bars = document.querySelector('#bars');


bars.addEventListener('click', () => {
    bars.classList.toggle('fa-xmark')
    navUl.classList.toggle('nav-open')
})

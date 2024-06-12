//preloader 

const preloader = document.querySelector('.preloader')

window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader')
})










// navbar fixed 

const navbar = document.querySelector('.navbar')
const topBtn = document.querySelector('.top-btn')

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset
    const navHeight = navbar.getBoundingClientRect().height

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav')
    } else {
        navbar.classList.remove('fixed-nav')
    }

    if (scrollHeight > 2000 ) {
        topBtn.classList.add('show-top-btn')
    } else {
        topBtn.classList.remove('show-top-btn')
    }
})










// navbar toggle 

const navToggle = document.querySelector('#bars') 
const linksCon = document.querySelector('.links-container')
const links = document.querySelector('.links')

bars.addEventListener('click', () => {
    bars.classList.toggle('fa-xmark')

    const containerHeight = linksCon.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height

    if (containerHeight === 0) {
        linksCon.style.height = `${linksHeight}px`
    } else {
        linksCon.style.height = 0
    }
})






























// date 
const date = document.querySelector('#date')
date.innerHTML = new Date().getFullYear()
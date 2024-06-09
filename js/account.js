// login register 

const indicator = document.querySelector('#indicator')
const loginForm = document.querySelector('#loginForm')
const regForm = document.querySelector('#regForm')
const login = document.querySelector('#login')
const reg = document.querySelector('#register')



register.addEventListener('click', () => {
    indicator.style.left = '170px'
    loginForm.style.left = '-300px'
    regForm.style.left = '0px'
})

login.addEventListener('click', () => {
    indicator.style.left = '50px';
    loginForm.style.left = '0px'
    regForm.style.left = '300px'
})
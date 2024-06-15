const loginBtn = document.querySelector('#loginBtn')
const regBtn = document.querySelector('#regBtn')
const formHr = document.querySelector('.form-hr')
const loginForm = document.querySelector('.login-form')
const signupForm = document.querySelector('.signup-form')

loginBtn.addEventListener('click', () => {
    formHr.style.left = '10px'
    loginForm.style.left = '200px'
    signupForm.style.left = '300px'
})


regBtn.addEventListener('click', () => {
    formHr.style.left = '100px'
    signupForm.style.left = '0px'
    loginForm.style.left = '-100px'
    
})
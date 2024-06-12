const mainImg = document.querySelector('#main-img')
const smallImg = document.querySelectorAll('.small-img')

smallImg.forEach((img) => {
    img.addEventListener('click', () => {
        mainImg.src = img.src
    })
})
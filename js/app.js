//preloader 

const preloader = document.querySelector('.preloader')

window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader')
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





















// reviews 

const reviews = [
    {
        id: 1,
        name: 'Sean Parker', 
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, atque assumenda quia cupiditate culpa totam fuga voluptatem', 
        img: 'images/user-1.png',
        rating: `<i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>`
    },
    {
        id: 2,
        name: 'Mike Smith', 
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, atque assumenda quia cupiditate culpa totam fuga voluptatem', 
        img: 'images/user-2.png',
        rating: `<i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>`
    }, 
    {
        id: 3,
        name: 'Mabel Joe', 
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, atque assumenda quia cupiditate culpa totam fuga voluptatem', 
        img: 'images/user-3.png', 
        rating: `<i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>`
    }
]


const revUserName = document.querySelector('#name');  
const desc = document.querySelector('#desc')
const img = document.querySelector('#img')
const reviewsRating = document.querySelector('#reviewsRating')

const leftBtn = document.querySelector('#leftRev'); 
const rightBtn = document.querySelector('#rightRev')


window.addEventListener('DOMContentLoaded', () => {
    loadReview(index)
})


let index = 0;



const loadReview = (index) => {
    let item = reviews[index]
    revUserName.innerHTML = item.name
    desc.innerHTML = item.desc
    img.src = item.img
    reviewsRating.innerHTML = item.rating
}



leftBtn.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = reviews.length -1 
    }
    loadReview(index)
})

rightBtn.addEventListener('click', () => {
    index++;
    if (index > reviews.length -1) {
        index = 0
    }
    loadReview(index)
})








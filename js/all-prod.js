const productsArray = [
    {
        id: 1, 
        img : 'images/product-1.jpg', 
        name: 'Red Printed T-shirt', 
        category: 'shirts', 
        link: 'single-product.html'
    },
    {
        id: 2, 
        img : 'images/product-2.jpg', 
        name: 'IRX Shoes', 
        category: 'shoes', 
        link: ''
    },
    {
        id: 3, 
        img : 'images/product-3.jpg', 
        name: 'Black Jeans',
        category : 'pants', 
        link: ''
    },
    {
        id: 4, 
        img : 'images/product-4.jpg', 
        name: 'Blue Puma Shirt', 
        category: 'shirts', 
        link: ''
    },
    {
        id: 5, 
        img : 'images/product-5.jpg', 
        name: 'Gray Nike Shoes', 
        category: 'shoes', 
        link: ''
    },
    {
        id: 6, 
        img : 'images/product-6.jpg', 
        name: 'Puma Black Printed T-shirt', 
        category: 'shirts', 
        link: ''
    },
    {
        id: 7, 
        img : 'images/product-7.jpg', 
        name: 'HRX Socks Pairs', 
        category: 'socks', 
        link: ''
    },
    {
        id: 8, 
        img : 'images/product-8.jpg', 
        name: 'Fossil Watch', 
        category: 'watches', 
        link: ''
    },
    {
        id: 9, 
        img : 'images/product-9.jpg', 
        name: 'Branded Watch', 
        category: 'watches', 
        link: ''
    },
    {
        id: 10, 
        img : 'images/product-10.jpg', 
        name: 'Air Jordans Red', 
        category: 'shoes', 
        link: ''
    },
    {
        id: 11, 
        img : 'images/product-11.jpg', 
        name: 'Gray Nike Shoes', 
        category: 'shoes', 
        link: ''
    },
    {
        id: 12, 
        img : 'images/product-12.jpg', 
        name: 'Black Trouser', 
        category: 'pants', 
        link: ''
    }
]





// selectors
const productContainer = document.querySelector('#productContainer')
const btnContainer = document.querySelector('.filter-btn-con')




window.addEventListener('DOMContentLoaded', () => {
    displayProducts(productsArray)
    addBtns()
}) 




const addBtns = () => {
    const category = productsArray.reduce((acc, item) => {
        if (!acc.includes(item.category)) {
            acc.push(item.category)
        }
        return acc
    }, ['all'])


    const btnCategory = category.map((cat) => {
        return `<button data-id="${cat}" class="filter-btn btn">${cat}</button>`
    }).join('')

    btnContainer.innerHTML = btnCategory

    const filterBtns = document.querySelectorAll('.filter-btn') 

    filterBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            btnDataId = btn.dataset.id
            const fil = productsArray.filter((item) => {
                if (btnDataId === item.category) {
                    return item.category
                }
            })
            if (btnDataId === 'all') {
                displayProducts(productsArray)
            } else {
                displayProducts(fil)
            }
        })
    });
}






const displayProducts = (productsArray) => {
    const display = productsArray.map((item) => {
        return `<a href="${item.link}">
                <div class="col4">
                    <img src="${item.img}" alt="${item.name}">
                    <p class="name">${item.name}</p>
                    <div class="rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <p class="price">$30.00</p>
                </div>
            </a>`
    }).join('')

    productContainer.innerHTML = display
}
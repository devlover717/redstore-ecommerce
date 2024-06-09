

// product sorting 


const products = [
    {
        id: 1,
        title: "Red Printed T-shirt",
        category: "shirts",
        price: 13.99,
        img: "images/product-1.jpg",
        link: "single-product.html"
    },
    {
        id: 2,
        title: "IRX Shoes",
        category: 'shoes',
        price: 12.99,
        img: "images/product-2.jpg",
        link: ""
    },
    {
        id: 3,
        title: "Black Jeans",
        category: 'pants',
        price: 15.99,
        img: "images/product-3.jpg",
        link: ""
    },
    {
        id: 4,
        title: "Blue Puma T-shirt",
        category: 'shirts',
        price: 12.99,
        img: "images/product-4.jpg",
        link: ""
    },
    {
        id: 5,
        title: "Gray Nike Shoes",
        category: 'shoes',
        price: 12.99,
        img: "images/product-5.jpg",
        link: ""
    },
    {
        id: 6,
        title: "Puma Black Printed T-shirt",
        category: 'shirts',
        price: 12.99,
        img: "images/product-6.jpg",
        link: ""
    },
    {
        id: 7,
        title: "HRX Socks Pairs",
        category: 'socks',
        price: 12.99,
        img: "images/product-7.jpg",
        link: ""
    },
    {
        id: 8,
        title: "Fossil Watch",
        category: 'watches',
        price: 12.99,
        img: "images/product-8.jpg",
        link: ""
    },
    {
        id: 9,
        title: "Branded Watch",
        category: 'watches',
        price: 12.99,
        img: "images/product-9.jpg",
        link: ""
    },
    {
        id: 10,
        title: "Air Jordans Red",
        category: 'shoes',
        price: 12.99,
        img: "images/product-10.jpg",
        link: ""
    },
    {
        id: 11,
        title: "Gray Nike Shoes",
        category: 'shoes',
        price: 12.99,
        img: "images/product-11.jpg",
        link: ""
    },
    {
        id: 12,
        title: "Black Trousers",
        category: 'pants',
        price: 12.99,
        img: "images/product-12.jpg",
        link: ""
    }

]



const productRow = document.querySelector('#productRow');
const btnContainer = document.querySelector('.filter-btn-con');



window.addEventListener('DOMContentLoaded', () => {
    displayProductsFn(products)

    addBtns(products)
})



const addBtns = () => {

    const categories = products.reduce((acc, item) => {
        if (!acc.includes(item.category)) {
            acc.push(item.category)
        }
        return acc
    }, ['all'])



    const newBtns = categories.map((cat) => {
        return `<button data-id="${cat}" class="btn filter-btn">${cat}</button>`
    }).join('');



    btnContainer.innerHTML = newBtns

    const btns = document.querySelectorAll('.filter-btn');


    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const btnCategory = e.currentTarget.dataset.id;
            const productCategory = products.filter((item) => {
                if (btnCategory === item.category) {
                    return item;
                }
                if (btnCategory === 'all') {
                    return item
                }
            })
            displayProductsFn(productCategory)
        })
    })

}



const displayProductsFn = (products) => {
    let displayProducts = products.map((item) => {
        return `<a href=${item.link}>
        <div class="col4">
            <div class="product-pic">
                <img src=${item.img} alt=${item.title}>
            </div>
            <div class="name">${item.title}</div>
            <div class="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
            </div>
            <div class="price">${item.price}</div>
        </div>
    </a>`
    })
    displayProducts = displayProducts.join('');
    productRow.innerHTML = displayProducts
}


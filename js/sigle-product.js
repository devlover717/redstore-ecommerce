
// single product image gallery

const singleProductImage = document.querySelector('#singleProductImage');

const smallImgs = document.querySelectorAll('.smallImage')

smallImgs.forEach((img) => {
    img.addEventListener('click', () => {
        singleProductImage.src = img.src
    })
})

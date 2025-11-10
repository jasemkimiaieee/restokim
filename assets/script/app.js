const $ = document

const productsParent = $.querySelector(".products")

const products = [
    // ! 1. Waffle with Berries
    {
        image: {
            thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
            mobile: "./assets/images/image-waffle-mobile.jpg",
            tablet: "./assets/images/image-waffle-tablet.jpg",
            desktop: "./assets/images/image-waffle-desktop.jpg"
        },
        name: "Waffle with Berries",
        category: "Waffle",
        price: 6.50
    },
    // - 2. Vanilla Bean Crème Brûlée
    {
        image: {
            thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
            mobile: "./assets/images/image-creme-brulee-mobile.jpg",
            tablet: "./assets/images/image-creme-brulee-tablet.jpg",
            desktop: "./assets/images/image-creme-brulee-desktop.jpg"
        },
        name: "Vanilla Bean Crème Brûlée",
        category: "Crème Brûlée",
        price: 7.00
    },
    // ! 3. Macaron Mix of Five
    {
        image: {
            thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
            mobile: "./assets/images/image-macaron-mobile.jpg",
            tablet: "./assets/images/image-macaron-tablet.jpg",
            desktop: "./assets/images/image-macaron-desktop.jpg"
        },
        name: "Macaron Mix of Five",
        category: "Macaron",
        price: 8.00
    },
    // - 4. Classic Tiramisu
    {
        image: {
            thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
            mobile: "./assets/images/image-tiramisu-mobile.jpg",
            tablet: "./assets/images/image-tiramisu-tablet.jpg",
            desktop: "./assets/images/image-tiramisu-desktop.jpg"
        },
        name: "Classic Tiramisu",
        category: "Tiramisu",
        price: 5.50
    },
    // ! 5. Pistachio Baklava
    {
        image: {
            thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
            mobile: "./assets/images/image-baklava-mobile.jpg",
            tablet: "./assets/images/image-baklava-tablet.jpg",
            desktop: "./assets/images/image-baklava-desktop.jpg"
        },
        name: "Pistachio Baklava",
        category: "Baklava",
        price: 4.00
    },
    // - 6. Lemon Meringue Pie
    {
        image: {
            thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
            mobile: "./assets/images/image-meringue-mobile.jpg",
            tablet: "./assets/images/image-meringue-tablet.jpg",
            desktop: "./assets/images/image-meringue-desktop.jpg"
        },
        name: "Lemon Meringue Pie",
        category: "Pie",
        price: 5.00
    },
    // ! 7. Red Velvet Cake
    {
        image: {
            thumbnail: "./assets/images/image-cake-thumbnail.jpg",
            mobile: "./assets/images/image-cake-mobile.jpg",
            tablet: "./assets/images/image-cake-tablet.jpg",
            desktop: "./assets/images/image-cake-desktop.jpg"
        },
        name: "Red Velvet Cake",
        category: "Cake",
        price: 4.50
    },
    // - 8. Salted Caramel Brownie
    {
        image: {
            thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
            mobile: "./assets/images/image-brownie-mobile.jpg",
            tablet: "./assets/images/image-brownie-tablet.jpg",
            desktop: "./assets/images/image-brownie-desktop.jpg"
        },
        name: "Salted Caramel Brownie",
        category: "Brownie",
        price: 4.50
    },
    // ! 9. Vanilla Panna Cotta
    {
        image: {
            thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
            mobile: "./assets/images/image-panna-cotta-mobile.jpg",
            tablet: "./assets/images/image-panna-cotta-tablet.jpg",
            desktop: "./assets/images/image-panna-cotta-desktop.jpg"
        },
        name: "Vanilla Panna Cotta",
        category: "Panna Cotta",
        price: 6.50
    }
]
const userCartProducts = []

let productImg = ''

function showProducts() {
    products.forEach(function (product) {
        productsParent.insertAdjacentHTML("beforeend",
            `
        <article class="products-item">
            <div class="products-item__top">
                <img src="${product.image["desktop"]}" alt="${product.category}" class="products__img">
                <div class="products-item__control">
                    <button class="products-item__add">
                        <img src="assets/images/icon-add-to-cart.svg">
                        <span>Add To Cart</span>
                    </button>
                    <div class="products-item__plus-and-min">
                        <button class="products-item__min">
                            <img src="assets/images/icon-decrement-quantity.svg">
                        </button>
                        <span class="products-item__number">0</span>
                        <button class="products-item__plus">
                            <img src="assets/images/icon-increment-quantity.svg">
                        </button>
                    </div>
                </div>
            </div>
            <div class="products-item__bottom">
                <span class="products-item__name">${product.category}</span>
                <span class="products-item__content">${product.name}</span>
                <span class="products-item__price">$${product.price}</span>
            </div>
        </article>
        `)
    })
    let addProductToCartBtns = $.querySelectorAll(".products-item__add")

    addProductToCartBtns.forEach(function (addProductBtn) {
        addProductBtn.addEventListener("click", pushNewProduct)
    })
}

function pushNewProduct(event) {
    let productItem = event.target.parentElement.parentElement.parentElement
    let productName = productItem.children[1].children[1].innerHTML
    
    let productFind = products.find(function (product) {
        return product.name === productName
    })
    
    userCartProducts.push(productFind)
}
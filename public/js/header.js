/**
 * Creates the header element and inserts it into the DOM.
 */
const createHeader = () => {
    let header = document.querySelector('.header');

    header.innerHTML = `
    <div class="header">
        <div class="overlay"></div>
        <div class="left-side">
        <link rel="stylesheet" href="css/header.css" />
        <span class="logo-header">fashion</span>
        <div class="sm-product">
            <h1 class="product-index">01</h1>
            <div class="sm-product-img-container">
            <img src="img/header/img1.jpg" class="sm-product-img" alt="">
            </div>
            <p class="sm-product-des">Discover our hand-picked selection of top-quality products.</p>
        </div>
        </div>

        <div class="right-side">
        <img src="img/header/img1.jpg" class="backdrop-img" alt="">
        <div class="content-header">
            <div class="product-detail">
            <h1 class="product-name">Featured Collection</h1>
            <p class="product-des">Discover our hand-picked selection of top-quality products.</p>
            <a href="shop.html" class="buy-btn">Shop Now</a>
            <button class="nxt-btn-header"><img src="img/header/arrow.png" alt=""></button>
            </div>  
            <div class="product-img-container">
            <img src="img/header/img1.jpg" class="product-img" alt="">
            </div>
        </div>
        </div>
    </div>
    `;
};

createHeader();

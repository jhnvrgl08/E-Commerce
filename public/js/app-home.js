/**
 * Data for the products in the header section.
 * Each object represents a product with its index, name, image, and description.
 * @type {Array}
 */
const productData = [
    {
        index: '01',
        name: 'Featured Collection',
        image: 'img1.jpg',
        des: 'Discover our hand-picked selection of top-quality products.'
    },
    {
        index: '02',
        name: 'Brand New Products',
        image: 'img2.jpg',
        des: 'Explore the latest trends and fresh arrivals in our store.'
    },
    {
        index: '03',
        name: 'Limited Time Offers',
        image: 'img3.jpg',
        des: 'Do not miss out on our exclusive deals, offers, and discounts in our shop.'
    }
];

const nxtBtn = document.querySelector('.nxt-btn-header');

let smImgContainer = document.querySelector('.sm-product-img-container');
let smImg = document.querySelector('.sm-product-img');
let productIndex = document.querySelector('.product-index');
let smProductDes = document.querySelector('.sm-product-des');
let productName = document.querySelector('.product-name');
let productDes = document.querySelector('.product-des');

let productImgContainer = document.querySelector('.product-img-container');
let productImg = document.querySelector('.product-img');
let backdropImg = document.querySelector('.backdrop-img');

let currentProduct = 0;

/**
 * Handles the click event on the "Next" button.
 * Updates the displayed product information and image.
 */
nxtBtn.addEventListener('click', () => {
    if (currentProduct >= productData.length - 1) {
        currentProduct = 0;
    } else {
        currentProduct++;
    }

    productIndex.innerHTML = productData[currentProduct].index;
    smProductDes.innerHTML = productData[currentProduct].des.slice(0, 80);

    smImgContainer.classList.add('slide');
    productImgContainer.classList.add('slide');

    setTimeout(() => {
        productName.innerHTML = productData[currentProduct].name;
        productDes.innerHTML = productData[currentProduct].des;
        smImg.src = productImg.src = backdropImg.src = `img/header/${productData[currentProduct].image}`;
    }, 500);

    setTimeout(() => {
        smImgContainer.classList.remove('slide');
        productImgContainer.classList.remove('slide');
    }, 1000);
});

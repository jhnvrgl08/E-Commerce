/**
 * Selects all input fields on the page.
 * @type {NodeListOf<Element>}
 */
const inputs = document.querySelectorAll(".input-field");

/**
 * Selects all toggle buttons on the page.
 * @type {NodeListOf<Element>}
 */
const toggle_btn = document.querySelectorAll(".toggle");

/**
 * Selects the main element on the page.
 * @type {Element}
 */
const main = document.querySelector("main");

/**
 * Selects all bullets in the slider.
 * @type {NodeListOf<Element>}
 */
const bullets = document.querySelectorAll(".bullets span");

/**
 * Selects all images in the slider.
 * @type {NodeListOf<Element>}
 */
const images = document.querySelectorAll(".image");

/**
 * Adds event listeners to the input fields to handle focus and blur events.
 */
inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

/**
 * Adds event listeners to the toggle buttons to toggle the sign-up mode.
 */
toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

/**
 * Moves the slider to the selected index.
 */
function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

/**
 * Adds event listeners to the bullets to move the slider when clicked.
 */
bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

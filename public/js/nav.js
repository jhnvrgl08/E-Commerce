/**
 * Creates the navigation menu.
 */
const createNav = () => {
  let nav = document.querySelector('.navbar');

  nav.innerHTML = `
  <section class="nav" id="header">
    <img src="../img/dark-logo.png" class="brand-logo" alt="" />
    <div class="nav-items" id="navbar">

        <ul class="container-links">
          <li class="link-item"><a href="../index.html" class="link">Home</a></li>
          <li class="link-item"><a href="../shop.html" class="link">Shop</a></li>
          <li class="link-item"><a href="../blog.html" class="link">Blog</a></li>
          <li class="link-item"><a href="../about.html" class="link">About</a></li>
          <li class="link-item"><a href="../contact.html" class="link">Contact</a></li>
        </ul>

        <div class="search">
            <input type="text" class="search-box" placeholder="search brand, product"/>
            <button class="search-btn"></button>
        </div>

        <a>
          <img src="../img/user.png" id="user-img" alt="" />
          <div class="login-logout-popup hide">
            <p class="account-info">Log in as, name</p>
            <button class="btn" id="user-btn">Log out</button>
          </div>
        </a>

        <a href="/cart"><img src="../img/cart.png" alt="" /></a>
        </div>

        <div id="mobile">
        <i id="bar" class="fas fa-outdent">

          <a href="/cart"><img src="../img/cart.png" alt="" /></a>
          <a><img src="../img/user.png" id="user-img" alt="" /></a>
          
          <div class="login-logout-popup hide">
            <p class="account-info">Log in as, name</p>
            <button class="btn" id="user-btn">Log out</button>
          </div>

          <div class="search">
          <input  type="text" class="search-box hide" placeholder="search brand, product"/>
          <button class="search-btn"></button>
          </div>
        </i>
        </div>
    </section>
  `;
};

/**
 * Handles the click event for the user image button and toggles the user popup.
 */
const handleUserImageClick = () => {
  const userImageButton = document.querySelector('#user-img');
  const userPopup = document.querySelector('.login-logout-popup');

  userImageButton.addEventListener('click', () => {
    userPopup.classList.toggle('hide');
  });
}

/**
 * Initializes the user information and login/logout functionality.
 */
const initializeUser = () => {
  const popuptext = document.querySelector('.account-info');
  const actionBtn = document.querySelector('#user-btn');
  const user = JSON.parse(sessionStorage.user || null);

  if (user != null) {
    // User is logged in
    popuptext.innerHTML = `Log in as, ${user.name}`;
    actionBtn.innerHTML = 'Log out';
    actionBtn.addEventListener('click', () => {
      sessionStorage.clear();
      location.reload();
    });
  } else {
    // User is logged out
    popuptext.innerHTML = 'Log in to place an order';
    actionBtn.innerHTML = 'Log in';
    actionBtn.addEventListener('click', () => {
      location.href = '/login';
    });
  }
}

/**
 * Handles the click event for the search button and performs a search based on the input value.
 */
const handleSearchButtonClick = () => {
  const searchBtn = document.querySelector('.search-btn');
  const searchBox = document.querySelector('.search-box');

  searchBtn.addEventListener('click', () => {
    if (searchBox.value.length) {
      location.href = `/search/${searchBox.value}`;
    }
  });
}

/**
 * Adds the click event listener to the responsive navigation menu icon.
 */
const addResponsiveNavigationListener = () => {
  const bar = document.getElementById('bar');
  let nav = document.getElementById('navbar');

  if (bar) {
    bar.addEventListener('click', () => {
      nav.classList.add('active');
    });
  }
}

createNav();
handleUserImageClick();
window.onload = initializeUser;
handleSearchButtonClick();
addResponsiveNavigationListener();

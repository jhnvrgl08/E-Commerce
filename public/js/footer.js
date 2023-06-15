/**
 * Creates the footer element with predefined content.
 */
const createFooter = () => {
  let footer = document.querySelector('footer');

  footer.innerHTML = `
    <footer class="footer">
      <div class="content">
        <div class="top">
          <div class="logo-details">
            <span class="logo_name">Clothing</span>
          </div>
          <div class="media-icons">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
        <div class="link-boxes">
          <ul class="box">
            <li class="link_name">Website</li>
            <li><a href="../index.html">Home</a></li>
            <li><a href="../shop.html">Shop</a></li>
            <li><a href="../blog.html">Blog</a></li>
            <li><a href="../about.html">About Us</a></li>
            <li><a href="../contact.html">Contact</a></li>


          </ul>
          <ul class="box">
            <li class="link_name">Product</li>
            <li><a href="../shop-men.html">Men</a></li>
            <li><a href="../shop-women.html">Women</a></li>
            <li><a href="../shop-accessories.html">Accessories</a></li>
            <li><a href="../shop-sale.html">Sale</a></li>

          </ul>
          <ul class="box">
            <li class="link_name">Account</li>
            <li><a href="../signup.html">Sign Up</a></li>
            <li><a href="../login.html">Sign in</a></li>
            <li><a href="../cart.html">My Cart</a></li>
          </ul>
          <ul class="box">
            <li class="link_name">Creators</li>
            <li><a href="https://www.facebook.com/john.vergel.3785/">John Vergel Brioso</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100084303143098">Joyce Fresnillo</a></li>
          </ul>
          <ul class="box input-box">
            <li class="link_name">Do you want to <br>become a seller?</li>
            <li><a href="../seller.html"><input type="button" value="Click Here!"></a></li>
          </ul>
        </div>
      </div>
      <div class="bottom-details">
        <div class="bottom_text">
          <span class="copyright_text">
            Copyright © 2023 <a href="contact.html">Clothing</a>All rights reserved
          </span>
          <span class="policy_terms">
            <a href="privacy-policy.html">Privacy policy</a>
            <a href="terms-condition.html">Terms & condition</a>
          </span>
        </div>
      </div>
    </footer>
  `;
};

createFooter();

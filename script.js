document.addEventListener("DOMContentLoaded", () => {
  // Cart icon click handler
  const cartIcons = document.querySelectorAll(".product-icons .add-to-cart");
  let cartCount = 2; // starting number

  cartIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      cartCount++;
      const cartCountElem = document.querySelector(".cart-count");
      if (cartCountElem) {
        cartCountElem.textContent = cartCount;
      }
      alert("Item added to cart!");
    });
  });

  // Hamburger menu handler
  const hamburger = document.getElementById('hamburger-btn');
  const nav = document.getElementById('main-nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', function() {
      nav.classList.toggle('open');
    });
  }
});

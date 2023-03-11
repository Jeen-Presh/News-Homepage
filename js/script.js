const openButton = document.querySelector(".hamburger-open");
const closeButton = document.querySelector(".hamburger-close");
const mobileMenu = document.querySelector(".mobile-menu");

const toggleMenu = function () {
  openButton.classList.toggle("hidden");

  mobileMenu.classList.toggle("translate-x-full");
  mobileMenu.classList.toggle("shadow-cs");
};

const closeMenu = function () {
  mobileMenu.classList.toggle("translate-x-full");
  mobileMenu.classList.toggle("shadow-cs");
  openButton.classList.toggle("hidden");
};

openButton.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", closeMenu);

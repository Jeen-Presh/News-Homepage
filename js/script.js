const menuButton = document.querySelector(".hamburger");
const menuIcon = document.querySelector(".menu-icon");
const closeICon = document.querySelector(".close-icon");
const mobileMenu = document.querySelector(".mobile-menu");

const toggleMenu = function () {
  menuIcon.classList.toggle("hidden");
  closeICon.classList.toggle("hidden");
  mobileMenu.classList.toggle("translate-x-full");
  mobileMenu.classList.toggle("shadow-cs");
};

menuButton.addEventListener("click", toggleMenu);

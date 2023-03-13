const navButton = document.querySelector(".hamburger-open");
const navList = document.querySelector(".navlist");
const SodyOverlay = document.body;
const openIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");

console.log(SodyOverlay);

const toggleMenu = function () {
  navList.hasAttribute("data-visible") ? navButton.setAttribute("aria-expanded", false) : navButton.setAttribute("aria-expanded", true);
  openIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  navList.toggleAttribute("data-visible");
  SodyOverlay.classList.toggle("newAfter");
};

navButton.addEventListener("click", toggleMenu);

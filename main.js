let menuBtn = document.getElementById("menu-btn");
let navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});

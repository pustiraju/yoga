// Mobile menu toggle functionality
const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobileMenu");



// Toggle mobile menu
mobileMenuButton.addEventListener("click", (e) => {
  e.stopPropagation();
  const isHidden = mobileMenu.classList.contains("hidden");
  mobileMenu.classList.toggle("hidden", !isHidden);
  mobileMenu.classList.toggle("block", isHidden);
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("block");
  }
});

// Close menu on window resize (optional)
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("block");
  }
});
// js for nav ends

// homepage image slider
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }
  slides[currentSlide].classList.add("active");
  setInterval(showNextSlide, 5000);
});
// homepage image slider ends


//gallery js starts here

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

  const slides = document.querySelectorAll('.slide');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? '1' : '0';
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  // Initial display
  showSlide(current);

  // Change every 5 seconds
  setInterval(nextSlide, 5000);



//gallery js starts here

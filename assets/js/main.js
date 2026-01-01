document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      menuToggle.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    const links = navLinks.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", function () {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });

    document.addEventListener("click", function (event) {
      const isClickInsideNav = navLinks.contains(event.target);
      const isClickOnToggle = menuToggle.contains(event.target);

      if (
        !isClickInsideNav &&
        !isClickOnToggle &&
        navLinks.classList.contains("active")
      ) {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".dot");
  let currentSlide = 0;
  let carouselInterval;

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    if (slides[index]) {
      slides[index].classList.add("active");
    }
    if (dots[index]) {
      dots[index].classList.add("active");
    }

    currentSlide = index;
  }

  function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  }

  function startCarousel() {
    carouselInterval = setInterval(nextSlide, 4000);
  }

  function stopCarousel() {
    if (carouselInterval) {
      clearInterval(carouselInterval);
    }
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      stopCarousel();
      showSlide(index);
      startCarousel();
    });
  });

  if (slides.length > 0) {
    showSlide(0);
    startCarousel();
  }

  const carouselContainer = document.querySelector(".carousel-container");
  if (carouselContainer) {
    carouselContainer.addEventListener("mouseenter", stopCarousel);
    carouselContainer.addEventListener("mouseleave", startCarousel);
  }
});

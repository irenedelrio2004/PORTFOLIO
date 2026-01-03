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
    carouselInterval = setInterval(nextSlide, 3000);
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
    const firstSlide = slides[0];
    if (firstSlide) {
      firstSlide.classList.add("first-load");
    }
    showSlide(0);
    startCarousel();
  }

  const carouselContainer = document.querySelector(".carousel-container");
  if (carouselContainer) {
    carouselContainer.addEventListener("mouseenter", stopCarousel);
    carouselContainer.addEventListener("mouseleave", startCarousel);
  }
});

// Page fade in/out transitions
document.addEventListener("DOMContentLoaded", function () {
  // Fade in on page load
  document.body.classList.add('fade-in');
  
  // Fade out on link clicks to other HTML pages
  const allLinks = document.querySelectorAll('a[href]');
  allLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      // Check if it's a link to another HTML page (with or without hash)
      if (href && (href.includes('.html') || href.includes('.HTML')) && !href.startsWith('http') && !href.startsWith('#')) {
        // Don't prevent default for links with hash that go to same page
        const isSamePageHash = href.includes('#') && !href.includes('.html') && !href.includes('.HTML');
        if (!isSamePageHash) {
          e.preventDefault();
          document.body.style.transition = 'opacity 0.1s ease-in-out';
          document.body.style.opacity = '0';
          setTimeout(() => {
            window.location.href = href;
          }, 100);
        }
      }
    });
  });
});

// Header shadow on scroll
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector('.header');
  if (header) {
    function handleScroll() {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    
    // Check initial scroll position
    handleScroll();
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
  }
});

// Handle category links to scroll instantly without smooth behavior
document.addEventListener("DOMContentLoaded", function () {
  // Handle scroll when page loads with hash
  if (window.location.hash) {
    document.documentElement.style.scrollBehavior = 'auto';
    const hash = window.location.hash.substring(1);
    const targetElement = document.getElementById(hash);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'auto', block: 'start' });
        document.documentElement.style.scrollBehavior = 'smooth';
      }, 10);
    }
  }

  // Handle category links clicks
  const categoryLinks = document.querySelectorAll('.category-list a[href*="#"]');
  categoryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.includes('#')) {
        const parts = href.split('#');
        const hash = parts[parts.length - 1];
        // If it's a link to another page, the browser will handle navigation
        // and the hash will be processed on page load
        if (href.includes('.html') || href.includes('.HTML')) {
          return; // Let the browser handle navigation
        }
        const targetElement = document.getElementById(hash);
        if (targetElement) {
          e.preventDefault();
          // Temporarily disable smooth scroll
          document.documentElement.style.scrollBehavior = 'auto';
          targetElement.scrollIntoView({ behavior: 'auto', block: 'start' });
          // Re-enable smooth scroll after a short delay
          setTimeout(() => {
            document.documentElement.style.scrollBehavior = 'smooth';
          }, 100);
        }
      }
    });
  });
});

// Header shadow on scroll
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector('.header');
  if (header) {
    function handleScroll() {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    
    // Check initial scroll position
    handleScroll();
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
  }
});

// Header shadow on scroll
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector('.header');
  if (header) {
    function handleScroll() {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    
    // Check initial scroll position
    handleScroll();
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
  }
});

// GSAP Animations
// Registrar ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Función para inicializar animaciones cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
  initAnimations();
});

function initAnimations() {
  // ============================================
  // HERO SECTION ANIMATIONS (index.html)
  // ============================================
  const heroTitle = document.querySelector(".hero-title");
  const heroCategories = document.querySelectorAll(".hero-categories-left p");
  const heroImage = document.querySelector("#self-portrait");
  const heroLocation = document.querySelector(".hero-location");

  if (heroTitle) {
    // Animación del título principal
    gsap.from(heroTitle, {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: "power3.out",
      onComplete: () => {
        gsap.set(heroTitle, { opacity: 1, y: 0, clearProps: "all" });
      },
    });
  }

  if (heroCategories.length > 0) {
    // Animación de las categorías con stagger
    gsap.from(heroCategories, {
      opacity: 0,
      x: -30,
      duration: 1,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.2,
      onComplete: () => {
        heroCategories.forEach((cat) => {
          gsap.set(cat, { opacity: 1, x: 0, clearProps: "all" });
        });
      },
    });
  }

  if (heroImage) {
    // Establecer estado inicial
    gsap.set(heroImage, { 
      opacity: 0, 
      scale: 0.9,
      visibility: "visible",
      display: "block"
    });
    
    // Eliminar cualquier animación CSS que pueda interferir
    heroImage.style.animation = "none";
    
    // Animación de la imagen - asegurar que permanezca visible
    gsap.to(heroImage, {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.3,
      onComplete: () => {
        // Asegurar que la foto permanezca visible permanentemente
        gsap.set(heroImage, { 
          opacity: 1, 
          scale: 1, 
          clearProps: "all",
          visibility: "visible",
          display: "block"
        });
        // Establecer en el estilo inline para mayor seguridad
        heroImage.style.opacity = "1";
        heroImage.style.visibility = "visible";
        heroImage.style.display = "block";
        heroImage.style.animation = "none";
        heroImage.style.transform = "none";
      },
    });
    
    // Fallback: después de 2 segundos, asegurar que esté visible
    setTimeout(() => {
      gsap.set(heroImage, { 
        opacity: 1, 
        scale: 1, 
        clearProps: "all",
        visibility: "visible",
        display: "block"
      });
      heroImage.style.opacity = "1";
      heroImage.style.visibility = "visible";
      heroImage.style.display = "block";
      heroImage.style.animation = "none";
      heroImage.style.transform = "none";
    }, 2000);
    
    // Observador para asegurar que siempre esté visible
    const observer = new MutationObserver(() => {
      const currentOpacity = window.getComputedStyle(heroImage).opacity;
      const currentVisibility = window.getComputedStyle(heroImage).visibility;
      if (parseFloat(currentOpacity) < 0.1 || currentVisibility === "hidden") {
        // Si la opacidad baja o está oculta, restaurarla inmediatamente
        gsap.set(heroImage, { 
          opacity: 1,
          visibility: "visible",
          display: "block",
          clearProps: "all"
        });
        heroImage.style.opacity = "1";
        heroImage.style.visibility = "visible";
        heroImage.style.display = "block";
        heroImage.style.animation = "none";
        heroImage.style.transform = "none";
      }
    });
    
    observer.observe(heroImage, {
      attributes: true,
      attributeFilter: ["style", "class"],
      childList: false,
      subtree: false
    });
    
    // Verificación periódica cada segundo para asegurar visibilidad
    const visibilityCheck = setInterval(() => {
      const currentOpacity = parseFloat(window.getComputedStyle(heroImage).opacity);
      const currentVisibility = window.getComputedStyle(heroImage).visibility;
      if (currentOpacity < 0.1 || currentVisibility === "hidden") {
        gsap.set(heroImage, { 
          opacity: 1,
          visibility: "visible",
          display: "block",
          clearProps: "all"
        });
        heroImage.style.opacity = "1";
        heroImage.style.visibility = "visible";
        heroImage.style.display = "block";
        heroImage.style.animation = "none";
        heroImage.style.transform = "none";
      }
    }, 1000);
    
    // Limpiar el intervalo después de 10 segundos (ya debería estar estable)
    setTimeout(() => {
      clearInterval(visibilityCheck);
    }, 10000);
  }

  if (heroLocation) {
    // Animación de la ubicación
    gsap.from(heroLocation, {
      opacity: 0,
      x: 30,
      duration: 1,
      ease: "power2.out",
      delay: 0.7,
      onComplete: () => {
        gsap.set(heroLocation, { opacity: 1, x: 0, clearProps: "all" });
      },
    });
  }

  // ============================================
  // ABOUT SECTION ANIMATIONS (index.html)
  // ============================================
  const aboutText = document.querySelector(".about-text");
  const learnMore = document.querySelector(".learn-more");

  if (aboutText) {
    gsap.from(aboutText, {
      opacity: 0,
      x: 30,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: aboutText,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
      onComplete: () => {
        gsap.set(aboutText, { opacity: 1, x: 0, clearProps: "all" });
      },
    });
  }

  if (learnMore) {
    gsap.from(learnMore, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: learnMore,
        start: "top 85%",
        toggleActions: "play none none none",
        once: true,
      },
      onComplete: () => {
        gsap.set(learnMore, { opacity: 1, y: 0, clearProps: "all" });
      },
    });
  }

  // ============================================
  // LAST PROJECT SECTION (index.html)
  // ============================================
  const sectionTitle = document.querySelector(".section-title");
  const projectPreview = document.querySelector(".project-preview");

  if (sectionTitle) {
    gsap.from(sectionTitle, {
      opacity: 0,
      y: -20,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionTitle,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
      onComplete: () => {
        gsap.set(sectionTitle, { opacity: 1, y: 0, clearProps: "all" });
      },
    });
  }

  if (projectPreview) {
    gsap.from(projectPreview, {
      opacity: 0,
      scale: 0.95,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: projectPreview,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });
  }

  // ============================================
  // CATEGORIES SECTION (index.html)
  // ============================================
  const categoryItems = document.querySelectorAll(".category-list li");

  if (categoryItems.length > 0) {
    gsap.from(categoryItems, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".category-list",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }

  // ============================================
  // ABOUT PAGE ANIMATIONS (about.html)
  // ============================================
  const aboutTitle = document.querySelector(".about-title");
  const aboutPhoto = document.querySelector(".about-photo img");
  const aboutIntro = document.querySelector(".about-intro p");
  const aboutBioParagraphs = document.querySelectorAll(".about-bio p");

  if (aboutTitle) {
    gsap.from(aboutTitle, {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: "power3.out",
    });
  }

  if (aboutPhoto) {
    gsap.from(aboutPhoto, {
      opacity: 0,
      scale: 0.9,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.3,
    });
  }

  if (aboutIntro) {
    gsap.from(aboutIntro, {
      opacity: 0,
      x: -30,
      duration: 1,
      ease: "power2.out",
      delay: 0.5,
    });
  }

  if (aboutBioParagraphs.length > 0) {
    gsap.from(aboutBioParagraphs, {
      opacity: 0,
      x: -30,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".about-bio",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }

  // ============================================
  // ACCORDION ANIMATIONS (about.html)
  // ============================================
  const accordionItems = document.querySelectorAll(".accordion-item");

  if (accordionItems.length > 0) {
    gsap.from(accordionItems, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".accordion-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }

  // ============================================
  // PROJECTS PAGE ANIMATIONS (projects.html)
  // ============================================
  // Textos sin animación - visibles desde el inicio
  const projectsTitle = document.querySelector(".projects-title");
  const projectsInfo = document.querySelector(".projects-info");
  const projectsSubtitle = document.querySelector(".projects-subtitle");
  const projectsYear = document.querySelector(".projects-year");
  const allProjectNames = document.querySelectorAll(".project-name");
  const allProjectDescriptions = document.querySelectorAll(".project-description");
  const allProjectSectionTitles = document.querySelectorAll(".project-section-title");

  // Hacer todos los textos visibles sin animación
  if (projectsTitle) {
    gsap.set(projectsTitle, { opacity: 1, clearProps: "all" });
  }
  if (projectsInfo) {
    gsap.set(projectsInfo, { opacity: 1, clearProps: "all" });
  }
  if (projectsSubtitle) {
    gsap.set(projectsSubtitle, { opacity: 1, clearProps: "all" });
  }
  if (projectsYear) {
    gsap.set(projectsYear, { opacity: 1, clearProps: "all" });
  }
  allProjectNames.forEach((name) => {
    gsap.set(name, { opacity: 1, clearProps: "all" });
  });
  allProjectDescriptions.forEach((desc) => {
    gsap.set(desc, { opacity: 1, clearProps: "all" });
  });
  allProjectSectionTitles.forEach((title) => {
    gsap.set(title, { opacity: 1, clearProps: "all" });
  });

  // Solo animar la foto del hero
  const projectsPhoto = document.querySelector(".projects-photo img");
  if (projectsPhoto) {
    gsap.set(projectsPhoto, { opacity: 0, scale: 0.9 });
    gsap.to(projectsPhoto, {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.5,
      onComplete: () => {
        gsap.set(projectsPhoto, { opacity: 1, scale: 1, clearProps: "all" });
      },
    });
  }

  // Función para verificar si un elemento está visible en el viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Función para animar un elemento de texto
  function animateTextElement(element, fromProps, toProps, triggerElement) {
    const isVisible = isElementInViewport(element);
    gsap.set(element, fromProps);
    
    if (isVisible) {
      // Si ya está visible, animar inmediatamente y mantener visible
      gsap.to(element, {
        ...toProps,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          // Asegurar que permanezca visible
          gsap.set(element, { opacity: 1, clearProps: "transform" });
        },
      });
    } else {
      // Si no está visible, usar ScrollTrigger
      gsap.to(element, {
        ...toProps,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: triggerElement || element,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true, // Solo ejecutar una vez
          onEnter: () => {
            // Asegurar que se anime y permanezca visible
            gsap.to(element, { 
              ...toProps, 
              duration: 0.5,
              onComplete: () => {
                gsap.set(element, { opacity: 1, clearProps: "transform" });
              }
            });
          },
        },
      });
    }
  }

  // Project sections - Textos sin animación, solo animar imágenes y videos
  const projectSections = document.querySelectorAll(".project-section");

  if (projectSections.length > 0) {
    projectSections.forEach((section, sectionIndex) => {
      // Títulos y textos ya están visibles desde arriba, no animar
      const sectionTitle = section.querySelector(".project-section-title");
      if (sectionTitle) {
        gsap.set(sectionTitle, { opacity: 1, clearProps: "all" });
      }

      // TODOS los project-info - textos sin animación
      const projectInfos = section.querySelectorAll(".project-info");
      projectInfos.forEach((info, infoIndex) => {
        const projectName = info.querySelector(".project-name");
        const projectDescription = info.querySelector(".project-description");

        if (projectName) {
          gsap.set(projectName, { opacity: 1, clearProps: "all" });
        }

        if (projectDescription) {
          gsap.set(projectDescription, { opacity: 1, clearProps: "all" });
        }
      });

      // TODAS las galerías (project-gallery, project-gallery-2x3, project-gallery-3x3)
      const galleries = section.querySelectorAll(
        ".project-gallery, .project-gallery-2x3, .project-gallery-3x3"
      );
      galleries.forEach((gallery) => {
        const imageItems = gallery.querySelectorAll(".project-image-item");
        if (imageItems.length > 0) {
          // Establecer estado inicial para todas las imágenes
          gsap.set(imageItems, { opacity: 0, scale: 0.95 });
          
          // Animar todas las imágenes con stagger
          gsap.to(imageItems, {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            stagger: {
              amount: 0.5,
              from: "start",
            },
            scrollTrigger: {
              trigger: gallery,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true, // Solo ejecutar una vez
            },
            onComplete: () => {
              // Asegurar que permanezcan visibles
              gsap.set(imageItems, { opacity: 1, scale: 1 });
            },
          });
        }
      });

      // Videos
      const videoWrappers = section.querySelectorAll(".project-video-wrapper");
      videoWrappers.forEach((videoWrapper) => {
        gsap.set(videoWrapper, { opacity: 0, scale: 0.95 });
        gsap.to(videoWrapper, {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: videoWrapper,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true, // Solo ejecutar una vez
          },
          onComplete: () => {
            // Asegurar que permanezca visible
            gsap.set(videoWrapper, { opacity: 1, scale: 1 });
          },
        });
      });
    });
  }

  // Asegurar que todos los textos de projects estén visibles (ya se establecieron arriba, esto es solo un respaldo)
  setTimeout(() => {
    const allProjectNames = document.querySelectorAll(".project-name");
    const allProjectDescriptions = document.querySelectorAll(".project-description");
    const allProjectSectionTitles = document.querySelectorAll(".project-section-title");
    const allProjectsSubtitles = document.querySelectorAll(".projects-subtitle");
    const allProjectsYears = document.querySelectorAll(".projects-year");

    // Asegurar que todos los textos sean visibles y permanezcan así
    [...allProjectNames, ...allProjectDescriptions, ...allProjectSectionTitles, ...allProjectsSubtitles, ...allProjectsYears].forEach((element) => {
      gsap.set(element, { 
        opacity: 1, 
        x: 0, 
        y: 0,
        clearProps: "all"
      });
    });
  }, 100);

  // ============================================
  // CONTACT PAGE ANIMATIONS (contact.html)
  // ============================================
  const contactFormTitle = document.querySelector(".contact-form-title");
  const contactForm = document.querySelector(".contact-form");
  const contactTitle = document.querySelector(".contact-title");
  const contactImage = document.querySelector(".contact-image");

  if (contactFormTitle) {
    gsap.from(contactFormTitle, {
      opacity: 0,
      y: -20,
      duration: 1,
      ease: "power2.out",
    });
  }

  if (contactForm) {
    const formGroups = contactForm.querySelectorAll(".form-group");
    gsap.from(formGroups, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      delay: 0.3,
    });
  }

  if (contactTitle) {
    gsap.from(contactTitle, {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: contactTitle,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }

  if (contactImage) {
    gsap.from(contactImage, {
      opacity: 0,
      scale: 0.9,
      filter: "blur(10px) grayscale(100%)",
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: contactImage,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });
    gsap.to(contactImage, {
      filter: "blur(0) grayscale(100%)",
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: contactImage,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });
  }

  // ============================================
  // 404 PAGE ANIMATIONS (404.html)
  // ============================================
  const errorContainer = document.querySelector(".error-container");

  if (errorContainer) {
    gsap.from(errorContainer, {
      opacity: 0,
      scale: 0.9,
      y: 30,
      duration: 1,
      ease: "power3.out",
    });
  }

  // ============================================
  // SMOOTH SCROLL ANIMATIONS
  // ============================================
  // Animación suave para elementos que aparecen al hacer scroll
  const fadeElements = document.querySelectorAll(
    ".project-name, .project-description"
  );

  if (fadeElements.length > 0) {
    fadeElements.forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });
  }

  // ============================================
  // HEADER ANIMATION ON SCROLL
  // ============================================
  const header = document.querySelector(".header");

  if (header) {
    gsap.to(header, {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      duration: 0.3,
      scrollTrigger: {
        trigger: "body",
        start: "top -50",
        toggleActions: "play none none reverse",
      },
    });
  }
}


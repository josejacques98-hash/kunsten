"use strict";

// Empty templates object to prevent errors
const templates = {};

const heroSlides = [
  {
    image: "/assets/images/zoom-intro.webp",
    alt: "Modern architectural rendering",
    title: "Kusten Contractors",
    description:
      "Where your vision meets our craft, creating extraordinary spaces. Your dream, our expertise.",
  },
  {
    image: "/assets/images/zoom-arch.webp",
    alt: "Architectural Design",
    title: "Innovative Architectural Design",
    description:
      "Transforming concepts into crafted spaces designed to inspire for generations.",
  },
  {
    image: "/assets/images/zoom-con.webp",
    alt: "Construction Excellence",
    title: "Premium Construction Services",
    description:
      "The art of precision. The soul of passion. The promise of quality.",
  },
  {
    image: "/assets/images/zoom-interior.webp",
    alt: "Interior Design",
    title: "Elegant Interior Solutions",
    description:
      "We translate your essence into spaces that elevate everyday life",
  },
];

const designPortfolio = [
  {
    image: "/assets/images/p12.0.webp",
    title: "Category: Bungalow",
    description: "4-Bedroom Bungalow 4 Baths",
    gallery: [
      "/assets/images/p12.0.webp",
      "/assets/images/p12.1.webp",
      "/assets/images/p12.2.webp",
      "/assets/images/p12.3.webp",
    ],
  },
  {
    image: "/assets/images/sp11.webp",
    title: "Category: Maisonette",
    description: "4-Bedroom All Ensuite",
    gallery: [],
  },
  {
    image: "/assets/images/p12.4.webp",
    title: "Category:Modular Hse",
    description: "1-Bedroom 1.5 Baths",
    gallery: [
      "/assets/images/p12.4.webp",
      "/assets/images/p12.5.webp",
      "/assets/images/p12.6.webp",
      "/assets/images/p12.7.webp",
    ],
  },
  {
    image: "/assets/images/p09.webp",
    title: "Category: Bungalow",
    description: "3-Bedroom 1.5 Baths",
    gallery: [],
  },
  {
    image: "/assets/images/p08.webp",
    title: "Category: Maisonette",
    description: "4-Bedroom All Ensuite",
    gallery: [],
  },
  {
    image: "/assets/images/kun3b01.webp",
    title: "Category: Bungalow",
    description: "4-Bedroom 2 Baths",
    gallery: [
      "/assets/images/kun3b01.webp",
      "/assets/images/kun3b02.webp",
      "/assets/images/kun3b03.webp",
      "/assets/images/kun3b04.webp",
    ],
  },
  {
    image: "/assets/images/p06.webp",
    title: "Category: Bunglow",
    description: "4-Bedroom 4.5 Baths",
    gallery: [],
  },
  {
    image: "/assets/images/p05.webp",
    title: "Category: Maisonette",
    description: "4-Bedroom All Ensuite",
    gallery: [],
  },
  {
    image: "/assets/images/p04.webp",
    title: "Category: Apartment",
    description: "1-Bedroom & 2-Bedroom Master Ensuite",
    gallery: [],
  },
  {
    image: "/assets/images/p03.webp",
    title: "Category: Bungalow",
    description: "3-Bedroom 1.5 Baths",
    gallery: [],
  },
  {
    image: "/assets/images/p02.webp",
    title: "Category: Bungalow",
    description: "4-Bedroom All Ensuite",
    gallery: [],
  },
  {
    image: "/assets/images/p01.webp",
    title: "Category: Maisonette",
    description: "5-Bedroom All Ensuite",
    gallery: [],
  },
];

const completedProjects = [
  {
    image: "/assets/images/projects/cm01.webp",
    title: "5-Bedroom Mansion (Kiambu)",
    description: "",
    gallery: [],
  },
  {
    image: "/assets/images/OP01.webp",
    title: "4-Bedroom Bungalow (Kajiado)",
    description: "",
    gallery: [],
  },
  {
    image: "/assets/images/bh.jpg",
    title: "Borehole Drilling (Kajiado)",
    description: "",
    gallery: [],
  },
  {
    image: "/assets/images/projects/cm04.webp",
    title: "4-Bedroom Bungalow (Kericho)",
    description: "",
    gallery: [],
  },
  {
    image: "/assets/images/slab.webp",
    title: "Floor Slab Casting",
    description: "",
    gallery: [],
  },
  {
    image: "/assets/images/lintel.webp",
    title: "Formwork for Ring Beam",
    description: "",
    gallery: [],
  },
  {
    image: "/assets/images/material.webp",
    title: "Material Delivery",
    description: "",
    gallery: [],
  },
  {
    image: "/assets/images/4b.webp",
    title: "4-Bedroom Mansion",
    description: "",
    gallery: [],
  },
  {
    image: "/assets/images/projects/cm09.webp",
    title: "Kitchen Interior (Nairobi)",
    description: "",
    gallery: [],
  },
  {
    image: "/assets/images/projects/cm10.webp",
    title: "4-Bedroom Maionette (Ngong)",
    description: "",
    gallery: [],
  },
  {
    image: "/assets/images/fdn.webp",
    title: "Foundation Walling",
    description: "",
    gallery: [],
  },
  {
    image: "/assets/images/projects/cm12.webp",
    title: "House Interior (Westlands)",
    description: "",
    gallery: [],
  },
];

const testimonials = [
  {
    quote:
      "Working with Kusten Contractors was a game-changer for our community center. They blended modern aesthetics with practical functionality beautifully.",
    author: "Fatima Ali",
    rating: 5,
  },
  {
    quote:
      "Their sustainable design approach reduced our energy costs by 40% while creating a stunning workspace our team loves.",
    author: "Brian Kimathi",
    rating: 5,
  },
  {
    quote:
      "As a first-time homeowner, I was nervous about the building process. Kusten's team guided me patiently through every step.",
    author: "Susan Adhiambo",
    role: "Homeowner, Kitengela",
    rating: 4,
  },
  {
    quote:
      "The adaptive reuse project they designed transformed our old warehouse into a vibrant cultural space that's become a neighborhood landmark.",
    author: "James Mwaura",
    role: "Arts Foundation Director, Ngong Road",
    rating: 5,
  },
  {
    quote:
      "Their 3D visualization helped us visualize the final product before construction even began—eliminating costly changes mid-project.",
    author: "Patricia Nduta",
    rating: 5,
  },
  {
    quote:
      "Kusten Contractors navigated complex regulatory approvals with expertise that saved us months of delays on our mixed-use development.",
    author: "Robert Kiprono",
    rating: 4,
  },
  {
    quote:
      "The interior spatial planning maximized our small office footprint so effectively that we've delayed our expansion plans by two years.",
    author: "Emma Chebet",
    rating: 5,
  },
  {
    quote:
      "Their innovative use of local materials created a unique architectural language that celebrates Kenyan heritage while looking utterly contemporary.",
    author: "Dr. Samuel Onyango",
    rating: 5,
  },
];

let portfolioAutoSlideActive = true;
let portfolioCarouselTimer = null;
let startAutoSlideFunction = null;

function createTimer() {
  let interval = null;
  let isInteracting = false;

  return {
    start: function (duration, callback) {
      this.stop();
      interval = setInterval(() => {
        if (!isInteracting) callback();
      }, duration);
    },
    stop: function () {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    },
    setInteracting: function (value) {
      isInteracting = value;
    },
    get isInteracting() {
      return isInteracting;
    },
    reset: function (duration, callback, delay = 3000) {
      this.stop();
      this.setInteracting(true);
      this.start(duration, callback);
      setTimeout(() => {
        this.setInteracting(false);
      }, delay);
    },
  };
}

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      clearTimeout(timeout);
      func(...args);
    }, wait);
  };
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, initializing...");
  
  // Initialize hero carousel
  initHeroCarousel();

  // Initialize loading screen
  initLoadingScreen();

  // Prevent image right-click and drag
  protectImages();

  // Initialize navigation
  initNavigation();

  // Initialize floating buttons
  initFloatingButtons();

  // Initialize scroll animations
  initScrollAnimations();

  // Initialize WhatsApp buttons
  initWhatsAppButtons();

  // Initialize contact form
  initContactForm();

  // Lazy load images
  lazyLoadImages();

  // Initialize smooth scrolling
  initSmoothScrolling();

  // Initialize testimonials carousel
  initTestimonialsCarousel();

  // Initialize cookie banner
  initCookieBanner();

  // Create modal HTML structure first
  createPortfolioModal();

  // Initialize portfolio carousels
  initPortfolioCarousel();

  // Initialize number counters
  initNumberCounters();

  // Setup portfolio card events
  setupPortfolioCardEvents();
  
  console.log("Initialization complete");
});

function setupPortfolioCardEvents() {
  const carousel = document.querySelector(".carousel");
  if (!carousel) {
    console.log("No carousel found for portfolio events");
    return;
  }
  
  // Use event delegation for better performance with dynamic content
  carousel.addEventListener("click", (e) => {
    // Find the closest card
    const card = e.target.closest(".card");
    if (!card) return;
    
    // Don't trigger if clicking on a link or button
    if (e.target.tagName === "A" || e.target.tagName === "BUTTON") return;
    
    const cardIndex = card.dataset.index;
    if (cardIndex === undefined) return;
    
    // Check if this is projects page
    const isProjectsPage = document.querySelector(".projects-hero") !== null;
    
    // Check if card has gallery
    const galleryData = card.dataset.gallery;
    let hasGallery = false;
    
    try {
      const galleryImages = JSON.parse(galleryData) || [];
      hasGallery = galleryImages.length > 1;
    } catch (e) {
      hasGallery = false;
    }
    
    if (hasGallery) {
      e.preventDefault();
      e.stopPropagation();
      showPortfolioModal(parseInt(cardIndex), isProjectsPage);
    } else {
      // Single image card - just visual feedback
      card.style.transform = "scale(0.98)";
      card.style.transition = "transform 0.2s ease";
      setTimeout(() => {
        card.style.transform = "";
      }, 200);
    }
  });
  
  // Touch events for mobile
  let touchStartTime = 0;
  let touchStartX = 0;
  let touchStartY = 0;
  let touchedCard = null;
  
  carousel.addEventListener("touchstart", (e) => {
    touchedCard = e.target.closest(".card");
    if (!touchedCard) return;
    
    touchStartTime = Date.now();
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
  
  carousel.addEventListener("touchend", (e) => {
    if (!touchedCard) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const touchDuration = Date.now() - touchStartTime;
    
    const touchDistanceX = Math.abs(touchEndX - touchStartX);
    const touchDistanceY = Math.abs(touchEndY - touchStartY);
    
    // Check if this was a tap (not a swipe)
    if (touchDuration < 300 && touchDistanceX < 10 && touchDistanceY < 10) {
      const cardIndex = touchedCard.dataset.index;
      if (cardIndex === undefined) return;
      
      const isProjectsPage = document.querySelector(".projects-hero") !== null;
      
      // Check if card has gallery
      const galleryData = touchedCard.dataset.gallery;
      let hasGallery = false;
      
      try {
        const galleryImages = JSON.parse(galleryData) || [];
        hasGallery = galleryImages.length > 1;
      } catch (e) {
        hasGallery = false;
      }
      
      if (hasGallery) {
        e.preventDefault();
        showPortfolioModal(parseInt(cardIndex), isProjectsPage);
      } else {
        // Single image card - visual feedback
        touchedCard.style.transform = "scale(0.98)";
        touchedCard.style.transition = "transform 0.2s ease";
        setTimeout(() => {
          touchedCard.style.transform = "";
        }, 200);
      }
    }
    
    touchedCard = null;
  }, { passive: true });
}

function initHeroCarousel() {
  const carouselInner = document.querySelector(".zoom-carousel-inner");
  const controls = document.querySelector(".carousel-controls");
  const prevBtn = document.querySelector(".carousel-prev");
  const nextBtn = document.querySelector(".carousel-next");

  if (!carouselInner || !controls) {
    console.log("Hero carousel elements not found");
    return;
  }

  // Clear existing content
  carouselInner.innerHTML = "";
  controls.innerHTML = "";

  // Create slides and indicators
  heroSlides.forEach((slide, index) => {
    // Create slide
    const slideElement = document.createElement("div");
    slideElement.className = "zoom-slide";
    slideElement.style.backgroundImage = `url(${slide.image})`;

    const slideContent = document.createElement("div");
    slideContent.className = "zoom-slide-content";
    slideContent.innerHTML = `
      <h2>${slide.title}</h2>
      <p>${slide.description}</p>
    `;

    slideElement.appendChild(slideContent);
    carouselInner.appendChild(slideElement);

    // Create indicator
    const indicator = document.createElement("div");
    indicator.className = "carousel-indicator";
    indicator.dataset.index = index;
    controls.appendChild(indicator);
  });

  const slides = document.querySelectorAll(".zoom-slide");
  const indicators = document.querySelectorAll(".carousel-indicator");
  let currentSlide = 0;
  let autoSlideInterval;

  function goToSlide(index) {
    slides.forEach((slide) => {
      slide.classList.remove("active");
      slide.style.animation = "none";
    });

    indicators.forEach((indicator) => indicator.classList.remove("active"));

    setTimeout(() => {
      slides[index].classList.add("active");
      slides[index].style.animation = "";
    }, 50);

    indicators[index].classList.add("active");
    currentSlide = index;
  }

  function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length);
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5500);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Event listeners
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      stopAutoSlide();
      goToSlide((currentSlide - 1 + slides.length) % slides.length);
      startAutoSlide();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      stopAutoSlide();
      nextSlide();
      startAutoSlide();
    });
  }

  indicators.forEach((indicator) => {
    indicator.addEventListener("click", () => {
      const index = parseInt(indicator.dataset.index);
      stopAutoSlide();
      goToSlide(index);
      startAutoSlide();
    });
  });

  if (carouselInner) {
    carouselInner.addEventListener("mouseenter", stopAutoSlide);
    carouselInner.addEventListener("mouseleave", startAutoSlide);
  }

  // Start carousel
  if (slides.length > 0) {
    goToSlide(0);
    startAutoSlide();
  }
}

function initLoadingScreen() {
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    setTimeout(function () {
      loadingScreen.classList.add("fade-out");
      setTimeout(() => {
        loadingScreen.remove();
      }, 500);
    }, 1000);
  }
}

function protectImages() {
  document.addEventListener("contextmenu", function (e) {
    if (e.target.nodeName === "IMG") {
      e.preventDefault();
    }
  });

  document.addEventListener("dragstart", function (e) {
    if (e.target.nodeName === "IMG") {
      e.preventDefault();
    }
  });
}

function initNavigation() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (!hamburger || !navMenu) return;

  // Mark items with dropdowns
  document.querySelectorAll(".nav-item").forEach((item) => {
    if (item.querySelector(".dropdown")) {
      item.classList.add("has-dropdown");
    }
  });

  // Get current page for active state
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  // Set active nav links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });

  document.querySelectorAll(".dropdown-link").forEach((link) => {
    link.classList.remove("active");
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    const currentPageNoExt = currentPage.replace(".html", "");
    const hrefNoExt = href ? href.replace(".html", "") : "";

    if (
      href === currentPage ||
      (currentPage === "" && href === "index.html") ||
      (currentPageNoExt === hrefNoExt && hrefNoExt !== "")
    ) {
      link.classList.add("active");
    }
  });

  document.querySelectorAll(".dropdown-link").forEach((link) => {
    const currentPageNoExt = currentPage.replace(".html", "");
    const href = link.getAttribute("href");
    const hrefNoExt = href ? href.replace(".html", "") : "";

    if (currentPageNoExt === hrefNoExt && hrefNoExt !== "") {
      link.classList.add("active");
      const parentItem = link.closest(".nav-item");
      if (parentItem) {
        const navLink = parentItem.querySelector(".nav-link");
        if (navLink) navLink.classList.add("active");
      }
    }
  });

  // Hamburger menu toggle
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Mobile dropdown handling
  document.querySelectorAll(".has-dropdown > .nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 990) {
        e.preventDefault();
        const dropdown = this.nextElementSibling;
        if (!dropdown) return;
        
        const isOpen =
          dropdown.style.maxHeight && dropdown.style.maxHeight !== "0px";

        // Close other dropdowns
        document.querySelectorAll(".dropdown").forEach((dd) => {
          if (dd !== dropdown) {
            dd.style.maxHeight = "0px";
            const prevLink = dd.previousElementSibling;
            if (prevLink) prevLink.classList.remove("active");
          }
        });

        if (isOpen) {
          dropdown.style.maxHeight = "0px";
          this.classList.remove("active");
        } else {
          dropdown.style.maxHeight = dropdown.scrollHeight + "px";
          this.classList.add("active");
        }
      }
    });
  });

  // Close menu when clicking outside (mobile)
  document.addEventListener("click", function (e) {
    if (window.innerWidth <= 990) {
      const isClickInMenu = navMenu.contains(e.target);
      const isClickInHamburger = hamburger.contains(e.target);

      if (
        !isClickInMenu &&
        !isClickInHamburger &&
        navMenu.classList.contains("active")
      ) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");

        document
          .querySelectorAll(".has-dropdown > .nav-link.active")
          .forEach((link) => {
            link.classList.remove("active");
            const dropdown = link.nextElementSibling;
            if (dropdown) dropdown.style.maxHeight = "0px";
          });
      }
    }
  });

  // Desktop hover behavior
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("mouseenter", function () {
      if (window.innerWidth > 990) {
        this.classList.add("hover-active");
        const dropdown = this.querySelector(".dropdown");
        if (dropdown) {
          dropdown.style.opacity = "1";
          dropdown.style.visibility = "visible";
          dropdown.style.transform = "translateY(0)";
        }
      }
    });

    item.addEventListener("mouseleave", function () {
      if (window.innerWidth > 990) {
        this.classList.remove("hover-active");
        const dropdown = this.querySelector(".dropdown");
        if (dropdown) {
          dropdown.style.opacity = "0";
          dropdown.style.visibility = "hidden";
          dropdown.style.transform = "translateY(10px)";
        }
      }
    });
  });
}

function initFloatingButtons() {
  const backToTop = document.querySelector(".back-to-top");
  const phoneFloat = document.querySelector(".phone-call-float");

  if (!backToTop) return;

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTop.classList.add("visible");
      if (phoneFloat && window.innerWidth <= 990) {
        phoneFloat.classList.add("visible");
      }
    } else {
      backToTop.classList.remove("visible");
      if (phoneFloat) {
        phoneFloat.classList.remove("visible");
      }
    }
  });

  backToTop.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initScrollAnimations() {
  console.log("Initializing scroll animations");
  
  const elements = document.querySelectorAll(".scroll-animate");
  console.log("Found scroll-animate elements:", elements.length);
  
  if (elements.length === 0) {
    console.warn("No scroll-animate elements found");
    return;
  }

  // Force all elements to be visible initially for testing
  elements.forEach(el => {
    el.classList.add("animated");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          const delay = entry.target.dataset.delay || "0";
          entry.target.style.transitionDelay = `${delay}s`;
        }
      });
    },
    { threshold: 0.1, rootMargin: "50px" }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
}

function initWhatsAppButtons() {
  const whatsappButtons = document.querySelectorAll(".whatsapp-float");
  if (whatsappButtons.length === 0) return;

  whatsappButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const phone = this.getAttribute("data-phone") || "254743501742";
      const hour = new Date().getHours();
      let greeting = "Good ";
      greeting += hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";

      const message = encodeURIComponent(
        `${greeting}! Reaching out about Kusten Contractors' services after checking out your website.`
      );

      window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    });
  });
}

function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const successMessage = document.getElementById("successMessage");

  if (!contactForm || !submitBtn) return;

  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Check hCaptcha
    const captchaResponse = document.querySelector('[name="h-captcha-response"]');
    if (captchaResponse && !captchaResponse.value) {
      alert("Please complete the hCaptcha");
      return;
    }

    try {
      const formData = new FormData(this);

      // Update button state
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;

      // Submit form
      const response = await fetch(this.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      // Success
      if (successMessage) {
        successMessage.classList.add("show");
        contactForm.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }

      // Reset form
      this.reset();
      if (typeof hcaptcha !== "undefined") {
        hcaptcha.reset();
      }

      // Reset button
      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      submitBtn.disabled = true;
      submitBtn.classList.remove("active");

      // Hide success message after 5 seconds
      setTimeout(() => {
        if (successMessage) {
          successMessage.classList.remove("show");
        }
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error submitting the form. Please try again.");

      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      submitBtn.disabled = false;
    }
  });
}

function lazyLoadImages() {
  document.querySelectorAll("img[data-src]").forEach((img) => {
    img.src = img.dataset.src;
    img.removeAttribute("data-src");
  });
}

function initSmoothScrolling() {
  // Scroll to hash on page load
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }

  // Handle anchor clicks
  document.querySelectorAll('a[href*="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      if (
        this.pathname === window.location.pathname ||
        (this.pathname === "index.html" &&
          window.location.pathname.endsWith("/"))
      ) {
        e.preventDefault();
        const targetId = this.hash;
        const target = document.querySelector(targetId);

        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          history.pushState(null, null, targetId);
        }
      }
    });
  });
}

function initTestimonialsCarousel() {
  const carousel = document.querySelector(".testimonial-carousel");
  const prevBtn = document.querySelector(".prev-testimonial");
  const nextBtn = document.querySelector(".next-testimonial");
  const indicators = document.querySelector(".testimonial-indicators");

  if (!carousel || !prevBtn || !nextBtn || !indicators) {
    console.log("Testimonials carousel elements not found");
    return;
  }

  let touchStartX = 0;
  let touchEndX = 0;

  // Touch events for swipe
  carousel.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  carousel.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;

      const swipeDistance = touchEndX - touchStartX;
      if (swipeDistance > 50) {
        goToPrevSlide();
        resetTimer();
      } else if (swipeDistance < -50) {
        goToNextSlide();
        resetTimer();
      }
    },
    { passive: true }
  );

  let currentSlide = 0;
  let cardsPerView =
    window.innerWidth <= 500 ? 1 : window.innerWidth <= 768 ? 2 : 3;
  let totalSlides = Math.ceil(testimonials.length / cardsPerView);
  const timer = createTimer();

  function startAutoSlide() {
    timer.start(6000, goToNextSlide);
  }

  function resetTimer() {
    timer.reset(6000, goToNextSlide);
  }

  function renderTestimonials() {
    carousel.innerHTML = "";
    indicators.innerHTML = "";
    totalSlides = Math.ceil(testimonials.length / cardsPerView);

    // Create slides
    for (let slideIndex = 0; slideIndex < totalSlides; slideIndex++) {
      const slide = document.createElement("div");
      slide.className = "testimonial-slide";

      const startIndex = slideIndex * cardsPerView;
      const endIndex = startIndex + cardsPerView;

      for (let i = startIndex; i < endIndex && i < testimonials.length; i++) {
        const testimonial = testimonials[i];
        const card = document.createElement("div");
        card.className = "testimonial-card";

        const roleHtml = testimonial.role ? `<p class="testimonial-role">${testimonial.role}</p>` : "";
        
        const stars = '<span class="star">★</span>'.repeat(testimonial.rating);
        const emptyStars = '<span class="star">☆</span>'.repeat(5 - testimonial.rating);

        card.innerHTML = `
          <p class="testimonial-quote">${testimonial.quote}</p>
          <div>
            <h4 class="testimonial-author">${testimonial.author}</h4>
            ${roleHtml}
            <div class="testimonial-rating">
              ${stars}${emptyStars}
            </div>
          </div>
        `;

        slide.appendChild(card);
      }

      carousel.appendChild(slide);
    }

    // Create indicators
    for (let i = 0; i < totalSlides; i++) {
      const indicator = document.createElement("div");
      indicator.className = "testimonial-indicator";
      if (i === 0) indicator.classList.add("active");

      indicator.addEventListener("click", () => {
        if (i >= 0 && i < totalSlides) {
          currentSlide = i;
          updateCarousel();
          resetTimer();
        }
      });

      indicators.appendChild(indicator);
    }

    currentSlide = 0;
    updateCarousel();
  }

  function updateCarousel() {
    carousel.style.transform = `translateX(-${100 * currentSlide}%)`;

    document
      .querySelectorAll(".testimonial-indicator")
      .forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentSlide);
      });
  }

  function goToNextSlide() {
    currentSlide = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
    updateCarousel();
  }

  function goToPrevSlide() {
    currentSlide = currentSlide > 0 ? currentSlide - 1 : totalSlides - 1;
    updateCarousel();
  }

  // Initial render
  renderTestimonials();

  // Event listeners
  prevBtn.addEventListener("click", () => {
    goToPrevSlide();
    resetTimer();
  });

  nextBtn.addEventListener("click", () => {
    goToNextSlide();
    resetTimer();
  });

  // Pause on hover
  carousel.addEventListener("mouseenter", () => {
    timer.stop();
  });

  carousel.addEventListener("mouseleave", () => {
    startAutoSlide();
  });

  // Start auto-slide
  startAutoSlide();

  // Handle window resize
  window.addEventListener(
    "resize",
    debounce(function () {
      const newCardsPerView =
        window.innerWidth <= 500 ? 1 : window.innerWidth <= 768 ? 2 : 3;
      if (newCardsPerView !== cardsPerView) {
        cardsPerView = newCardsPerView;
        totalSlides = Math.ceil(testimonials.length / cardsPerView);
        renderTestimonials();
      }
    }, 100)
  );
}

function initCookieBanner() {
  const banner = document.getElementById("cookie-consent-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const declineBtn = document.getElementById("decline-cookies");

  if (!banner || !acceptBtn || !declineBtn) return;

  function hideBanner() {
    banner.style.opacity = "0";
    banner.style.transform = "translateY(100%)";
    setTimeout(() => {
      banner.style.display = "none";
    }, 300);
  }

  // Show banner if no preference set
  if (localStorage.getItem("cookieConsent") === null) {
    banner.style.display = "block";
    setTimeout(() => {
      banner.style.opacity = "1";
      banner.style.transform = "translateY(0)";
    }, 100);
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    hideBanner();
  });

  declineBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "declined");
    hideBanner();
  });
}

// Create modal HTML structure
function createPortfolioModal() {
  // Check if modal already exists
  if (document.getElementById("portfolioModal")) return;
  
  // Create modal structure
  const modalHTML = `
    <div id="portfolioModal" class="portfolio-modal">
      <div class="modal-overlay"></div>
      <div class="modal-content">
        <button class="modal-close" aria-label="Close modal">
          <i class="bi bi-x"></i>
        </button>
        <div class="modal-header">
          <h3 class="modal-title">Project Views</h3>
        </div>
        <div class="modal-body">
          <!-- Main image and thumbnails will be inserted here -->
        </div>
        <div class="modal-info">
          <!-- Project info will be inserted here -->
        </div>
      </div>
    </div>
  `;

  // Add modal to body
  document.body.insertAdjacentHTML("beforeend", modalHTML);

  // Setup modal close functionality
  const modal = document.getElementById("portfolioModal");
  const closeBtn = document.querySelector(".modal-close");
  const overlay = document.querySelector(".modal-overlay");

  function closeModal() {
    if (modal) modal.classList.remove("active");
    document.body.style.overflow = "auto";
    
    // RESUME CAROUSEL AUTOSLIDE
    portfolioAutoSlideActive = true;
    
    // Start autoslide with a small delay
    setTimeout(() => {
      if (startAutoSlideFunction) {
        startAutoSlideFunction();
      }
    }, 500);
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  if (overlay) {
    overlay.addEventListener("click", closeModal);
  }

  // Close with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

function initPortfolioCarousel() {
  const carousel = document.querySelector(".carousel");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const indicators = document.querySelector(".indicators");

  if (!carousel || !prevBtn || !nextBtn || !indicators) {
    console.log("Portfolio carousel elements not found");
    return;
  }

  // Track touch positions for carousel swipe
  let carouselTouchStartX = 0;
  let carouselTouchEndX = 0;
  let touchStartY = 0;
  let isSwiping = false;
  let touchStartTime = 0;

  // Determine which projects array to use
  const isProjectsPage = document.querySelector(".projects-hero") !== null;
  let projects = isProjectsPage ? completedProjects : designPortfolio;
  let currentPage = 0;

  const cardsPerPage = window.innerWidth <= 768 ? 4 : 6;
  const totalPages = Math.ceil(projects.length / cardsPerPage);
  
  // Create timer instance
  portfolioCarouselTimer = createTimer();

  function renderCards() {
    // Hide all cards
    document.querySelectorAll(".card").forEach((card) => {
      card.style.display = "none";
    });

    // Show cards for current page
    const startIndex = currentPage * cardsPerPage;
    const endIndex = Math.min(startIndex + cardsPerPage, projects.length);

    for (let i = startIndex; i < endIndex; i++) {
      const card = document.querySelector(`.card[data-index="${i}"]`);
      if (card) {
        card.style.display = "block";
      }
    }

    // Update indicators
    document.querySelectorAll(".indicator").forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentPage);
    });
  }

  // Define startAutoSlide globally accessible
  startAutoSlideFunction = function() {
    if (portfolioAutoSlideActive && portfolioCarouselTimer) {
      portfolioCarouselTimer.start(window.innerWidth <= 768 ? 6000 : 8000, goToNext);
    }
  };

  function resetTimer() {
    if (portfolioCarouselTimer) {
      portfolioCarouselTimer.reset(8000, goToNext);
    }
  }

  function goToNext() {
    currentPage = currentPage < totalPages - 1 ? currentPage + 1 : 0;
    renderCards();
  }

  function goToPrev() {
    currentPage = currentPage > 0 ? currentPage - 1 : totalPages - 1;
    renderCards();
  }

  // CAROUSEL TOUCH HANDLERS
  carousel.addEventListener('touchstart', function(e) {
    touchStartTime = Date.now();
    carouselTouchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    isSwiping = false;
  }, { passive: true });

  carousel.addEventListener('touchmove', function(e) {
    if (!carouselTouchStartX) return;
    
    const touchMoveX = e.touches[0].clientX;
    const touchMoveY = e.touches[0].clientY;
    
    // Check if this is primarily horizontal movement (swipe)
    const deltaX = Math.abs(touchMoveX - carouselTouchStartX);
    const deltaY = Math.abs(touchMoveY - touchStartY);
    
    if (deltaX > deltaY && deltaX > 5) {
      isSwiping = true;
      if (portfolioCarouselTimer) portfolioCarouselTimer.setInteracting(true);
    }
  }, { passive: true });

  carousel.addEventListener('touchend', function(e) {
    if (!carouselTouchStartX) return;
    
    carouselTouchEndX = e.changedTouches[0].clientX;
    const touchEndTime = Date.now();
    const swipeDistance = carouselTouchEndX - carouselTouchStartX;
    const touchDuration = touchEndTime - touchStartTime;
    
    // Reset positions
    carouselTouchStartX = 0;
    carouselTouchEndX = 0;
    
    // Only process as swipe if it was a swipe with significant distance
    if (isSwiping && Math.abs(swipeDistance) > 30 && touchDuration < 500) {
      if (swipeDistance > 50) {
        goToPrev();
        resetTimer();
      } else if (swipeDistance < -50) {
        goToNext();
        resetTimer();
      }
      
      // Reset timer interaction after a delay
      if (portfolioCarouselTimer) {
        setTimeout(() => {
          portfolioCarouselTimer.setInteracting(false);
        }, 1000);
      }
    } else {
      // Not a swipe, reset interaction immediately
      if (portfolioCarouselTimer) {
        portfolioCarouselTimer.setInteracting(false);
      }
    }
    
    isSwiping = false;
  }, { passive: true });

  // Create cards with enhanced overlay
  carousel.innerHTML = "";
  projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "card portfolio-card";
    card.dataset.index = index;
    card.dataset.projectIndex = index;
    card.dataset.isProjectsPage = isProjectsPage;

    // Store gallery as JSON string in data attribute
    const galleryImages = project.gallery && project.gallery.length > 0 
      ? project.gallery 
      : [project.image];
    
    card.dataset.gallery = JSON.stringify(galleryImages);

    // Check if card has a gallery
    const hasGallery = galleryImages.length > 1;

    card.innerHTML = `
      <div class="card-img-container">
        <img src="${project.image}" alt="${
      project.title
    }" class="card-img" loading="lazy">
        ${
          hasGallery
            ? `
          <div class="card-overlay">
            <span class="view-more-text">View Gallery</span>
            <div class="view-gallery-btn">
              <i class="bi bi-images"></i> 
            </div>
          </div>
        `
            : ''
        }
      </div>
      <div class="card-content">
        <h3 class="card-title">${project.title}</h3>
        <p class="card-desc">${project.description}</p>
      </div>
    `;

    // Card touch handlers
    let cardTouchStartTime = 0;
    let cardTouchStartX = 0;
    let cardTouchStartY = 0;
    let cardIsSwiping = false;

    card.addEventListener('touchstart', function(e) {
      cardTouchStartTime = Date.now();
      cardTouchStartX = e.touches[0].clientX;
      cardTouchStartY = e.touches[0].clientY;
      cardIsSwiping = false;
    }, { passive: true });

    card.addEventListener('touchmove', function(e) {
      if (!cardTouchStartX) return;
      
      const touchMoveX = e.touches[0].clientX;
      const touchMoveY = e.touches[0].clientY;
      
      const deltaX = Math.abs(touchMoveX - cardTouchStartX);
      const deltaY = Math.abs(touchMoveY - cardTouchStartY);
      
      if (deltaX > deltaY && deltaX > 10) {
        cardIsSwiping = true;
      }
    }, { passive: true });

    card.addEventListener('touchend', function(e) {
      if (!cardTouchStartX) return;
      
      const cardTouchEndX = e.changedTouches[0].clientX;
      const cardTouchEndY = e.changedTouches[0].clientY;
      const cardTouchDuration = Date.now() - cardTouchStartTime;
      
      const cardTouchDistanceX = Math.abs(cardTouchEndX - cardTouchStartX);
      const cardTouchDistanceY = Math.abs(cardTouchEndY - cardTouchStartY);
      
      // Reset card touch positions
      cardTouchStartX = 0;
      cardTouchStartY = 0;
      
      // Only process as a tap if not swiping
      if (!cardIsSwiping && 
          cardTouchDuration < 300 && 
          cardTouchDistanceX < 10 && 
          cardTouchDistanceY < 10) {
        
        if (e.target.tagName === "A" || e.target.tagName === "BUTTON") return;

        if (hasGallery) {
          e.stopPropagation();
          showPortfolioModal(index, isProjectsPage);
        } else {
          this.style.transform = "scale(0.98)";
          this.style.transition = "transform 0.2s ease";
          setTimeout(() => {
            this.style.transform = "";
          }, 200);
        }
      }
      
      cardIsSwiping = false;
    }, { passive: true });

    // Click handler for desktop
    card.addEventListener("click", (e) => {
      if (e.target.tagName === "A" || e.target.tagName === "BUTTON") return;

      if (hasGallery) {
        e.preventDefault();
        e.stopPropagation();
        showPortfolioModal(index, isProjectsPage);
      } else {
        this.style.transform = "scale(0.98)";
        this.style.transition = "transform 0.2s ease";
        setTimeout(() => {
          this.style.transform = "";
        }, 200);
      }
    });

    card.addEventListener('mousedown', function() {
      if (hasGallery) {
        this.style.transform = "scale(0.98)";
      }
    });

    card.addEventListener('mouseup', function() {
      if (hasGallery) {
        this.style.transform = "";
      }
    });

    card.addEventListener('dragstart', function(e) {
      e.preventDefault();
    });

    carousel.appendChild(card);
  });

  // Create indicators
  indicators.innerHTML = "";
  for (let i = 0; i < totalPages; i++) {
    const indicator = document.createElement("div");
    indicator.className = "indicator";
    if (i === 0) indicator.classList.add("active");

    indicator.addEventListener("click", () => {
      if (i >= 0 && i < totalPages) {
        currentPage = i;
        renderCards();
        resetTimer();
      }
    });

    indicators.appendChild(indicator);
  }

  // Initial render
  renderCards();
  if (startAutoSlideFunction) {
    startAutoSlideFunction();
  }

  // Event listeners for buttons
  prevBtn.addEventListener("click", () => {
    goToPrev();
    resetTimer();
  });

  nextBtn.addEventListener("click", () => {
    goToNext();
    resetTimer();
  });

  // Pause on hover
  carousel.addEventListener("mouseenter", () => {
    if (portfolioCarouselTimer) portfolioCarouselTimer.setInteracting(true);
  });

  carousel.addEventListener("mouseleave", () => {
    if (portfolioCarouselTimer) portfolioCarouselTimer.setInteracting(false);
  });

  // Handle window resize
  window.addEventListener(
    "resize",
    debounce(() => {
      if (portfolioCarouselTimer) {
        portfolioCarouselTimer.stop();
        if (startAutoSlideFunction) {
          startAutoSlideFunction();
        }
      }
    }, 250)
  );
}

function showPortfolioModal(cardIndex, isProjectsPage = false) {
  console.log("showPortfolioModal called with index:", cardIndex);
  
  const modal = document.getElementById("portfolioModal");
  const modalBody = document.querySelector(".modal-body");
  const modalInfo = document.querySelector(".modal-info");

  if (!modal || !modalBody) {
    console.error("Modal elements not found");
    return;
  }

  // Get the card element using the data-index attribute
  const card = document.querySelector(`.card[data-index="${cardIndex}"]`);
  if (!card) {
    console.error("Card not found at index:", cardIndex);
    return;
  }

  // Get gallery from data attribute
  const galleryData = card.dataset.gallery;
  let galleryImages = [];
  
  try {
    galleryImages = JSON.parse(galleryData) || [];
    console.log("Gallery images:", galleryImages);
  } catch (e) {
    console.error("Error parsing gallery data:", e);
    const mainImage = card.querySelector(".card-img")?.src || "";
    if (mainImage) {
      galleryImages = [mainImage];
    }
  }
  
  // Get title and description
  const titleElement = card.querySelector(".card-title");
  const descElement = card.querySelector(".card-desc");
  
  const title = titleElement ? titleElement.textContent : "Project";
  const description = descElement ? descElement.textContent : "";
  
  // Filter out empty gallery images
  const validGalleryImages = galleryImages.filter(
    (img) => img && img.trim() !== ""
  );

  // If there's only one image, don't show modal
  if (validGalleryImages.length <= 1) {
    console.log("No gallery available for this project");
    card.style.transform = "scale(0.98)";
    card.style.transition = "transform 0.2s ease";
    setTimeout(() => {
      card.style.transform = "";
    }, 200);
    return;
  }

  // PAUSE THE CAROUSEL AUTOSLIDE
  portfolioAutoSlideActive = false;
  if (portfolioCarouselTimer) {
    portfolioCarouselTimer.stop();
  }

  // Clear previous content
  modalBody.innerHTML = "";
  modalInfo.innerHTML = "";

  // Create modal body structure
  modalBody.innerHTML = `
    <div class="modal-main-image">
      <img 
        src="${validGalleryImages[0]}" 
        alt="${title}" 
        id="modal-main-img"
        loading="lazy"
      >
    </div>
    <div class="modal-thumbnails" id="modal-thumbnails">
      ${validGalleryImages
        .map(
          (imgSrc, index) => `
        <div class="thumbnail ${index === 0 ? "active" : ""}" data-index="${index}">
          <img 
            src="${imgSrc}" 
            alt="${title} - Thumbnail ${index + 1}"
            loading="lazy"
          >
        </div>
      `
        )
        .join("")}
    </div>
  `;

  // Update modal info
  modalInfo.innerHTML = `
    <h4 class="project-title">${title}</h4>
    ${description ? `<p class="project-description">${description}</p>` : ''}
  `;

  // Show modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  // Setup thumbnail click events
  const thumbnails = document.querySelectorAll(".thumbnail");
  const mainImage = document.getElementById("modal-main-img");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      const index = parseInt(thumbnail.dataset.index);

      // Update main image with smooth transition
      mainImage.style.opacity = "0.7";
      setTimeout(() => {
        mainImage.src = validGalleryImages[index];
        mainImage.alt = `${title} - Image ${index + 1}`;
        mainImage.style.opacity = "1";
      }, 150);

      // Update active thumbnail
      thumbnails.forEach((t) => t.classList.remove("active"));
      thumbnail.classList.add("active");
    });
  });
}

function initNumberCounters() {
  const statItems = document.querySelectorAll(".stat-item");
  if (statItems.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const statNumber = entry.target.querySelector(".stat-number");
          if (statNumber) {
            const target = parseInt(statNumber.getAttribute("data-count")) || 0;
            animateCounter(statNumber, target);
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  statItems.forEach((item) => observer.observe(item));
}

function animateCounter(element, target) {
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current);
  }, 40);
}
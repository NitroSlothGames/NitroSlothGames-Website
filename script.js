/*
   Nitro Sloth Games - Interactive Logic
*/

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScrollReveal();
  initCanvasBackground();
  initFaqAccordion();
  initContactForm();
});

// Mobile Navigation Toggle
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
      const isOpen = navMenu.classList.contains('mobile-open');
      toggleBtn.innerHTML = isOpen ? '✕' : '☰';
    });
  }
}

// Scroll Entrance Animations (Scroll Reveal)
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Once animated, no need to keep observing
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback: immediately show elements if IntersectionObserver is not supported
    revealElements.forEach(el => el.classList.add('revealed'));
  }
}

// Interactive Cosmic Drifting Particles Canvas
function initCanvasBackground() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = Math.min(40, Math.floor((width * height) / 40000)); // scale based on viewport size
  const colors = [
    'rgba(255, 122, 0, 0.12)',  // Muted Orange
    'rgba(255, 212, 0, 0.08)',  // Muted Gold
    'rgba(24, 29, 54, 0.3)'     // Indigo shadow
  ];

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 8 + 3; // small subtle sizes
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Wrap around screen borders
      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
      ctx.fill();
    }
  }

  // Populate particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Handle Resize
  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Track Mouse movement for gentle interactivity
  let mouse = { x: null, y: null, radius: 100 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, width, height);
    ctx.shadowBlur = 0; // reset shadow for clearing

    particles.forEach(p => {
      p.update();
      
      // Mouse push/pull physics
      if (mouse.x !== null && mouse.y !== null) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          // drift away from mouse
          p.x += (dx / distance) * force * 1.5;
          p.y += (dy / distance) * force * 1.5;
        }
      }

      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(innerItem => {
          innerItem.classList.remove('active');
        });

        // Toggle selected item
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

// Contact Form Handler
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }

    // Display high-fidelity success feedback
    const originalSubmitBtn = form.querySelector('button[type="submit"]');
    if (originalSubmitBtn) {
      const originalText = originalSubmitBtn.innerHTML;
      originalSubmitBtn.disabled = true;
      originalSubmitBtn.style.background = 'var(--success)';
      originalSubmitBtn.style.color = '#fff';
      originalSubmitBtn.innerHTML = '✓ Message Sent!';
      
      setTimeout(() => {
        form.reset();
        originalSubmitBtn.disabled = false;
        originalSubmitBtn.style.background = '';
        originalSubmitBtn.style.color = '';
        originalSubmitBtn.innerHTML = originalText;
      }, 4000);
    }
  });
}

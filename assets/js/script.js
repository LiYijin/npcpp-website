// DOM Elements
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.nav-link');
const revealElements = document.querySelectorAll('.reveal');

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }

    lastScrollTop = scrollTop;
});

// Copy code functionality
function copyCode(button) {
    const codeBlock = button.closest('.code-example').querySelector('code');
    const text = codeBlock.textContent;

    navigator.clipboard.writeText(text).then(() => {
        const originalIcon = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i>';
        button.style.color = '#68d391';

        setTimeout(() => {
            button.innerHTML = originalIcon;
            button.style.color = '#a0aec0';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy code: ', err);

        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        const originalIcon = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i>';
        button.style.color = '#68d391';

        setTimeout(() => {
            button.innerHTML = originalIcon;
            button.style.color = '#a0aec0';
        }, 2000);
    });
}

// Scroll reveal animation
function reveal() {
    revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Add reveal class to elements
document.addEventListener('DOMContentLoaded', () => {
    const elementsToReveal = document.querySelectorAll(
        '.action-card, .feature-item, .code-example, .resource-item'
    );

    elementsToReveal.forEach(element => {
        element.classList.add('reveal');
    });

    // Initial reveal check
    reveal();

    // Reveal on scroll
    window.addEventListener('scroll', reveal);
});

// Add hover effect to action cards
const actionCards = document.querySelectorAll('.action-card');
actionCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-5px) scale(1)';
    });
});

// Add typewriter effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Initialize typewriter effect
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.gradient-text');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        // Only apply typewriter effect on larger screens
        if (window.innerWidth > 768) {
            setTimeout(() => {
                typeWriter(heroTitle, originalText, 150);
            }, 500);
        }
    }
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');

    if (hero && heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add particle animation to hero background
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.querySelector('.hero').appendChild(particle);

    // Random properties
    const size = Math.random() * 5 + 2;
    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight;
    const delay = Math.random() * 5;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}px`;
    particle.style.top = `${posY}px`;
    particle.style.animationDelay = `${delay}s`;

    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, 10000);
}

// Create particles periodically
if (document.querySelector('.hero')) {
    setInterval(createParticle, 300);

    // Add particle styles
    const particleStyles = document.createElement('style');
    particleStyles.textContent = `
        .particle {
            position: absolute;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            pointer-events: none;
            animation: float 10s infinite ease-in-out;
        }

        @keyframes float {
            0%, 100% {
                transform: translateY(0px) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(particleStyles);
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open modals or menus
        const mobileMenu = document.querySelector('.nav-menu.active');
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
        }
    }
});

// Performance optimization - throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-related functions
}, 100));

// Add Google Analytics or other tracking (placeholder)
function trackEvent(eventName, properties = {}) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', eventName, properties);
}

// Track button clicks
document.querySelectorAll('button, a').forEach(element => {
    element.addEventListener('click', function() {
        const text = this.textContent.trim();
        trackEvent('click', { element: text });
    });
});

console.log('🚀 NPCPP Website loaded successfully!');
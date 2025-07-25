// Animation and interaction functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Navigation Animation
    function animateNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        const navLinks = document.querySelectorAll('.links li');
        
        // Animate nav items with staggered delay
        navItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate');
            }, index * 150 + 100); // Added small initial delay
        });
        
        // Animate nav links with additional delay
        navLinks.forEach((link, index) => {
            setTimeout(() => {
                link.classList.add('animate');
            }, 700 + (index * 100)); // Increased base delay
        });
    }
    
    // Scroll Animation Observer
    function createScrollObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add animate class to trigger animations
                    entry.target.classList.add('animate');
                    
                    // Special handling for stats with staggered animation
                    if (entry.target.classList.contains('stats')) {
                        const stats = entry.target.querySelectorAll('.stat');
                        stats.forEach((stat, index) => {
                            setTimeout(() => {
                                stat.classList.add('animate');
                            }, index * 200);
                        });
                    }
                    
                    // Special handling for skill categories
                    if (entry.target.classList.contains('skills-grid')) {
                        const categories = entry.target.querySelectorAll('.skill-category');
                        categories.forEach((category, index) => {
                            setTimeout(() => {
                                category.classList.add('animate');
                            }, index * 200);
                        });
                    }
                }
            });
        }, observerOptions);
        
        // Observe all animated elements
        const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
    
    // Smooth Scrolling for Navigation Links
    function setupSmoothScrolling() {
        const navLinks = document.querySelectorAll('.links a, .contact-btn');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                let targetId;
                if (this.classList.contains('contact-btn')) {
                    targetId = 'contact';
                } else {
                    targetId = this.getAttribute('href').substring(1);
                }
                
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // Contact Form Handling
    function setupContactForm() {
        const contactForm = document.querySelector('.contact-form');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Simulate form submission
            const submitBtn = contactForm.querySelector('.btn-primary');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call delay
            setTimeout(() => {
                alert('Thank you for your message! I\'ll get back to you soon.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
    
    // Skill Item Hover Effects
    function setupSkillHoverEffects() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        skillItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.05)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
    
    // Project Card Hover Effects
    function setupProjectCardEffects() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
                this.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.5)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
            });
        });
    }
    
    // Initialize all functionality
    function init() {
        // Start navigation animation immediately
        animateNavigation();
        
        // Wait for navigation to complete, then show hero content
        setTimeout(() => {
            const heroSection = document.querySelector('.hero');
            const heroLeft = document.querySelector('.hero-left');
            const heroRight = document.querySelector('.hero-right');
            
            if (heroSection) {
                heroSection.classList.add('animate');
            }
            if (heroLeft) {
                heroLeft.classList.add('animate');
            }
            if (heroRight) {
                setTimeout(() => {
                    heroRight.classList.add('animate');
                }, 300); // Slight delay for right side
            }
        }, 1500); // Wait for nav animation to complete
        
        // Fallback: Ensure navigation is visible after 2 seconds
        setTimeout(() => {
            const navItems = document.querySelectorAll('.nav-item');
            const navLinks = document.querySelectorAll('.links li');
            
            navItems.forEach(item => {
                if (!item.classList.contains('animate')) {
                    item.classList.add('animate');
                }
            });
            
            navLinks.forEach(link => {
                if (!link.classList.contains('animate')) {
                    link.classList.add('animate');
                }
            });
        }, 2000);
        
        // Setup scroll-based animations
        createScrollObserver();
        
        // Setup interactive features
        setupSmoothScrolling();
        setupContactForm();
        setupSkillHoverEffects();
        setupProjectCardEffects();
    }
    
    // Start the application
    init();
});

// Additional utility functions
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top functionality (can be used for future enhancements)
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const nav = document.querySelector('#main-nav');
    
    if (scrolled > 100) {
        nav.style.background = 'rgba(33, 31, 32, 0.95)';
        nav.style.backdropFilter = 'blur(10px)';
    } else {
        nav.style.background = 'transparent';
        nav.style.backdropFilter = 'none';
    }
});
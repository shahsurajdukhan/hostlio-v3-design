// Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                // Close mobile menu if open
                navLinks.classList.remove('active');
            });
        });

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Animated counter for stats
        function animateCounter(element, target) {
            let count = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
                count += increment;
                if (count >= target) {
                    element.textContent = target;
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(count);
                }
            }, 20);
        }

        // Stats counter animation
        const statsSection = document.querySelector('.stats');
        let statsAnimated = false;

        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !statsAnimated) {
                    statsAnimated = true;
                    animateCounter(document.getElementById('propertiesSold'), 12558);
                    animateCounter(document.getElementById('happyClients'), 850);
                    animateCounter(document.getElementById('yearsExperience'), 15);
                    animateCounter(document.getElementById('awards'), 256);
                }
            });
        }, observerOptions);

        statsObserver.observe(statsSection);

        // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const message = formData.get('message');
            
            // Simple form validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = document.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });

        // Property card hover effects
        document.querySelectorAll('.property-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(-8px) scale(1)';
            });
        });

        // Feature card animations
        document.querySelectorAll('.feature-card').forEach((card, index) => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) rotate(2deg)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(-10px) rotate(0deg)';
            });
        });

        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.16}px)`;
            }
        });

        // Add loading animation for images
        document.querySelectorAll('.property-image').forEach(image => {
            const imageUrl = image.style.backgroundImage.slice(4, -1).replace(/"/g, "");
            const img = new Image();
            img.onload = function() {
                image.style.opacity = '1';
            };
            img.src = imageUrl;
            image.style.opacity = '0';
            image.style.transition = 'opacity 0.5s ease';
        });

        // Add click handlers for property cards
        document.querySelectorAll('.property-card').forEach(card => {
            card.addEventListener('click', function() {
                const title = this.querySelector('.property-title').textContent;
                const price = this.querySelector('.property-price').textContent;
                const location = this.querySelector('.property-location span').textContent;
                
                alert(`Property Details:\n\nTitle: ${title}\nPrice: ${price}\nLocation: ${location}\n\nContact us for more information!`);
            });
        });

        // Add typing effect for hero title
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.textContent = '';
            element.style.opacity = '1';
            
            function type() {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }

        // Initialize typing effect when page loads
        window.addEventListener('load', () => {
            const heroTitle = document.querySelector('.hero-content h1');
            if (heroTitle) {
                setTimeout(() => {
                    typeWriter(heroTitle, 'Find Your Dream Home', 80);
                }, 1000);
            }
        });

        // Add search functionality (placeholder)
        function initSearchFilters() {
            // This would typically connect to a backend API
            console.log('Search filters initialized');
        }

        // Add property favorites functionality
        let favorites = [];

        function toggleFavorite(propertyId) {
            if (favorites.includes(propertyId)) {
                favorites = favorites.filter(id => id !== propertyId);
            } else {
                favorites.push(propertyId);
            }
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }

        // Note: localStorage is not supported in this environment, so we'll use a simple array
        // In a real application, this would persist data

        // Add property comparison functionality
        let compareList = [];

        function addToCompare(propertyId) {
            if (compareList.length < 3 && !compareList.includes(propertyId)) {
                compareList.push(propertyId);
                console.log(`Added property ${propertyId} to comparison`);
            }
        }

        // Initialize the website
        document.addEventListener('DOMContentLoaded', function() {
            // Add entrance animations with staggered delays
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach((el, index) => {
                el.style.animationDelay = `${index * 0.1}s`;
            });

            // Add smooth reveal for sections
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            });

            // Reveal sections on scroll
            const sectionObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });

            sections.forEach(section => {
                sectionObserver.observe(section);
            });

            console.log('EliteHomes website initialized successfully!');
        });


        
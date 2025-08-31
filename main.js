  // Register GSAP plugins
        gsap.registerPlugin(ScrollTrigger);
        
        // Wait for DOM to load
        document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
            
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                hamburger.innerHTML = navLinks.classList.contains('active') ? 
                    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });
            
            // Navbar scroll effect
            window.addEventListener('scroll', () => {
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 70,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu if open
                        if (navLinks.classList.contains('active')) {
                            navLinks.classList.remove('active');
                            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                        }
                    }
                });
            });
            
            // Enhanced Hero Section Animations
            const heroTl = gsap.timeline();
            heroTl
                .from('#hero h1', { 
                    opacity: 0, 
                    y: 100, 
                    duration: 1, 
                    ease: "power4.out" 
                })
                .from('#hero p', { 
                    opacity: 0, 
                    y: 50, 
                    duration: 0.8, 
                    ease: "power3.out" 
                }, '-=0.5')
                .from('.hero-btn', { 
                    opacity: 0, 
                    scale: 0.8, 
                    duration: 1, 
                    ease: "elastic.out(1, 0.5)" 
                }, '-=0.3');
            
            // Enhanced About Section Animations
            gsap.from('.about-text', {
                scrollTrigger: {
                    trigger: '#about',
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                x: 100,
                duration: 1,
                ease: "power3.out"
            });
            
            // Enhanced Projects Section Animations
            gsap.from('.project-card', {
                scrollTrigger: {
                    trigger: '#projects',
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 100,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out"
            });
            
            // Enhanced Skills Section Animations
            gsap.from('.skill-card', {
                scrollTrigger: {
                    trigger: '#skills',
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                y: 50,
                stagger: 0.15,
                duration: 0.8,
                ease: "power2.out"
            });
            
            // Enhanced Contact Section Animations
            gsap.from('.contact-form', {
                scrollTrigger: {
                    trigger: '#contact',
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                x: -100,
                duration: 1,
                ease: "power3.out"
            });
            
            gsap.from('.social-links', {
                scrollTrigger: {
                    trigger: '#contact',
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                x: 100,
                duration: 1,
                ease: "power3.out"
            });
            
            gsap.from('.social-icons a', {
                scrollTrigger: {
                    trigger: '.social-icons',
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                scale: 0,
                stagger: 0.1,
                duration: 0.5,
                ease: "back.out(1.7)"
            });
            
            // Hero button animation on hover
            const heroBtn = document.querySelector('.hero-btn');
            heroBtn.addEventListener('mouseenter', () => {
                gsap.to(heroBtn, {
                    y: -5,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            
            heroBtn.addEventListener('mouseleave', () => {
                gsap.to(heroBtn, {
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });
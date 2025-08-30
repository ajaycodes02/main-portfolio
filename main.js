 // JavaScript with GSAP Animations
        gsap.registerPlugin(ScrollTrigger);

        // Hero Section Animations
        gsap.from("#hero h1", { opacity: 0, y: 50, duration: 1, ease: "power3.out" });
        gsap.from("#hero p", { opacity: 0, y: 50, duration: 1, delay: 0.5, ease: "power3.out" });
        gsap.from("#hero button", { opacity: 0, scale: 0.8, duration: 1, delay: 1, ease: "elastic.out(1, 0.5)" });

        // About Section Animations
        gsap.from("#about p", {
            scrollTrigger: "#about",
            opacity: 0,
            y: 50,
            duration: 1
        });
        gsap.from("#about img", {
            scrollTrigger: "#about",
            opacity: 0,
            scale: 0.5,
            duration: 1,
            delay: 0.5,
            ease: "power3.out"
        });
        gsap.from("#about .skills li", {
            scrollTrigger: "#about .skills",
            opacity: 0,
            y: 20,
            stagger: 0.2,
            duration: 0.8
        });

        // Projects Section Animations
        gsap.from(".project-card", {
            scrollTrigger: {
                trigger: "#projects",
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 50,
            stagger: 0.3,
            duration: 1
        });

        // Skills Section Animations
        gsap.from(".skill", {
            scrollTrigger: {
                trigger: "#skills",
                start: "top 80%"
            },
            opacity: 0,
            x: -50,
            stagger: 0.2,
            duration: 1
        });
        // Animate skill bars on scroll
        document.querySelectorAll(".skill").forEach(skill => {
            gsap.to(skill.querySelector(".skill-progress"), {
                scrollTrigger: {
                    trigger: skill,
                    start: "top 90%"
                },
                width: skill.querySelector(".skill-progress").style.width,
                duration: 1.5,
                ease: "power3.out"
            });
        });

        // Contact Section Animations
        gsap.from("#contact form > *", {
            scrollTrigger: "#contact",
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 0.8
        });
        gsap.from(".social-icons a", {
            scrollTrigger: ".social-icons",
            opacity: 0,
            scale: 0.5,
            stagger: 0.1,
            duration: 0.5,
            ease: "back.out(1.7)"
        });
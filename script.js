// Interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', function() {
            navUl.classList.toggle('active');
            this.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = navUl.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navUl.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!menuToggle.contains(event.target) && !navUl.contains(event.target)) {
                navUl.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }

    // Add smooth hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 12px 25px rgba(0, 51, 102, 0.3)';
        });
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
        });
    });

    // Card hover effects
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
        });
    });

    // Service hover effects
    const services = document.querySelectorAll('.service');
    services.forEach(service => {
        service.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
        });
        service.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(section);
    });
});
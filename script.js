// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Responsive Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close Menu on Link Click (for Mobile)
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Basic Form Validation
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
    contactForm.reset();
});

// Email Validation Function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Scroll Animation
const animatedElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.5
});

animatedElements.forEach(el => observer.observe(el));











document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form form');
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    form.addEventListener('submit', (e) => {
        let isValid = true;

        // Validate Name
        if (nameInput.value.trim() === '') {
            isValid = false;
            showError(nameInput, 'Name is required');
        } else {
            clearError(nameInput);
        }

        // Validate Email
        if (!isValidEmail(emailInput.value)) {
            isValid = false;
            showError(emailInput, 'Enter a valid email');
        } else {
            clearError(emailInput);
        }

        // Validate Message
        if (messageInput.value.trim().length < 10) {
            isValid = false;
            showError(messageInput, 'Message must be at least 10 characters');
        } else {
            clearError(messageInput);
        }

        if (!isValid) {
            e.preventDefault();
        }
    });

    function showError(input, message) {
        const error = document.createElement('span');
        error.className = 'error-message';
        error.textContent = message;
        input.parentElement.appendChild(error);
        input.classList.add('error');
    }

    function clearError(input) {
        const error = input.parentElement.querySelector('.error-message');
        if (error) error.remove();
        input.classList.remove('error');
    }

    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('dynamic-text');
    const phrases = ["Om Kala Kendra", "Skill Development", "Creativity Hub"];
    let index = 0;
    let charIndex = 0;
    let currentPhrase = "";
    let isDeleting = false;

    function typeEffect() {
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        currentPhrase = phrases[index].substring(0, charIndex);
        textElement.textContent = currentPhrase;

        if (!isDeleting && charIndex === phrases[index].length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000); // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % phrases.length;
        }

        setTimeout(typeEffect, isDeleting ? 50 : 100); // Typing speed
    }

    typeEffect();
});



document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Text Effect for Hero Section
    const dynamicText = document.getElementById('dynamic-text');
    if (dynamicText) {
        const phrases = ["Om Kala Kendra", "Skill Development", "Creativity Hub"];
        let phraseIndex = 0;
        let charIndex = 0;
        let currentPhrase = "";
        let isDeleting = false;

        function typeEffect() {
            if (isDeleting) {
                charIndex--;
            } else {
                charIndex++;
            }

            currentPhrase = phrases[phraseIndex].substring(0, charIndex);
            dynamicText.textContent = currentPhrase;

            if (!isDeleting && charIndex === phrases[phraseIndex].length) {
                isDeleting = true;
                setTimeout(typeEffect, 2000); // Pause before deleting
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }

            setTimeout(typeEffect, isDeleting ? 50 : 100);
        }

        typeEffect();
    }

    // Smooth Scroll Functionality
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth',
                });
            }
        });
    });

    // Back-to-Top Button Functionality
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        });
    }

    // Animation on Scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Navbar Toggle for Mobile
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', event => {
            if (!navbarToggle.contains(event.target) && !navbarMenu.contains(event.target)) {
                navbarMenu.classList.remove('active');
            }
        });
    }
});

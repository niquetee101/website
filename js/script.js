/**
 * Project: Personal Portfolio Website - JavaScript Enhancements
 * File: js/script.js
 * Description: Here I am adding 6 interactive JavaScript features to my portfolio.
 * I am using DOM manipulation, event listeners, and data processing (time, scroll, and random selection).
 */

// Wait for the HTML document to fully load before running the scripts
window.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // FEATURE 1: Time-Based Welcome Message
    // What I am doing: Grabbing the system's local time hour and using 
    // an if-else statement to change the welcome text dynamically.
    // =========================================================================
    const greetingElement = document.getElementById('welcome-greeting');
    
    if (greetingElement) {
        const currentHour = new Date().getHours();
        let greetingMessage = "Welcome";

        if (currentHour < 12) {
            greetingMessage = "Good Morning!";
        } else if (currentHour < 18) {
            greetingMessage = "Good Afternoon!";
        } else {
            greetingMessage = "Good Evening!";
        }

        greetingElement.innerText = greetingMessage;
    }


    // =========================================================================
    // FEATURE 2: Dark Mode / Light Mode Toggle
    // What I am doing: Listening for a button click, then toggling a 
    // CSS class on the body element to switch between light and dark modes.
    // =========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');

            if (document.body.classList.contains('dark-mode')) {
                themeToggleBtn.innerText = "☀️ Light Mode";
            } else {
                themeToggleBtn.innerText = "🌙 Dark Mode";
            }
        });
    }


    // =========================================================================
    // FEATURE 3: Mobile Hamburger Menu Toggle
    // What I am doing: Listening for clicks on the hamburger icon on mobile
    // screens to toggle the navigation menu open and closed.
    // =========================================================================
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show-menu');
            
            if (navLinks.classList.contains('show-menu')) {
                hamburgerBtn.innerText = '✕';
            } else {
                hamburgerBtn.innerText = '☰';
            }
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show-menu');
                hamburgerBtn.innerText = '☰';
            });
        });
    }


    // =========================================================================
    // FEATURE 4: Interactive Hair Gallery Slideshow
    // What I am doing: Storing image paths in an array and using next/previous
    // button clicks to cycle through them using the modulus operator.
    // =========================================================================
    const galleryImages = [
        "images/hair-1.jpeg", 
        "images/hair-2.jpeg", 
        "images/hair-3.jpeg",
        "images/hair-4.jpeg",
        "images/hair-5.jpeg",
        "images/hair-6.jpeg"
    ];
    let currentImageIndex = 0;

    const slideImageElement = document.getElementById('slide-image');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');

    if (slideImageElement && prevButton && nextButton) {
        nextButton.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            slideImageElement.src = galleryImages[currentImageIndex];
        });

        prevButton.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
            slideImageElement.src = galleryImages[currentImageIndex];
        });
    }


    // =========================================================================
    // FEATURE 5: Show / Hide Content ("Read More" / "Show Less")
    // What I am doing: Hiding extra text by default and writing a toggle 
    // function so clicking the button reveals or collapses the paragraph.
    // =========================================================================
    const toggleDetailsBtn = document.getElementById('toggle-details-btn');
    const extraDetailsContainer = document.getElementById('extra-details');

    if (toggleDetailsBtn && extraDetailsContainer) {
        extraDetailsContainer.style.display = 'none';

        toggleDetailsBtn.addEventListener('click', () => {
            if (extraDetailsContainer.style.display === 'none') {
                extraDetailsContainer.style.display = 'block';
                toggleDetailsBtn.innerText = "Show Less";
            } else {
                extraDetailsContainer.style.display = 'none';
                toggleDetailsBtn.innerText = "Read More";
            }
        });
    }


    // =========================================================================
    // FEATURE 6: Back-to-Top Floating Button
    // What I am doing: Dynamically creating a floating button using JS, 
    // tracking page scroll position, and smoothly scrolling back to top on click.
    // =========================================================================
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerText = '↑ Top';
    backToTopBtn.id = 'backToTopBtn';
    document.body.appendChild(backToTopBtn);

    Object.assign(backToTopBtn.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: 'none',
        padding: '10px 15px',
        backgroundColor: '#ff7e5f',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        zIndex: '1000',
        boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});
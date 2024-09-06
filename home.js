
document.addEventListener('DOMContentLoaded', function() {
    const servicesItem = document.querySelector('.services-item'); // Services item element
    const dropdownMenu = document.querySelector('.dropdown-menu'); // Dropdown menu element
    const hamburger = document.querySelector('.hamburger'); // Hamburger menu icon
    const navbar = document.querySelector('.navbar'); // Navbar element
    const introOverlay = document.querySelector('.intro-overlay'); // Intro overlay
    const introBtn = document.getElementById('intro-btn'); // Intro button
    const aboutBtn = document.getElementById('about-btn'); // About button
    const contactBtn = document.getElementById('contact-btn'); // Contact button
    const aboutSection = document.getElementById('about-section'); // About section
    const contactSection = document.getElementById('contact-section'); // Contact section

    // Show dropdown menu on mouse over
    servicesItem.addEventListener('mouseover', function() {
        dropdownMenu.style.display = 'block';
    });

    // Hide dropdown menu on mouse out
    servicesItem.addEventListener('mouseout', function() {
        dropdownMenu.style.display = 'none';
    });

    // Toggle navbar visibility on hamburger click
    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    // Hide intro overlay on button click
    introBtn.addEventListener('click', function() {
        introOverlay.classList.add('hidden');
    });

    // Show About section on About button click
    aboutBtn.addEventListener('click', function(event) {
        event.preventDefault();
        aboutSection.style.display = aboutSection.style.display === 'block' ? 'none' : 'block';
        contactSection.style.display = 'none'; // Hide Contact section if visible
    });

    // Show Contact section on Contact button click
    contactBtn.addEventListener('click', function(event) {
        event.preventDefault();
        contactSection.style.display = contactSection.style.display === 'block' ? 'none' : 'block';
        aboutSection.style.display = 'none'; // Hide About section if visible
    });

    // Ensure the navbar is visible when window is resized above 768px
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navbar.style.display = 'flex'; // Show navbar when window is wide
            navbar.classList.remove('active'); // Remove active class to ensure proper display
        }
    });
});

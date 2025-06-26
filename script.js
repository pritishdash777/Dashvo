// Mobile Sidebar Toggle
    // Toggles the sidebar visibility when menu icon is clicked
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('#sidebar');
    const closeBtn = document.querySelector('.close-btn');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.style.right = '0'; // Slide in sidebar
        });
    }

    if (closeBtn && sidebar) {
        closeBtn.addEventListener('click', () => {
            sidebar.style.right = '-100%'; // Slide out sidebar
        });
    }

    // Scroll Event for Section Fade-In
    // Adds 'visible' class to sections when they enter viewport
    const sections = document.querySelectorAll('section');

    const checkVisibility = () => {
        const triggerBottom = window.innerHeight * 0.8; // Trigger point at 80% of viewport height

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    };

    // Initial check and scroll listener
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check on page load

    // Button Hover Animations
    // Adds scale and glow effects to buttons on hover
    const buttons = document.querySelectorAll('.project-card a, .contact-form button');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
            button.style.boxShadow = '0 0 15px rgba(0, 255, 204, 0.7)';
            button.style.transition = 'transform 0.2s, box-shadow 0.2s';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
            button.style.boxShadow = 'none';
        });
    });
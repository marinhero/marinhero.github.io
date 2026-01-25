// Theme toggle functionality with smooth rotation animation
(function() {
    const toggle = document.getElementById('theme-toggle');

    if (!toggle) return;

    toggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        // Add rotation animation
        toggle.classList.add('rotating');

        // Update theme
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Remove rotation class after animation completes
        setTimeout(() => {
            toggle.classList.remove('rotating');
        }, 300);
    });
})();

// Mobile menu toggle
(function() {
    const menuToggle = document.getElementById('menu-toggle');
    const siteNav = document.getElementById('site-nav');

    if (!menuToggle || !siteNav) return;

    menuToggle.addEventListener('click', function() {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';

        menuToggle.setAttribute('aria-expanded', !isOpen);
        siteNav.classList.toggle('is-open');

        // Prevent body scroll when menu is open
        document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Close menu when clicking a link
    siteNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.setAttribute('aria-expanded', 'false');
            siteNav.classList.remove('is-open');
            document.body.style.overflow = '';
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && siteNav.classList.contains('is-open')) {
            menuToggle.setAttribute('aria-expanded', 'false');
            siteNav.classList.remove('is-open');
            document.body.style.overflow = '';
        }
    });
})();

/**
 * Loads header and footer components into the page
 */
async function loadComponents() {
    try {
        // Load header
        const headerResponse = await fetch('header.html');
        const headerHtml = await headerResponse.text();
        document.getElementById('header-placeholder').innerHTML = headerHtml;
        
        // Load footer
        const footerResponse = await fetch('footer.html');
        const footerHtml = await footerResponse.text();
        document.getElementById('footer-placeholder').innerHTML = footerHtml;
        
        // Initialize mobile menu after components are loaded
        initializeMobileMenu();
        
    } catch (error) {
        console.error('Error loading components:', error);
    }
}

/**
 * Initializes mobile menu functionality
 */
function initializeMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }
}

/**
 * Toggles mobile menu visibility
 */
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

/**
 * Scrolls to section smoothly
 * @param {string} sectionId - Target section ID
 */
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', loadComponents); 
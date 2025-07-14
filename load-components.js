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
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', openMobileMenu);
    }
    
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }
    
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', function(e) {
            if (e.target === mobileMenuOverlay) {
                closeMobileMenu();
            }
        });
    }
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
}

/**
 * Opens mobile menu
 */
function openMobileMenu() {
    const overlay = document.getElementById('mobile-menu-overlay');
    if (overlay) {
        overlay.classList.remove('hidden');
        document.body.classList.add('menu-open'); // Prevent background scroll
    }
}

/**
 * Closes mobile menu
 */
function closeMobileMenu() {
    const overlay = document.getElementById('mobile-menu-overlay');
    if (overlay) {
        overlay.classList.add('hidden');
        document.body.classList.remove('menu-open'); // Restore background scroll
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
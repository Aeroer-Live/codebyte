// ============================================
// Dynamic Header and Footer Components
// ============================================

/**
 * Get the base path for navigation links based on current page location
 */
function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/projects/')) {
        return '../';
    }
    return './';
}

/**
 * Get the current page name to set active nav link
 */
function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('projects-showcase.html')) {
        return 'showcase';
    }
    if (path.includes('/projects/')) {
        return 'project';
    }
    return 'home';
}

/**
 * Render the header component
 */
function renderHeader() {
    const headerElement = document.getElementById('dynamic-header');
    if (!headerElement) return;

    const basePath = getBasePath();
    const currentPage = getCurrentPage();
    
    const isHome = currentPage === 'home';
    const logoLink = isHome ? '' : `href="${basePath}index.html"`;
    const logoClass = isHome ? '' : 'logo-link';
    
    headerElement.innerHTML = `
        <div class="container">
            <div class="logo">
                ${isHome ? '' : `<a ${logoLink} class="${logoClass}">`}
                    <span class="logo-bracket">&lt;</span>
                    <span class="logo-text">CodeByte</span>
                    <span class="logo-bracket">/&gt;</span>
                ${isHome ? '' : '</a>'}
            </div>
            <nav class="nav">
                <a href="${basePath}projects-showcase.html" class="nav-link ${currentPage === 'showcase' ? 'active' : ''}">My_Projects</a>
            </nav>
        </div>
    `;
}

/**
 * Render the footer component
 */
function renderFooter() {
    const footerElement = document.getElementById('dynamic-footer');
    if (!footerElement) return;

    footerElement.innerHTML = `
        <div class="container">
            <p class="footer-text">
                <span class="code-comment">// Comprehensive documentation and structured breakdowns of all my coding projects.</span>
            </p>
            <p class="footer-copyright">
                &copy; <span id="currentYear"></span> CodeByte. Developer Projects Documenting.
            </p>
        </div>
    `;
    
    // Set current year
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Initialize components - call this after DOM is loaded
 */
function initComponents() {
    renderHeader();
    renderFooter();
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initComponents);
} else {
    initComponents();
}


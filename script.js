// ============================================
// Projects Data Structure
// ============================================

const projects = [
    {
        id: 'note-lab',
        title: 'Note Lab',
        category: 'Web App',
        date: '2025-11-24',
        description: 'Note.Lab is a web-based note application designed specifically for developers who value privacy and data ownership.',
        tags: ['JavaScript', 'HTML', 'CSS', 'JWT Authentication', 'CodeMirror', 'Prism.js' ],
        links: [
            { text: 'View Code', url: 'https://github.com/example/todo-app' },
            { text: 'Live Demo', url: 'https://example.com/todo-app' }
        ]
    }
];

// ============================================
// Utility Functions
// ============================================

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// Note: getProjectById is kept for potential future use
// but individual project pages now use static HTML files
function getProjectById(id) {
    return projects.find(project => project.id === id);
}

// ============================================
// Main Page Functionality
// ============================================

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card" onclick="navigateToProject('${project.id}')">
            <div class="project-card-header">
                <span class="project-card-category">${project.category}</span>
                <h3 class="project-card-title">${project.title}</h3>
            </div>
            <p class="project-card-description">${project.description}</p>
            <div class="project-card-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function navigateToProject(projectId) {
    // Map project IDs to their HTML file names in the projects folder
    const projectFileMap = {
        'note-lab': 'projects/note-lab.html'
    };
    
    const fileName = projectFileMap[projectId];
    if (fileName) {
        window.location.href = fileName;
    }
}

// ============================================
// Initialize Application
// ============================================

function init() {
    // Only render projects on the main index page
    if (document.getElementById('projectsGrid')) {
        renderProjects();
    }
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Make navigateToProject available globally for onclick handlers
window.navigateToProject = navigateToProject;


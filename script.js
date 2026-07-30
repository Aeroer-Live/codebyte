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
    },
    {
        id: 'task-lab',
        title: 'Task Lab',
        category: 'Web App',
        date: '2025-10-03',
        description: 'A modern, feature-rich productivity web system built with Next.js, TypeScript, and Tailwind CSS. Designed to help individuals and teams streamline their workflow with powerful task management, project boards, calendar integration, and time tracking.',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Cloudflare Workers', 'Cloudflare D1', 'JWT Authentication' ],
        links: [
            { text: 'View Code', url: 'https://github.com/Aeroer-Live/task-management-system' },
            { text: 'Live API', url: 'https://productivity-system-api.aeroermark.workers.dev' }
        ]
    },
    {
        id: 'build-learn-deploy',
        title: 'Build. Learn. Deploy.',
        category: 'Educational Platform',
        date: '2025-12-03',
        description: 'DevLearn Platform - A comprehensive static educational website designed to train and guide new software engineers through structured learning paths with 13 custom modules covering fundamental to advanced topics.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'Static Site', 'Educational', 'CodeMirror' ],
        links: [
            { text: 'View Documentation', url: '#' },
            { text: 'Learn More', url: '#' }
        ]
    },
    {
        id: 'news-portal-system',
        title: 'TEC News Portal',
        category: 'News Portal',
        date: '2025-11-08',
        description: 'A modern, full-stack news portal system built for Telecommunication Engineering College in Malaysia. Provides complete content management with writer dashboards, admin controls, and a public-facing news portal.',
        tags: ['Cloudflare Workers', 'Cloudflare D1', 'Cloudflare R2', 'JWT Authentication', 'Multi-language', 'Serverless' ],
        links: [
            { text: 'View Documentation', url: '#' },
            { text: 'Learn More', url: '#' }
        ]
    },
    {
        id: 'tec-talent-pool',
        title: 'TEC Talent Pool',
        category: 'Management System',
        date: '2025-11-15',
        description: 'A comprehensive Talent Pool Management System for TEC\'s in-house graduates, built with HTML, CSS, JavaScript, and Cloudflare Workers/Pages. Fully cloud-based with no local database dependencies.',
        tags: ['Cloudflare Pages', 'Cloudflare D1', 'Cloudflare R2', 'Cloudflare Workers', 'PBKDF2', 'GitHub CI/CD' ],
        links: [
            { text: 'View Documentation', url: '#' },
            { text: 'Learn More', url: '#' }
        ]
    },
    {
        id: 'python-programming-fundamentals',
        title: 'Python Programming Fundamentals',
        category: 'Educational Platform',
        date: '2025-12-20',
        description: 'A comprehensive, interactive 3-day Python programming course website with detailed content, code breakdowns, quizzes, authentication system, and development tools guide.',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'Prism.js', 'Educational', 'Static Site' ],
        links: [
            { text: 'View Documentation', url: '#' },
            { text: 'Learn More', url: '#' }
        ]
    },
    {
        id: 'starthink-crm',
        title: 'StarThink CRM',
        category: 'CRM Platform',
        date: '2026-07-06',
        description: 'A full-stack CRM built for creative agencies — managing clients, projects, workflows, and team collaboration. Deployed entirely on Cloudflare\'s edge infrastructure.',
        tags: ['React 18', 'Vite 6', 'Tailwind CSS v4', 'Cloudflare Workers', 'Cloudflare D1', 'TanStack Query' ],
        links: [
            { text: 'Live App', url: 'https://starthink-crm.pages.dev' },
            { text: 'Live API', url: 'https://starthink-crm-api.starthinkmy.workers.dev' }
        ]
    },
    {
        id: 'business-health-check',
        title: 'Business Health Check',
        category: 'Assessment Platform',
        date: '2026-07-08',
        description: 'An interactive assessment tool that scores a business\'s digital presence, marketing, and growth readiness across 10 categories, then generates a scored report (web + downloadable PDF) with strengths, weaknesses, and admin-configurable recommendations. Built as a lead-gen tool for StarThink.',
        tags: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Cloudflare Workers', 'Cloudflare D1', 'PDF Generation' ],
        links: [
            { text: 'Live Site', url: 'https://bhc-web.starthinkmy.workers.dev' },
            { text: 'Live API', url: 'https://bhc-worker.starthinkmy.workers.dev' }
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
        'note-lab': 'projects/note-lab.html',
        'task-lab': 'projects/task-lab.html',
        'build-learn-deploy': 'projects/build-learn-deploy.html',
        'news-portal-system': 'projects/news-portal-system.html',
        'tec-talent-pool': 'projects/tec-talent-pool.html',
        'python-programming-fundamentals': 'projects/python-programming-fundamentals.html',
        'starthink-crm': 'projects/starthink-crm.html',
        'business-health-check': 'projects/business-health-check.html'
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


# How to Add New Projects to CodingLog

This guide will walk you through adding a new project to your CodingLog website. There are **3 main steps**:

---

## Step 1: Add Project to the Projects Array (script.js)

Open `script.js` and add your new project object to the `projects` array.

### Location
Find the `projects` array starting around line 5 in `script.js`.

### Project Object Structure
Each project needs these properties:

```javascript
{
    id: 'unique-project-id',           // Required: URL-friendly ID (no spaces, lowercase)
    title: 'Project Title',            // Required: Display name
    category: 'Category Name',         // Required: e.g., 'Web App', 'API Integration', 'Mobile App'
    date: 'YYYY-MM-DD',                // Required: Project date (format: YYYY-MM-DD)
    description: 'Brief description',  // Required: Shown on project cards
    tags: ['Tag1', 'Tag2'],            // Required: Array of technology tags
    links: [                            // Optional: External links
        { text: 'View Code', url: 'https://github.com/...' },
        { text: 'Live Demo', url: 'https://example.com' }
    ]
}
```

### Example: Adding a Weather App

```javascript
const projects = [
    {
        id: 'todo-app',
        title: 'Todo Application',
        // ... existing project
    },
    {
        id: 'weather-app',                    // ← New project ID
        title: 'Weather Dashboard',            // ← Project title
        category: 'API Integration',           // ← Category
        date: '2024-12-01',                   // ← Date (YYYY-MM-DD format)
        description: 'A weather app that fetches real-time data from weather APIs.',  // ← Description
        tags: ['JavaScript', 'API', 'Fetch', 'CSS'],  // ← Tags
        links: [
            { text: 'View Code', url: 'https://github.com/yourusername/weather-app' },
            { text: 'Live Demo', url: 'https://yourusername.github.io/weather-app' }
        ]
    }
];
```

**Important Notes:**
- The `id` must be unique and URL-friendly (lowercase, no spaces, use hyphens)
- The `date` must be in `YYYY-MM-DD` format
- **No `content` field needed** - All project content goes in the HTML file (Step 2)

---

## Step 2: Create the Project HTML File

Create a new HTML file in the `projects/` folder for your project details page.

### File Location
Create: `projects/your-project-id.html`

For example: `projects/weather-app.html`


# CodeByte

A developer-focused platform for documenting and breaking down programming projects. Built with HTML, CSS, and JavaScript.

## Features

- **Modern Developer Aesthetic**: Dark theme inspired by code editors (VS Code style)
- **Blog-Style Documentation**: Clear, structured format for project breakdowns
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dynamic Content Loading**: JavaScript-powered project rendering
- **Clean UI**: Minimal, code-oriented design with syntax highlighting colors

## Project Structure

```
Codinglog/
├── index.html              # Main landing page with project listings
├── projects/               # Folder containing individual project pages
│   ├── todo-app.html      # Todo Application project page
│   ├── weather-dashboard.html  # Weather Dashboard project page
│   └── calculator.html     # Scientific Calculator project page
├── styles.css              # Complete styling with developer theme
├── script.js               # JavaScript for navigation and project rendering
└── README.md              # This file
```

## Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
2. **View projects**: Browse the project cards on the main page
3. **Read details**: Click on any project card to view the full breakdown

## Adding New Projects

To add a new project, you need to:

1. **Create a new HTML file** in the `projects/` folder (e.g., `projects/my-project.html`) based on the structure of existing project pages like `projects/todo-app.html`

2. **Add the project to the `projects` array** in `script.js`:

```javascript
{
    id: 'my-project',
    title: 'Project Title',
    category: 'Category Name',
    date: 'YYYY-MM-DD',
    description: 'Brief description shown on the main page',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    links: [
        { text: 'View Code', url: 'https://github.com/...' },
        { text: 'Live Demo', url: 'https://example.com' }
    ]
}
```

3. **Update the `navigateToProject` function** in `script.js` to map your project ID to the HTML file path:

```javascript
const projectFileMap = {
    'todo-app': 'projects/todo-app.html',
    'weather-dashboard': 'projects/weather-dashboard.html',
    'calculator': 'projects/calculator.html',
    'my-project': 'projects/my-project.html'  // Add your new project here
};
```



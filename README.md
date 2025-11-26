# CodingLog

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

4. **Write your project content** directly in the HTML file using the same structure as the existing project pages. Make sure to use `../styles.css` and `../script.js` for the CSS and JavaScript paths, and `../index.html` for links back to the main page.

## Content Structure Guidelines

When documenting a project, consider including:

1. **Overview**: What the project is and its purpose
2. **Project Goals**: What you set out to achieve
3. **Technical Stack**: Technologies and tools used
4. **Key Features**: Main functionality breakdown
5. **Code Structure**: Architecture and code organization
6. **Lessons Learned**: Insights and takeaways
7. **Challenges & Solutions**: Problems encountered and how you solved them

## Customization

### Colors

Edit the CSS variables in `styles.css` to customize the color scheme:

```css
:root {
    --bg-primary: #1e1e1e;
    --code-keyword: #569cd6;
    --accent-primary: #007acc;
    /* ... more variables */
}
```

### Typography

Modify font families in the `:root` section:

```css
--font-mono: 'Courier New', 'Monaco', 'Menlo', 'Consolas', monospace;
--font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...;
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational purposes.

## Contributing

Feel free to fork this project and customize it for your own use. Add your projects, modify the design, and make it your own!


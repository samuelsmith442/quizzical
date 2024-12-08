# Quizzical

A fun and interactive quiz application built with React and Vite that tests your knowledge with trivia questions.

## Features

- Clean and modern UI design
- Multiple choice questions with instant feedback
- Score tracking
- Responsive layout that works on all devices
- HTML entity decoding for proper question and answer display

## Technologies Used

- React 18
- Vite
- CSS3 with CSS Variables
- html-entities for HTML entity decoding
- PropTypes for type checking

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```

## Development

The project structure is organized as follows:

- `src/components/` - React components
  - `Quiz.jsx` - Main quiz component with questions and scoring
  - `Start.jsx` - Landing page component
- `src/App.jsx` - Root component
- `src/index.css` - Global styles and theme variables

## Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

## License

MIT

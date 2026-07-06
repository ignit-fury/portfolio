# Prem Patel - Developer Portfolio

A modern, dark-themed developer portfolio built with Express.js, Node.js, and React.

## Tech Stack

- **Backend:** Express.js, Node.js
- **Frontend:** React.js
- **Styling:** CSS3 with CSS Variables
- **Fonts:** Cabinet Grotesk, JetBrains Mono

## Features

- Dark theme with orange accent (#f97316)
- Grid overlay design
- Responsive layout
- Smooth scroll animations
- Project showcase with images
- Skills section
- Contact form

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm run install-all
   ```

## Running the Application

### Development Mode

```bash
npm run dev
```

This will start both the Express server (port 5000) and React dev server (port 3000).

### Production Mode

1. Build the React app:
   ```bash
   npm run build
   ```

2. Start the server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:5000`

## Project Structure

```
portfolio/
├── server/
│   └── index.js          # Express server
├── client/
│   ├── public/
│   │   └── images/       # Project images
│   └── src/
│       ├── components/    # React components
│       └── styles/        # CSS files
├── images/                # Source images
├── package.json
└── .env
```

## API Endpoints

- `GET /api/health` - Server health check
- `GET /api/projects` - Get all projects
- `GET /api/skills` - Get all skills

## Customization

- Update project data in `server/index.js`
- Modify colors in `client/src/styles/index.css`
- Add your own images to `client/public/images/`

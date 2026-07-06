# Prem Patel — Developer Portfolio

A high-contrast, dark-first developer portfolio built with **React**, **Express.js**, and **Node.js**.

![Portfolio](https://img.shields.io/badge/Status-Active-brightgreen)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-20-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express-4-000000?logo=express)

---

## Live Demo

**[View Portfolio →](https://prempatel.dev)**

---

## Features

- Dark theme with orange accent (`#f97316`)
- Grid overlay with sharp, structural aesthetic
- Responsive design (mobile, tablet, desktop)
- Smooth scroll animations
- Lazy-loaded project images
- Contact form with validation
- Active navigation state on scroll
- Mobile hamburger menu
- Scroll-to-top button
- Error boundaries for fault tolerance

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, CSS3, CSS Variables |
| Backend | Express.js, Node.js |
| Fonts | Cabinet Grotesk, JetBrains Mono |
| Icons | Unicode / Custom SVG |

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/ignit-fury/portfolio.git
cd portfolio

# Install dependencies
npm run install-all

# Start dev server
npm run dev
```

- React app → `http://localhost:3000`
- Express API → `http://localhost:3001`

---

## Project Structure

```
portfolio/
├── client/
│   ├── public/images/       # Project screenshots
│   └── src/
│       ├── components/      # React components
│       │   ├── Navbar.js
│       │   ├── Hero.js
│       │   ├── Work.js      # ← Add projects here
│       │   ├── About.js
│       │   ├── Skills.js    # ← Add skills here
│       │   ├── Contact.js
│       │   ├── Footer.js
│       │   ├── ScrollToTop.js
│       │   ├── LazyImage.js
│       │   └── ErrorBoundary.js
│       └── styles/          # CSS files
├── server/
│   └── index.js             # Express server
└── package.json
```

---

## Adding a New Project

Open `client/src/components/Work.js` and add to `projectsData`:

```js
{
  id: 5,
  type: 'FULL-STACK APP',
  title: 'Project Name',
  description: 'Short description of your project.',
  tags: ['React', 'Node.js', 'MongoDB'],
  image: '/images/your-screenshot.png',
  url: 'https://your-live-project.com'
}
```

Then add your screenshot to `client/public/images/`.

---

## Contact

| Platform | Link |
|----------|------|
| Email | [prem.patel9224@gmail.com](mailto:prem.patel9224@gmail.com) |
| GitHub | [ignit-fury](https://github.com/ignit-fury) |
| LinkedIn | [Prem Patel](https://www.linkedin.com/in/prem-patel-9742aa388/) |
| Instagram | [p.prem._](https://www.instagram.com/p.prem._/) |

---

## License

MIT © 2026 Prem Patel

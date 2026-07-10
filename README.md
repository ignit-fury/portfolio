# Xzen Studio — Developer Portfolio

A warm, light-themed team developer portfolio built with **React**, **Express.js**, and **Node.js**.

![Portfolio](https://img.shields.io/badge/Status-Active-brightgreen)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-20-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express-4-000000?logo=express)

---

## Live Demo

**[View Portfolio →](https://Xzen Studio.dev)**

---

## Features

- Paper & terracotta light theme (`#c1633d` accent)
- Grid overlay with clean, structural aesthetic
- Responsive design (mobile, tablet, desktop)
- Smooth scroll animations with Lenis
- ScrollStack project cards (pinned stacking scroll)
- Lazy-loaded project images
- Team member section with proximity hover effect
- Loading screen with animated progress
- Contact section with direct email CTA
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
| Fonts | Cabinet Grotesk, JetBrains Mono, Inter |
| Icons | Custom SVG |
| Email | Web3Forms |

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
│       │   ├── Team.js      # Team member roster
│       │   ├── Skills.js    # ← Add skills here
│       │   ├── Contact.js
│       │   ├── Footer.js
│       │   ├── ScrollToTop.js
│       │   ├── LoadingScreen.js
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

## Adding a Team Member

Open `client/src/components/Team.js` and add to the `TEAM` array:

```js
{
  name: "Team Member Name",
  role: "Role & focus area",
  initials: "TM",
  github: "https://github.com/handle",
  linkedin: "https://linkedin.com/in/handle",
}
```

---

## Contact

| Platform | Link |
|----------|------|
| Email | [hello@Xzen Studio.dev](mailto:hello@Xzen Studio.dev) |
| GitHub | [ignit-fury](https://github.com/ignit-fury) |
| LinkedIn | [Xzen Studio](https://www.linkedin.com/in/prem-patel-9742aa388/) |

---

## License

MIT © 2026 Xzen Studio

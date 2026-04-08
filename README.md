# 🚀 Dhruv Gupta — Developer Portfolio

A modern, responsive full-stack developer portfolio built with **React.js** and **Vite**. Features dark/light theming, smooth scroll animations, project filtering, and a Formspree-powered contact form.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

## ✨ Features

- 🌗 **Dark / Light Mode** — Toggle with localStorage persistence
- ⌨️ **Typing Animation** — Dynamic role cycling in the hero section
- 🎯 **Project Filtering** — Filter projects by category (All / Full Stack / Backend & AI)
- 📜 **Scroll Animations** — Framer Motion viewport-triggered animations
- 🧭 **Active Nav Highlighting** — Auto-highlights current section in navbar
- 💬 **Contact Form** — Powered by Formspree (no backend needed)
- 📱 **Fully Responsive** — Mobile-first design with hamburger menu
- 🎨 **Glassmorphism UI** — Modern backdrop-blur cards with glow effects
- ⬆️ **Scroll-to-Top** — Floating button appears on scroll
- 📄 **Resume Download** — One-click PDF download from `/public/resume.pdf`

---

## 📸 Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Name, typing roles, code window, social links, resume download |
| 2 | **About** | Education (IIIT Bhopal), DSA stats, internship highlights |
| 3 | **Skills** | 5 categories — Frontend, Backend, Database, DevOps, Core Skills |
| 4 | **Projects** | Travel AI, SmartAttendAI, HealthStack with filter tabs |
| 5 | **Experience** | Timeline with Full Stack & Backend internships |
| 6 | **Achievements** | 650+ DSA, 3★ CodeChef, 1750+ LeetCode, Amazon ML, SIH |
| 7 | **Contact** | Formspree form + email, phone, GitHub, LinkedIn |

---

## 🛠️ Tech Stack

- **React.js 19** — Component-based UI
- **Vite 7** — Lightning-fast build tool
- **Framer Motion** — Scroll & interaction animations
- **Lucide React + React Icons** — Icon libraries
- **Vanilla CSS** — Custom design system with CSS variables
- **Formspree** — Contact form submission (no backend)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/dhruvgupta9713-a11y/Dhruv-portfolio.git
cd Dhruv-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
# → Opens at http://localhost:5173
```

### Build for Production

```bash
npm run build
# Output → dist/
```

### Deploy

Ready for one-click deploy on **Vercel** or **Netlify**:
- Connect your GitHub repo
- Set build command: `npm run build`
- Set output directory: `dist`

---

## 📁 Project Structure

```
portifilio/
├── public/
│   └── resume.pdf              # Resume for download
├── src/
│   ├── components/
│   │   ├── Navbar.jsx/css      # Navigation with theme toggle
│   │   ├── Hero.jsx/css        # Hero with typing animation
│   │   ├── About.jsx/css       # About me + stats
│   │   ├── Skills.jsx/css      # Technical skills grid
│   │   ├── Projects.jsx/css    # Projects with filtering
│   │   ├── Experience.jsx/css  # Work experience timeline
│   │   ├── Achievements.jsx/css# Achievements cards
│   │   ├── Contact.jsx/css     # Contact form (Formspree)
│   │   ├── Footer.jsx/css      # Footer with socials
│   │   └── ThemeToggle.jsx/css # Dark/light toggle
│   ├── App.jsx                 # Main app shell
│   ├── App.css                 # App-level styles
│   ├── index.css               # Design system & theme
│   └── main.jsx                # Entry point
├── index.html                  # HTML entry with SEO meta
├── vite.config.js              # Vite configuration
└── package.json                # Dependencies
```

---

## 📬 Contact

- **Email:** dhruvgupta9713@gmail.com
- **LinkedIn:** [dhruv-gupta](https://www.linkedin.com/in/dhruv-gupta-660701285/)
- **GitHub:** [dhruvgupta9713-a11y](https://github.com/dhruvgupta9713-a11y)
- **LeetCode:** [DhruvGupta0009](https://leetcode.com/u/DhruvGupta0009/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ by Dhruv Gupta</p>

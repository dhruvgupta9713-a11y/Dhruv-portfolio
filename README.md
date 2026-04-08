# 🚀 Dhruv Gupta — Developer Portfolio

A modern, responsive full-stack developer portfolio built with **React.js** and **Node.js**. Features dark/light theming, smooth scroll animations, project filtering, and a contact form backed by Express + MongoDB.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

---

## ✨ Features

- 🌗 **Dark / Light Mode** — Toggle with localStorage persistence
- ⌨️ **Typing Animation** — Dynamic role cycling in the hero section
- 🎯 **Project Filtering** — Filter projects by category (All / Full Stack / Backend & AI)
- 📜 **Scroll Animations** — Framer Motion viewport-triggered animations
- 🧭 **Active Nav Highlighting** — Auto-highlights current section in navbar
- 💬 **Contact Form API** — Express REST API stores messages in MongoDB
- 📱 **Fully Responsive** — Mobile-first design with hamburger menu
- 🎨 **Glassmorphism UI** — Modern backdrop-blur cards with glow effects
- ⬆️ **Scroll-to-Top** — Floating button appears on scroll
- 📄 **Resume Download** — One-click PDF download

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
| 7 | **Contact** | Form with API integration + email, phone, GitHub, LinkedIn |

---

## 🛠️ Tech Stack

### Frontend
- **React.js 19** — Component-based UI
- **Vite** — Lightning-fast build tool
- **Framer Motion** — Scroll & interaction animations
- **Lucide React + React Icons** — Icon libraries
- **Vanilla CSS** — Custom design system with CSS variables

### Backend
- **Node.js + Express.js** — REST API server
- **MongoDB + Mongoose** — Database & ODM
- **MVC Architecture** — Clean separation of concerns
- **CORS + dotenv** — Security & configuration

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- MongoDB (local or Atlas) — *optional, for contact form*

### Installation

```bash
# Clone the repository
git clone https://github.com/dhruvgupta9713-a11y/Dhruv-portfolio.git
cd Dhruv-portfolio

# Install frontend dependencies
npm install

# Start frontend dev server
npm run dev
# → Opens at http://localhost:5173
```

### Backend Setup (Optional)

```bash
# Navigate to server directory
cd server

# Install backend dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your MongoDB URI

# Start backend server
npm start
# → Runs at http://localhost:5000
```

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
│   │   ├── Contact.jsx/css     # Contact form + links
│   │   ├── Footer.jsx/css      # Footer with socials
│   │   └── ThemeToggle.jsx/css # Dark/light toggle
│   ├── App.jsx                 # Main app shell
│   ├── App.css                 # App-level styles
│   ├── index.css               # Design system & theme
│   └── main.jsx                # Entry point
├── server/
│   ├── controllers/
│   │   └── contactController.js # Contact form logic
│   ├── models/
│   │   └── Contact.js          # Mongoose schema
│   ├── routes/
│   │   └── contact.js          # API routes
│   ├── index.js                # Express server
│   ├── .env.example            # Environment template
│   └── package.json            # Backend dependencies
├── index.html                  # HTML entry with SEO meta
├── vite.config.js              # Vite configuration
└── package.json                # Frontend dependencies
```

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/contact` | Submit a contact message |
| `GET` | `/api/contact` | Retrieve all messages (admin) |
| `GET` | `/api/health` | Health check |

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

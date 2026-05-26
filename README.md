# Kaiytha Srinidhi Reddy - Professional AI & Full Stack Developer Portfolio

[![React](https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6.0-blueviolet?style=for-the-badge&logo=vite)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.15-ff007f?style=for-the-badge&logo=framer)](https://framer.com/motion)
[![Deploy on Vercel](https://img.shields.io/badge/Vercel-Deploy-black?style=for-the-badge&logo=vercel)](https://vercel.com)

A premium, highly interactive portfolio website for an **AI & Full Stack Developer** featuring a dark futuristic theme, glassmorphic layout, sleek scroll effects, dynamic cursor glow, and responsive design.

---

## 🚀 Key Features

* **AI Developer Branding:** Custom styled Hero section and clean layout tailored for AI/ML engineering recruiters.
* **Futuristic Theme:** Translucent glassmorphism (`backdrop-blur-xl`), animated custom particle canvas background, and custom interactive cursor light.
* **Staggered Entrance Animations:** Smooth entrance and scroll-reveal transitions driven by **Framer Motion**.
* **Responsive Layout:** Pixel-perfect adaptive styling for mobile, tablet, and ultra-wide desktop viewports.
* **SEO Optimized:** Complete semantic HTML tags, title layout, and structured meta-descriptions for optimal search discovery.
* **High Performance:** Lazy loading of below-fold sections via React `Suspense` to improve initial load speed.

---

## 🛠️ Project Structure

```
srinidhi-portfolio/
├── public/                 # Static assets (favicons, screenshots, resume.pdf)
├── src/
│   ├── components/
│   │   ├── layout/         # Layout shells (Navbar, Footer, CursorGlow, LoadingScreen)
│   │   ├── sections/       # Hero, About, Skills, Projects, Experience, Education, Achievements, etc.
│   │   └── ui/             # Reusable UI controls (Button, SectionHeading, ParticleBackground)
│   ├── data/               # Centralized configuration data (profile, skills, projects, experience, etc.)
│   ├── hooks/              # Custom React hooks (useScrollSpy, useTypingEffect)
│   ├── App.jsx             # Main Application Shell
│   ├── index.css           # Tailwind custom layer configurations
│   └── main.jsx            # React client mount entry
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## ⚡ Setup & Installation

### Prerequisites
* Ensure you have **Node.js 18+** and **npm** installed.

### 1. Clone & Install Dependencies
```bash
# Navigate to the portfolio folder
cd srinidhi-portfolio

# Install dependency tree
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build & Preview
```bash
# Compile and minify for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📝 Personalizing the Portfolio

Simply modify files under `src/data/` to customize all text, projects, and experiences:

| File Name | Purpose |
| :--- | :--- |
| `src/data/profile.js` | Update name, email, socials, bio summaries, and coordinates. |
| `src/data/skills.js` | Edit tech stack arrays (Programming, AI/ML, Full Stack, Tools). |
| `src/data/projects.js` | Add, update, or remove portfolio showcase projects. |
| `src/data/experience.js` | Fill in your professional experience and internship logs. |
| `src/data/education.js` | Customize your degree, institution details, and academic CGPA. |
| `src/data/achievements.js`| Highlight certifications and notable competitive wins. |

> [!IMPORTANT]
> **Resume PDF Setup:** Make sure to save your latest CV/resume PDF as `resume.pdf` inside the `public/` directory to make the **Download Resume** button work on the website.

---

## 🚀 Deployment to Vercel

The quickest way to deploy is through Vercel:

1. Push your code to a GitHub repository (see [Git Guide](#-git-github-instructions)).
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Keep the default build configurations (`Framework Preset: Vite`, `Build Command: npm run build`, `Output Directory: dist`).
5. Click **"Deploy"**. Vercel will build and host your portfolio with automatic SSL certificates!

---

## 💻 Git & GitHub Instructions

Initialize a repository, commit the files, and push to GitHub using the terminal commands below:

```bash
# 1. Initialize git local repository
git init

# 2. Add all files to staging index
git add .

# 3. Create initial commit
git commit -m "Initial commit: Professional AI developer portfolio"

# 4. Link to your GitHub remote repository (replace with your GitHub repository URL)
git remote add origin https://github.com/Srinidhi262005/srinidhi-portfolio.git

# 5. Rename branch to main
git branch -M main

# 6. Push local main branch to GitHub remote
git push -u origin main
```

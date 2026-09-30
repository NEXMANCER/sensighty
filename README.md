# Sensighty — Adaptive Assessment & Mastery Engine

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel)](https://vercel.com)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)

**Sensighty** is an intelligent, adaptive assessment and AI-guided mastery engine engineered for learners, educators, enterprises, and hiring teams.

Unlike traditional static tests that only measure surface recall, Sensighty continuously builds a live psychometric model of learner ability using **Item Response Theory (3PL IRT)**, pinpoints exact skill gaps, orchestrates targeted micro-remediation, and reassesses until durable mastery is mathematically confirmed.

---

## ✨ Features

- 🎯 **3PL Item Response Theory (IRT)**: Calibrates question difficulty in real time based on item discrimination, difficulty, and guessing parameters.
- 🔄 **Closed-Loop Remediation**: Automatically generates personalized micro-lessons and practice sets targeting identified misconceptions.
- 📊 **Live Skill-Gap Heatmaps & Dashboards**: Role-tailored dashboards for learners, instructors, enterprises, and hiring managers.
- 🛡️ **Behavioral & Psychometric Telemetry**: Flags anomalous testing patterns without invasive proctoring requirements.
- ⚡ **Ultra-Fast & Responsive**: Modern dark-mode UI styled with Tailwind CSS v4, smooth micro-animations, and full mobile optimization.
- 🚀 **Zero-Config Vercel Deployment**: Pre-configured with single-page app rewrites, asset caching, and lightning-fast edge delivery.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite 7](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: Custom SVG Vector Icons
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version `18.x` or higher recommended)
- `npm`, `yarn`, or `pnpm`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/carthworks/Sensighty-web.git
   cd Sensighty-web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deploying to Vercel

### Option 1: Deploy with Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: Connect via GitHub

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Deploy to Vercel"
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com/) and click **Add New Project**.
3. Import your **`Sensighty-web`** GitHub repository.
4. Vercel will automatically detect **Vite** and configure the build settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

---

## 📁 Project Structure

```
sensighty/
├── public/                 # Static assets (images, icons)
├── src/
│   ├── components/         # React modular UI components
│   │   ├── Navbar.tsx      # Fixed blur navigation header
│   │   ├── Hero.tsx        # Hero section with animated constellation & emblem
│   │   ├── WhatIsLoop.tsx  # 4-stage mastery loop architecture
│   │   ├── Problem.tsx     # Industry challenge comparison cards
│   │   ├── Capabilities.tsx# Numbered platform capabilities
│   │   ├── Impact.tsx      # Value and outcome statistics
│   │   ├── Solutions.tsx   # Tailored audience solution tabs
│   │   ├── Technology.tsx  # 3PL IRT convergence analytics
│   │   ├── Dashboards.tsx  # Product dashboard mockups & previews
│   │   ├── Security.tsx    # Enterprise & education security features
│   │   ├── Pilot.tsx       # Early access & pilot request form
│   │   ├── FAQ.tsx         # Interactive accordion FAQ
│   │   ├── Footer.tsx      # Clean footer with company attribution
│   │   └── Icon.tsx        # SVG icons & Nexmancer hexagon emblem
│   ├── data/
│   │   └── content.ts      # Site text, navigation, and structured data
│   ├── App.tsx             # Root page layout component
│   ├── main.tsx            # React DOM client entrypoint
│   └── index.css           # Tailwind CSS v4 & custom keyframe animations
├── index.html              # HTML shell & SEO meta tags
├── vercel.json             # Vercel deployment configuration & SPA routing
├── vite.config.ts          # Vite build & plugin configurations
└── package.json            # Project dependencies & npm scripts
```

---

## 📄 License

© 2026 Sensighty. All rights reserved.  
A product by **NEXMANCER**.

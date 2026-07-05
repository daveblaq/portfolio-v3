# David Oladele — Interactive Developer & AI Engineer Portfolio (v3)

A premium, highly interactive personal portfolio showcasing software engineering, AI automation pipelines, and custom systems architecture. Bootstrapped with **Next.js**, **TypeScript**, and **Tailwind CSS**, this portfolio integrates smooth momentum scrolling, immersive keyframe animations, and a rich textured design system.

Live Preview: [oladeledavid.xyz](https://oladeledavid.xyz)

---

## 🚀 Key Features

*   ✨ **Typographic Preloader:** A custom light-themed (Alabaster) overlay animating a progress counter (`000` to `100`) coupled with fading expertise keywords, locking page mounting until assets finish loading.
*   📜 **Momentum Smooth Scrolling:** Implements Lenis smooth-scrolling synced with GSAP's ScrollTrigger for fluid, inertia-based desktop navigation.
*   💫 **Adaptive Brand Tray:**
    *   *Desktop:* A macOS-inspired hover tray dock featuring interactive tech stack badges and cursor-tracking tooltip indicators.
    *   *Mobile:* Translates seamlessly into a full-width, infinite loop marquee animated via CSS keyframes.
    *   *Interaction:* All graphics are locked down using `pointer-events-none` to prevent interference with dragging or selecting.
*   📐 **Structured Information Architecture:** Logical layout mapping:
    *   `#about` — Core mission statement and feature cards (Full-Stack, AI Agent Orchestration, Infrastructure).
    *   `#experience` — Interactive corporate timeline with custom logos and active indicator nodes.
    *   `#projects` — Grid of projects utilizing curated descriptions, tech stack pill tags, and clean, responsive layouts that maintain screen aspect ratios without cropping.
    *   `#ai-showcase` — Floating tool Node graph highlighting AI integrations, LLM workflows, and vector architectures.
    *   `#contact` — High-fidelity glassmorphism mail hub and LinkedIn connection portal.
*   🎨 **Rich Textured Aesthetics:** Global double-overlay design mapping a vintage warmth tone (`#f3e9d2` with mix-blend-multiply) and a fractal noise generator (`mix-blend-overlay`) to produce a crispy, analog texture across all sections.
*   ⚙️ **SEO-Optimized Infrastructure:** Custom SVG icon/favicons, structured metadata headers (open-graph, Twitter cards), dynamic `sitemap.xml`, and crawl rules in `robots.txt`.

---

## 🛠️ Technology Stack

*   **Framework:** Next.js (App Router, Static Site Generation)
*   **Language:** TypeScript (Strictly typed schemas)
*   **Styles:** Tailwind CSS & Vanilla CSS (Fluid spacing, custom scrollbars, backdrop filters)
*   **Animations:** GSAP (ScrollTrigger & Context scopes), Framer Motion (Spring layout states)
*   **Media Assets:** Fast, responsive ImageKit hosting mappings
*   **Icons:** Lucide React

---

## ⚙️ Development & Set Up

### Prerequisites
*   Node.js (v18.x or later recommended)
*   npm, yarn, pnpm, or bun

### Local Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/daveblaq/portfolio-v3.git
   cd portfolio-v3
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Spin up the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 📦 Deployment & Production Build

### Compile Build
To compile a fully static, optimized production build:
```bash
npm run build
```
This generates a `.next` folder optimized for fast loading times and static caching.

### Deploying
The codebase is structured to be deployed instantly on **Vercel**, **Netlify**, or **AWS Amplify**:
- Auto-compiles dynamic routes into static page components.
- Generates `sitemap.xml` and `robots.txt` dynamically at build time.

---

## 📂 Project Structure

```
├── public/                 # Static assets (favicons, manifest)
├── src/
│   ├── app/                # Next.js App Router (Layouts, SEO headers, Global CSS)
│   │   ├── globals.css     # Tailwind imports, keyframe rules, scrollbar setups
│   │   ├── layout.tsx      # Global warmth/noise wrappers, SEO metadata
│   │   ├── page.tsx        # Preloader orchestration, page assembly
│   │   ├── robots.ts       # Crawl rules config
│   │   └── sitemap.ts      # Automated site index builder
│   └── components/         # Modular React Components
│       ├── NavBar.tsx      # Fixed navigation bar & profile branding
│       ├── Preloader.tsx   # Custom Light preloading timeline
│       ├── Hero.tsx        # Headshot, CTA, tech dock/marquees
│       ├── About.tsx       # Core values, developer identity
│       ├── WorkExperience.tsx # Work history timeline
│       ├── EducationSkills.tsx # Education credentials
│       ├── Projects.tsx    # Card grids, project data array
│       ├── AIShowcase.tsx  # Flowchart nodes, AI features
│       ├── Contact.tsx     # Contact buttons, glassmorphism card
│       └── Footer.tsx      # Social coordinates & copyright details
├── package.json            # Scripts & project dependencies
└── tailwind.config.ts      # Theme extensions & custom palette variables
```

---

## 👤 Author
*   **David Oladele** - Software Engineer & AI Automation Expert
*   Website: [oladeledavid.xyz](https://oladeledavid.xyz)
*   LinkedIn: [david-oladele](https://www.linkedin.com/in/david-oladele-b4ab85223/)

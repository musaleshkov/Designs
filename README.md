# 🎨 Designs

A curated collection of **12 modern web design projects** built with HTML5, CSS3, SCSS, and JavaScript — featuring glassmorphism, 3D effects, animated transitions, sliding interactions, and responsive layouts.

---

## 📂 Projects

| # | Project | Description | Technologies |
|---|---------|-------------|-------------|
| 1 | **3D Card Effect** | Interactive 3D-tilt product card with mouse tracking parallax | HTML, CSS, JS |
| 2 | **Airpods Effect** | Landing page for AirPods with GSAP/ScrollMagic animations | HTML, SCSS, GSAP, ScrollMagic |
| 3 | **Fashion Home** | Minimalist fashion brand landing page with social links | HTML, CSS |
| 4 | **Glassmorphism Card** | Frosted glass UI cards with blur/backdrop effects | HTML, SCSS |
| 5 | **Lamborghini Landing** | Animated supercar landing page with GSAP transitions | HTML, SCSS, GSAP |
| 6 | **Landing Slider Page** | Fullscreen image slider with Swiper.js and GSAP | HTML, SCSS, Swiper, GSAP |
| 7 | **Login Form** | Floating-label login form with animated focus states | HTML, CSS, JS |
| 8 | **Portfolio CV** | Multi-section portfolio/resume with ScrollReveal animations | HTML, SCSS, ScrollReveal |
| 9 | **Price Card** | Three-tier pricing cards with gradient pricing badges | HTML, SCSS |
| 10 | **Products Cards** | Product shop cards with hover-tilt label reveal | HTML, CSS |
| 11 | **SignIn SignUp Form** | Toggleable Sign In / Sign Up form with animations | HTML, SCSS, JS |
| 12 | **Glassmorphism Card** | Alternate glass-pane cards with circular gradients | HTML, SCSS |

---

## 🚀 Quick Start

1. **Clone** the repository:
   ```bash
   git clone https://github.com/musaleshkov/Designs.git
   ```

2. **Open** any project's `index.html` in your browser — no build step required.

3. For projects with **SCSS** files, compile with:
   ```bash
   npx sass scss/styles.scss css/styles.css
   ```

---

## 🛠 Tech Stack

- **HTML5** — Semantic markup, accessibility basics
- **CSS3** — Custom properties, Grid, Flexbox, animations, backdrop-filter
- **SCSS** — Nesting, variables, BEM methodology, media queries
- **JavaScript (ES6+)** — DOM manipulation, event handling
- **GSAP 3** — High-performance animations
- **Swiper.js** — Touch slider
- **ScrollMagic** — Scroll-driven animations
- **ScrollReveal** — Scroll-triggered reveals
- **Boxicons / Ionicons / Unicons** — Icon libraries
- **Google Fonts** — Typography

---

## 📋 Code Style & Conventions

- **CSS Methodology**: BEM (Block, Element, Modifier) naming
- **SCSS**: Nested selectors, `&` parent references, shared variables via `:root`
- **JavaScript**: `"use strict"` mode, arrow functions, `const`/`let` over `var`
- **Responsive Design**: Mobile-first `@media` queries with breakpoints at 320px, 568px, 768px, 968px, 1024px, 1200px

---

## 🔧 Recent Improvements

| Category | Changes Made |
|----------|--------------|
| **Bug fixes** | Fixed broken script reference, SCSS typo, `@media` query syntax, duplicate GSAP library conflict |
| **Code quality** | Consolidated `:root` blocks, replaced `nth-child()` with BEM modifiers, added `"use strict"` to all JS |
| **Architecture** | Moved inline GSAP to dedicated JS files, fixed `opacity: -1` → `0`, replaced `TimelineMax` with GSAP 3 API |
| **Accessibility** | Added proper `href="#"` on all placeholder links, improved focus state handling |

---

## 📄 License

MIT — feel free to use, modify, and learn from these designs.

---

> Crafted with ❤️ by [musaleshkov](https://github.com/musaleshkov)
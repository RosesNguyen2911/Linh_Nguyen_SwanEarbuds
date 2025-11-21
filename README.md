# 🦢 Swan Earbuds – Promotional Interactive Site  

### 🎧 *“Where Sound Becomes Art.”*  

---

## 📖 Overview  

This project is a **promotional website** for the conceptual product **Swan Earbuds**, designed to highlight the harmony between elegant design and advanced technology.  
It demonstrates responsive web design, animation, and 3D interactivity through the **model-viewer API**.  

## ✨ Completed Sections  

### ✔ Hero Section  
- Animated hero title, subtitle, CTAs, and hero image using **GSAP**  
- Gradient brand background inspired by the **Swan aesthetic**  
- Responsive layout for all devices  

### ✔ Mission & Vision  
- Scroll-triggered text animation describing design philosophy  
- Clean two-column layout with brand-inspired tone  

### ✔ Scroll-Driven 3D Sequence  
- Canvas-based **image sequence animation** for exploded earbud view  
- Fully smooth playback on **desktop & tablet**  
- Automatically switches to a **static fallback frame** on mobile for performance  

### ✔ X-Ray Slider Section  
- Exterior ↔ X-Ray **interactive reveal slider**  
- Custom thumb button using an SVG icon  
- Responsive scaling and bordered frame consistent with brand colors  

### ✔ Reflection Section (Color Swap)  
- Toggle between **Swan Pearl** and **Swan Noir** variants  
- Smooth crossfade animation and synchronized text updates  
- Dynamic visual reflection to match each colorway  

### ✔ 3D Model Viewer (AR Ready)  
- Fully interactive **360° rotatable earbuds**  
- AR support using `<model-viewer>`  
- Five animated hotspots with GSAP-powered info cards  

### ✔ Product Features  
- Three feature cards animated on scroll  
- Icons, titles, and descriptive text matching brand tone  
- Adaptive layout with hover/scroll enhancements  

### ✔ Benefits Section  
- Four benefits showcased with fade-in GSAP animations  
- Clean iconography and fast readability  

### ✔ Footer Section  
- Multi-column responsive footer layout  
- Contact info, navigation links, and socials  
- GSAP reveal animations on scroll  

---

## 💻 Features  

| Section | Description |
|----------|-------------|
| **Hero Section** | Introduces *Swan Symphony* with tagline and responsive CTAs. |
| **Mission & Vision** | Describes brand values, tone, and design principles. |
| **Video Scroll (Future)** | Planned smooth scroll-triggered product video reveal. |
| **Product Features** | Three informative feature cards with images and descriptions. |
| **3D Model-Viewer** | Users can rotate and inspect the earbuds in 360° or AR mode. |
| **GSAP Hotspots** | Appear dynamically and reveal detailed information. |
| **Model ↔ X-Ray Slide (Future)** | Planned drag comparison between exterior and internal parts. |
| **Color Reflection** | Switches product variants (Pearl & Noir) with animated transitions. |
| **Benefits Footer** | Displays store perks and navigation links. |

---

## 🛠️ Technologies Used  

| Technology | Purpose |
|-------------|----------|
| **HTML5 (Semantic)** | Clean, accessible, validated markup |
| **CSS Grid / Flexbox** | Responsive page structure |
| **SCSS / CSS3** | Custom styling and animations |
| **JavaScript (ES6)** | Logic, modular structure, interactivity |
| **GSAP 3** | Animation and transition control |
| **Model-Viewer API** | 3D and AR rendering directly in browser |
| **Font Awesome 6** | Icons for UI and hotspot visuals |
| **Google Fonts (Manrope)** | Elegant modern typography |


---
## 📂 Folder Structure  
> Organized using modular SCSS architecture, GSAP animations, and image-sequence workflow.

- **LINH_NGUYEN_SWAN_EARBUDS/**
  - `index.html`
  - `README.md`
  - `LICENSE`
  - `.gitignore`
  - `.gitkeep`

  - **css/**
    - `grid.css`
    - `main.css`
    - `main.css.map`

  - **images/**
    - `earbud_feature_1.png`
    - `earbud_feature_2.png`
    - `earbud_feature_3.png`
    - `earbuds_hero.svg`
    - `swan_pearl.png`
    - `swan_noir.png`
    - `swan_text_logo.svg`
    - (images sequences)**
      - `explode_0000.webp`
      - `explode_0001.webp`
      - `...`
      - `explode_0539.webp`  
      *(540-frame image sequence for scroll-driven animation)*

  - **js/**
    - `main.js`

  - **model/**
    - `Linh_Nguyen_Model Viewer Earbuds.gltf`

  - **sass/**
    - **abstracts/**
      - `_fonts.scss`
      - `_index.scss`
      - `_mixins.scss`
      - `_variables.scss`
    - **base/**
      - `_index.scss`
      - `_reset.scss`
      - `_typography.scss`
    - **components/**
      - `_benefits.scss`
      - `_colours.scss`
      - `_features.scss`
      - `_footer.scss`
      - `_header.scss`
      - `_hero.scss`
      - `_index.scss`
      - `_mission.scss`
      - `_modelviewer.scss`
      - `_videoscroll.scss`
      - `_xray.scss`
    - **utilities/**
      - `_animations.scss`
      - `_index.scss`
    - `main.scss`


## 🚀 How to Run  

1. Clone or download this repository.  
2. Open `index.html` in your browser.  
3. Interact with the **Scrolling Image Sequence Animation**, **3D model**, hover over **Hotspots**, and switch **Earbud Colors**.

---
## 🪶 Credits  

**Design & Development:** Linh Nguyen  
**Instructor:** Marco De Luca & Justin Brunner  
**Course:** MMED-3039 & MMED-3040  
**College:** Fanshawe College  
**Semester:** Level 3 – Fall 2025  


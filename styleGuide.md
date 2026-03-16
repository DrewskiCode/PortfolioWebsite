# 🧱 Portfolio Website Style Guide — Brutalist Dark Theme

---

## 1 Design Philosophy

### Style
- Minimalist brutalism
- Heavy geometric structure
- Stark contrast with bold layout blocks
- Raw industrial textures (concrete, grain, subtle noise)
- Dark, cinematic atmosphere

### Mood References
- A24 film title cards
- Adult Swim minimalist motion bumpers
- Behance brutalist UI showcases

---

## 2 Color Palette (Dark Brutalist)

### Base Colors
| Purpose | Color | Hex |
|---------|-------|-----|
| Background | Matte Black | `#0B0B0C` |
| Surface | Charcoal | `#15161A` |
| Elevated Panels | Gunmetal | `#1F2128` |

### Accent Colors  
Choose **ONE primary** + **ONE secondary**

| Name | Hex | Feel |
|------|-----|------|
| Industrial Orange | `#FF5A1F` | Energy / Impact |
| Acid Green | `#B4F000` | Tech / Futuristic |
| Electric Blue | `#3A86FF` | Digital / Modern |
| Concrete Gray | `#8A8F98` | Subtle / Minimal |

### Text Colors
| Purpose | Color | Hex |
|---------|-------|-----|
| Primary Text | Soft White | `#EDEDED` |
| Secondary Text | Cool Gray | `#9CA3AF` |

---

## 3 Typography

### Primary Font (Headings / Name)
**Space Grotesk**
- Geometric
- Modern
- Strong presence
- Ideal for brutalist layouts

### Alternative Brutalist Heading Fonts
- **Bebas Neue** — Tall, architectural
- **Archivo Black** — Heavy, impactful

### Body Font
**Inter**
- Clean
- Highly readable
- Modern UI standard

### Typography Styling Rules
- ALL CAPS headings
- Wide letter spacing for section titles
- Oversized hero typography
- Strong weight contrast (900 vs 300)
- Tight line-height for bold headings

---

## 4 Layout Structure

### Overall Layout Principles
- Full-screen vertical sections
- Hard edges (NO rounded corners)
- Strict visible grid structure
- Thick divider lines
- Asymmetrical block placements
- Intentional large negative space
- Modular geometric content blocks

---

## 5 Hero Animation — Signature Moment

### Intro Sequence: “Impact Landing”

#### Scene Setup
- Screen starts fully black
- Faint concrete texture fades in
- Subtle camera shake begins

#### Main Animation
- Text: **“DREW FLOYD”**
- Falls from above screen with gravity acceleration
- Motion blur applied during fall
- Text slams onto a concrete slab

#### Impact Effects
- Deep bass impact sound
- Concrete slab cracks using fracture texture
- Dust cloud particle simulation expands outward
- Small debris particles scatter
- Subtle screen shake on impact

#### After Impact
- Dust slowly settles
- Name remains embedded in slab
- Hairline cracks remain visible
- Tagline fades in beneath name

#### Recommended Tools
- React + CSS animations
- Framer Motion (physics-based motion)
- HTML Canvas API (dust particles)
- SVG fracture overlays (crack effects)

---

## 6 Section Structure & Animations

### About Section

#### Layout
- Split-screen design
- Left: Bio text
- Right: Geometric portrait frame

#### Animations
- Fade-in with slight upward slide
- Grid lines draw in like blueprint schematics

---

### Projects Section

#### Layout
- Brutalist card grid
- Hard rectangular frames
- Monochrome thumbnails

#### Hover Effects
- Image transitions grayscale → color
- Card lifts upward with sharp shadow
- Corner accent line animates outward

#### Scroll Reveal
- Cards reveal with staggered upward motion

---

### Resume Section

#### Layout
- Vertical timeline
- Industrial divider lines
- Section labels on left
- Content blocks on right

#### Animations
- Timeline line draws downward while scrolling
- Entries fade in sequentially

---

### Contact Section

#### Layout
- Minimal centered composition
- Brutalist block-style buttons

#### Button Interactions
- Sharp color inversion on hover
- Subtle physical press animation on click

---

## 7 Micro-Interactions

- Cursor transforms into small square
- Buttons depress like mechanical switches
- Page transitions use hard cuts (no soft fades)
- Subtle grain overlay across entire site
- Occasional analog-style screen flicker
- Sharp hover state transitions

---

## 8 Background & Textures

### Texture Elements
- Concrete surfaces
- Film grain overlays
- Subtle noise gradients
- Industrial scratches and wear

### Depth Effects
- Slight parallax scrolling
- Soft spotlight gradients behind sections
- Layered background depth

---

## 9 Navigation

### Style
- Minimal fixed top navigation bar
- Thin industrial divider line
- Uppercase section labels

### Hover Effects
- Underline grows from center outward

### Mobile Navigation
- Brutalist slide-in side menu (from left)
- Large tap targets
- Full-height menu panel

---

## 10 Tech Stack

### Frontend
- React
- Tailwind CSS
- Framer Motion

### Visual Effects
- HTML Canvas API (dust & particles)
- SVG filters (cracks, distortion, lighting effects)

### Deployment
- GitHub Pages

### Development Tools
- Visual Studio Code
- GitHub Copilot

---

## 11 Performance Considerations

- Lazy-load all images
- Compress texture assets
- Limit particle simulation counts
- Use transform-based animations
- Avoid layout-triggering animations
- Code-split heavy components
- Optimize font loading

---

## 12 Optional Advanced Features

- Dark / Light mode toggle  
  *(Industrial Dark = default)*

- Hidden easter egg interactions

- Vertical scroll progress indicator bar

- Live interactive project demos

- Subtle ambient background motion

---

## Design Goals Summary

This portfolio should feel:

- Bold
- Engineered
- Cinematic
- Minimal yet powerful
- Industrial and tactile
- Technically sophisticated
- Memorable through motion and impact
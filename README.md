# Raajika Properties (RKM Projects) — Restored Source Code

Recovered and reconstructed source codebase for **Raajika Properties (RKM Projects | Luxury Dubai Real Estate)**.

Live Website: [https://raajikaproperties.in/](https://raajikaproperties.in/)

---

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/) (`lenis/react`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Lead Generation**: Google Apps Script Webhook integration
- **Styling Utilities**: `clsx` + `tailwind-merge`

---

## 📂 Project Structure

```text
RK/
├── public/
│   ├── .htaccess             # Apache / Hostinger SPA routing fallback
│   ├── _redirects            # Netlify SPA redirect rule
│   └── images/               # 100% recovered original assets
│       ├── logo-transparent.png
│       ├── palm-villa.png
│       ├── burj-penthouse.png
│       ├── emirates-mansion.png
│       ├── marina-sunset.jpg
│       ├── luxury-balcony.jpg
│       ├── downtown-apt.png
│       ├── burj-heritage.png
│       └── founder.png
├── src/
│   ├── components/
│   │   ├── Logo.jsx          # Dynamic logo with nav/hero/footer variants
│   │   ├── Button.jsx        # Premium button (primary, outline, glass)
│   │   ├── Navbar.jsx        # Responsive navigation with scroll shrink
│   │   ├── Footer.jsx        # DIFC HQ, contact links, newsletter
│   │   ├── PageTransition.jsx# Smooth route transitions via Framer Motion
│   │   └── home/
│   │       ├── Hero.jsx      # Slideshow, parallax text, ambient lights
│   │       ├── WhyInvest.jsx # Horizontal scroll Dubai ROI stats
│   │       ├── FeaturedProperties.jsx # Sticky stacked cards
│   │       ├── InteractiveMap.jsx    # Pulsing hotspot pins
│   │       ├── CuratedPortfolio.jsx  # Horizontal scroll showcase
│   │       ├── SignatureLiving.jsx   # Lifestyle imagery & typography
│   │       └── CallToAction.jsx      # Closing consultation CTA
│   ├── pages/
│   │   ├── Home.jsx          # Homepage assembling all sections
│   │   ├── Invest.jsx        # Wealth creation & yield comparison (9% vs 2.5%)
│   │   ├── Properties.jsx    # Live search & filter (All / Villa / Apartment)
│   │   ├── Lifestyle.jsx     # High-life experience showcase & quote
│   │   ├── About.jsx         # Heritage, founder Ravi Kumar Manda & milestones
│   │   └── Talk.jsx          # Advisory form (Google Webhook), WhatsApp & DIFC map
│   ├── utils/
│   │   └── cn.js             # Classnames merge utility
│   ├── App.jsx               # App routing, ScrollToTop, Lenis provider
│   ├── index.css             # Tailwind v4 theme, fonts, custom classes
│   └── main.jsx              # React DOM root entry
├── index.html                # Google Fonts (Plus Jakarta Sans & Playfair Display)
├── vite.config.js            # Vite + React + Tailwind v4 configuration
├── vercel.json               # Vercel SPA routing
└── package.json
```

---

## 🚀 Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` folder.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploying to Hostinger (Live Hosting)
1. Run `npm run build`.
2. Open Hostinger **hPanel** -> **File Manager** -> `public_html`.
3. Upload all files from the `dist/` directory into `public_html/`.
4. Ensure the `.htaccess` file is present in `public_html` (included in `public/` and automatically copied to `dist/`). This prevents 404 errors when reloading inner pages like `/properties` or `/talk`.

### Deploying to Vercel
1. Push the code to a Git repository (GitHub / GitLab).
2. Import the repository into [Vercel](https://vercel.com/).
3. Framework Preset: **Vite**.
4. Root Directory: `./`.
5. Click **Deploy**. The included `vercel.json` ensures all SPA routes work immediately.

### Deploying to Netlify
1. Connect repository or drag-and-drop the `dist` folder into Netlify.
2. The included `_redirects` file ensures clean client-side routing.

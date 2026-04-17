# Andrew B. Limpiada Jr. Portfolio

A modern minimalist personal portfolio built with **React + Vite**, **Tailwind CSS**, **Framer Motion**, and **GSAP**.

## Features

- Dark and light theme support
- Matrix-inspired Binary Rain theme
- Glassmorphism design
- Responsive layout with mobile-first navigation
- Animated hero section and button transitions
- Project carousel with active card focus
- Interactive "Guess My Hobby" mini-game
- Contact form with validation
- Scroll progress indicator
- Loading screen animation

## Getting Started

### Install dependencies

```bash
cd "c:\Users\andre\OneDrive\Desktop\andrewjr's_portfolio"
npm install
```

### Run locally

```bash
npm run dev
```

Open the local URL shown in the terminal to view the portfolio.

### Build for production

```bash
npm run build
```

The production-ready output is generated in the `dist/` folder.

## Vercel Deployment

### Option 1: Deploy via Vercel CLI

1. Install Vercel:
   ```bash
   npm install -g vercel
   ```
2. Deploy:
   ```bash
   vercel
   ```
3. Follow the prompts and choose the current project directory.

### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com/) and sign in.
2. Create a new project and import the Git repository.
3. Set the framework preset to `Vite`.
4. Use the default build command:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Deploy the project.

## Project Structure

```
/src
  /components
  /context
  /data
  App.jsx
  main.jsx
/index.html
/package.json
/tailwind.config.js
/postcss.config.js
/vite.config.js
/README.md
```

## Notes

- Theme selection is saved in `localStorage`.
- The `Binary Rain` theme uses a canvas animation with GSAP fade-in.
- Update the social links in `src/components/Contact.jsx` to include your actual GitHub and LinkedIn URLs.
"# andrew-portfolio" 

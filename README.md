# Woodi Modular Kitchen — Website

A modern, mobile-first static website for **Woodi Modular Kitchen** built with Next.js 14, TypeScript, and Tailwind CSS. Optimised for GitHub Pages deployment.

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js 18 or higher
- npm

### Install & Run

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Build for Production

```bash
npm run build
```

This generates a fully static site in the `/out` folder — ready for GitHub Pages.

---

## 📦 Project Structure

```
woodi/
├── app/
│   ├── layout.tsx          # Root layout (Navbar, Footer, WhatsApp button)
│   ├── globals.css         # Design system, animations, fonts
│   ├── page.tsx            # Home page
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── services/
│   │   └── page.tsx        # Services page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── Navbar.tsx          # Responsive navbar with hamburger
│   ├── Footer.tsx          # Footer with links and contact
│   ├── WhatsAppButton.tsx  # Floating WhatsApp CTA
│   └── useScrollReveal.ts  # Scroll animation hook
├── public/
│   └── images/             # ← Place your photos here
├── .github/
│   └── workflows/
│       └── deploy.yml      # Auto-deploy to GitHub Pages
├── next.config.js          # Static export config
├── tailwind.config.js
└── package.json
```

---

## 🖼️ Adding Your Photos

Replace the gradient placeholders with real photos by placing images in `/public/images/` and updating the relevant sections:

| Location | File | Notes |
|---|---|---|
| Home hero background | `public/images/hero-kitchen.jpg` | Landscape, min 1400px wide |
| About — Ketan's photo | `public/images/ketan-shah.jpg` | Portrait orientation |
| Services — kitchen gallery | `public/images/kitchen-1.jpg` to `kitchen-6.jpg` | Square or landscape |
| Services — wardrobe gallery | `public/images/wardrobe-1.jpg` to `wardrobe-4.jpg` | Square |

In the code, replace gradient `<div>` placeholders with Next.js `<Image>` tags:

```tsx
import Image from 'next/image'

// Replace the gradient div with:
<Image
  src="/images/hero-kitchen.jpg"
  alt="Woodi modular kitchen"
  fill
  className="object-cover"
/>
```

---

## 🌐 Deploying to GitHub Pages

### Step 1 — Create a GitHub Repository

1. Go to [github.com](https://github.com) → **New repository**
2. Name it `woodi-kitchen` (or anything you like)
3. Set it to **Public**
4. Don't initialise with README (you already have files)

### Step 2 — Push your code

```bash
cd woodi
git init
git add .
git commit -m "Initial commit — Woodi website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/woodi-kitchen.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Save

### Step 4 — Auto Deploy 🎉

Every time you push to `main`, the site automatically builds and deploys. Your site will be live at:

```
https://YOUR_USERNAME.github.io/woodi-kitchen/
```

### Step 5 — Custom Domain (Optional)

If you have `woodikitchen.com`:

1. Go to repo **Settings → Pages → Custom domain**
2. Enter `woodikitchen.com`
3. Add these DNS records at your domain registrar:

```
Type    Name    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     YOUR_USERNAME.github.io
```

4. Check **Enforce HTTPS** once DNS propagates (~24hrs)

---

## 🎨 Customisation

### Colors (globals.css)
```css
:root {
  --cream: #F5F0E8;       /* Page background */
  --terracotta: #C17A4A;  /* Primary accent */
  --bark: #6B3D1E;        /* Dark wood tone */
  --charcoal: #2C2416;    /* Dark sections */
}
```

### Fonts
The site uses Google Fonts:
- **Playfair Display** — headings
- **Lora** — body text
- **DM Sans** — labels, buttons, UI

### Logo
Once you have a logo file, place it in `/public/images/logo.png` and update `components/Navbar.tsx` to use an `<Image>` tag instead of the text wordmark.

---

## 📱 Mobile-First

All pages are designed mobile-first:
- Hamburger navigation on mobile
- Touch-friendly tap targets (min 44px)
- Readable font sizes on small screens
- Stacked layouts that reflow to grid on desktop

---

## ✅ SEO

- Structured data (JSON-LD LocalBusiness schema)
- Open Graph meta tags
- Canonical URL
- Semantic HTML headings
- Descriptive alt texts (add when replacing placeholder images)
- `trailingSlash: true` for clean GitHub Pages URLs

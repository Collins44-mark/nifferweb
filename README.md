# Niffer Cosmetics

A multi-page e-commerce website for cosmetics, fashion, and accessories. Built with vanilla HTML, CSS, JavaScript, and Tailwind CSS.

## Project Structure

```
niffer_cosmetics/
├── index.html          # Home page
├── shop.html           # Shop with filters
├── product.html        # Product detail (use ?id=1)
├── cart.html           # Shopping cart
├── checkout.html       # Checkout
├── about.html          # About us
├── contact.html        # Contact form
├── src/
│   └── input.css       # Tailwind source (edit this)
├── css/
│   └── output.css      # Built CSS (generated)
├── js/
│   ├── products.js     # Product data
│   ├── app.js          # Cart, formatting, utilities
│   └── nav.js          # Nav initialization
├── tailwind.config.js
├── package.json
└── README.md
```

## Features

- **Currency:** All prices in TZS (Tanzanian Shillings), e.g. Tsh 35,000
- **Real Images:** Product images from Unsplash
- **Cart:** Persisted in localStorage across pages
- **Pages:** Home, Shop, Product, Cart, Checkout, About, Contact

## Quick Start

1. Build CSS (first time or after style changes):
   ```bash
   npm install
   npm run build
   ```
2. Open `index.html` in a browser, or run a local server:
   ```bash
   npx serve .
   ```

For development with auto-rebuild on CSS changes:
```bash
npm run watch
```

## Customization

- Edit `js/products.js` to change products
- Edit `src/input.css` for styling, then run `npm run build`
- Edit `js/app.js` for cart and utility functions

# LumaSkin Store

A glassmorphic Nuxt 4 skincare storefront with category filters, product detail dialogs, cart interactions, an editorial section, and a separate product-management admin demo. REST APIs support optional PostgreSQL persistence with built-in fallback data.

## Start
```bash
npm install
npm run dev
```
Open `/` for the store and `/admin` for the catalog-management demo.

## Optional PostgreSQL
Copy `.env.example` to `.env`, set `DATABASE_URL`, and run `database/schema.sql`.

## Build
```bash
npm run build
npm run preview
```

All products and metrics are sample portfolio data. Copy avoids medical guarantees and the demo processes no payment.

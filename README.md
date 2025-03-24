[![CI](https://github.com/jorgebaptista/planet-releaf/actions/workflows/main.yml/badge.svg)](https://github.com/jorgebaptista/planet-releaf/actions/workflows/main.yml)
![Website Deploy](https://deploy-badge.vercel.app/api/?url=https://planet-releaf.vercel.app/&style=for-the-badge&logo=vercel&name=Planet%20ReLeaf)

# Planet Releaf

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Access the vercel deployment: [planet-releaf.vercel.app](https://planet-releaf.vercel.app/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 🛰️ Data Sources

- **Global Forest Watch API**  
  Used for retrieving real-time and historical deforestation data for Portugal.  
  📎 https://data-api.globalforestwatch.org

- **OpenStreetMap**  
  Tile provider for the base Leaflet map.  
  📎 https://www.openstreetmap.org


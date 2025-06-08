![Website Deploy](https://deploy-badge.vercel.app/api/?url=https://planet-releaf.vercel.app/&style=for-the-badge&logo=vercel&name=Planet%20ReLeaf)
[![Open Issues](https://img.shields.io/github/issues/jorgebaptista/planet-releaf?style=for-the-badge)](https://github.com/jorgebaptista/planet-releaf/issues)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

[![CI](https://github.com/jorgebaptista/planet-releaf/actions/workflows/main.yml/badge.svg)](https://github.com/jorgebaptista/planet-releaf/actions/workflows/main.yml)
[![Code Style](https://img.shields.io/badge/Code%20Style-Prettier-ff69b4.svg?style=for-the-badge)](https://prettier.io)
[![Code Quality](https://img.shields.io/badge/Code%20Quality-ESLint-4B32C3.svg?style=for-the-badge)](https://eslint.org)


# 🌱 Planet Releaf

Planet ReLeaf is a full-stack demo web application designed to demonstrate how companies can offset carbon emissions through interactive drone-based reforestation projects. Built using Next.js and deployed continuously via GitHub Actions and Vercel, this project showcases professional-grade pipelines, modern frontend development, and thoughtful architecture.

## 🚀 Live Demo

🌎 [planet-releaf.vercel.app](https://planet-releaf.vercel.app)

## 📚 Features

- **Interactive Map**: Powered by Leaflet and OpenStreetMap, showcasing deforestation areas and potential reforestation zones.
- **Carbon Credits & Metrics Dashboard**: Dynamic, interactive UI presenting environmental metrics for participating companies.
- **Drone Mission Simulation**: Visual drone animation demonstrating reforestation activities.
- **Responsive Design**: Tailwind CSS provides a sleek, responsive, and professional UX/UI across all devices.

## 🛠️ Tech Stack

- Next.js (App Router)
- React & Tailwind CSS
- Leaflet.js for interactive mapping
- Axios for API integration
- Framer Motion for animations

## 🛰️ Data Sources

- **Global Forest Watch API**  
  Used for retrieving real-time and historical deforestation data for Portugal.  
  📎 [Global Forest Watch](https://data-api.globalforestwatch.org)

- **OpenStreetMap**  
  Tile provider for the base Leaflet map.  
  📎 [OpenStreetMap](https://www.openstreetmap.org)

## 🚦 CI/CD Pipeline (GitHub Actions)

This project showcases a professional-grade CI/CD pipeline:

- Automatically runs linting and formatting checks (ESLint, Prettier).
- Validates build integrity, catching errors early.
- Deploys automatically to Vercel upon successful checks on merges to the main branch.

## 💻 Getting Started

First, clone the repository:

```bash
git clone https://github.com/jorgebaptista/planet-releaf.git
cd planet-releaf
```

Install the dependencies and run the development server:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 📝 Future Improvements

- Enhance drone mission animations.
- Add user authentication and full integration of company-specific dashboards.
- Implement additional real-world data sources and improved heatmaps.
- Use AI to predict reforestation success rates based on historical data.
- And much more!

## 📫 Contact

Have questions or suggestions? [jorgebaptista.info@gmail.com](mailto:jorgebaptista.info@gmail.com)

> 🚧 Note: This project was made for the Tecstorm hackathon and now serves primarily as a portfolio piece showcasing frontend development skills, thoughtful DevOps integration, and application architecture.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue to discuss improvements or new features.

> 🌱 Let's make the world greener, one drone at a time!

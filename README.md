<div align="center">

# 🌍 Countries Explorer

### Premium World Nations Data Visualization & Analytics Platform

*A real-time REST Countries API dashboard built with React 19, Recharts, and DaisyUI — explore population, regions, currencies, and languages across 250+ nations.*

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-countries--explorer.vercel.app-6366f1?style=for-the-badge)](https://countries-explorer-coderguy47.vercel.app/)
&nbsp;
[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
&nbsp;
[![Vite 8](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
&nbsp;
[![REST Countries](https://img.shields.io/badge/API-REST_Countries-4ade80?style=for-the-badge)](https://restcountries.com/)

</div>

---

## 📖 Table of Contents

- [✨ Overview](#-overview)
- [❌ The Problem & ✅ The Solution](#-the-problem---the-solution)
- [💡 Business Value & Analytics](#-business-value--analytics)
- [🚀 Key Features](#-key-features)
- [📦 Tech Stack & Architecture](#-tech-stack--architecture)
- [📂 Project Structure](#-project-structure)
- [🛠️ Installation & Setup](#️-installation--setup)
- [🚢 Production Deployment](#-production-deployment)
- [🤝 Social & Contributing](#-social--contributing)

---

## ✨ Overview

**Countries Explorer** is a live data visualization dashboard that fetches and renders rich geographic and demographic information for all 250+ world nations via the **REST Countries API**. Built on **Vite 8** and **React 19** with **Tailwind CSS v4**, **DaisyUI v5**, and **Recharts**, the platform enables users to filter, sort, and visualize countries by population, region, subregion, and language distribution.

API requests are handled via **Axios** with clean async/await patterns, and Recharts bar/area charts transform raw population and region data into stunning analytical visual summaries.

---

## ❌ The Problem & ✅ The Solution

> **World geography data is scattered across dozens of inaccessible reference sources.**

| ❌ The Problem | ✅ Countries Explorer's Solution |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| Country data buried in heavy government and wiki sites | **Live REST Countries API** pulling fresh data with instant page renders |
| No visual comparison tools for population or land area | **Recharts bar charts** enabling side-by-side country comparisons |
| Static maps with no interactive data points | **DaisyUI flag cards** with hover detail panels for flag, capital, and currency |
| Long search times through alphabetical country lists | **Debounced search input** filtering 250+ countries in real time |
| No regional filtering for focused geographic study | **Region/subregion dropdown** narrowing results to specific global zones |

---

## 💡 Business Value & Analytics

| Feature | Impact |
| --------------------------------- | ------------------------------------------------------------------------------- |
| **Axios + REST Countries** | Real-time data fetching ensures information is always up to date |
| **Recharts Visualizations** | Converts raw population numbers into intuitive comparative analytics |
| **DaisyUI Grid Cards** | Consistent flag card layout scales effortlessly from 5 to 250+ countries |

---

## 🚀 Key Features

- **🌏 250+ Country Cards** — Flag, capital, region, population, and currency displayed per card.
- **📊 Analytics Charts** — Recharts bar/area charts comparing population across regions.
- **🔍 Real-Time Search** — Instantly filter countries by name with debounced input.
- **🗺️ Region Filter** — Dropdown to narrow results by Africa, Asia, Europe, Americas, and Oceania.
- **📡 Live API Data** — Axios-powered REST Countries API requests on every session.

---

## 📦 Tech Stack & Architecture

| Layer | Technology |
| -------------------------- | ----------------------------------------------------- |
| **Framework** | `react@^19.2.4` |
| **Build Tool** | `vite@^8.0.1` |
| **Styling** | `tailwindcss@^4.2.2` + `daisyui@^5.5.19` |
| **API Client** | `axios@^1.13.6` |
| **Charts** | `recharts@^3.8.0` |
| **Icons** | `react-icons@^5.6.0` |

---

## 📂 Project Structure

```text
countries/
├── src/
│   ├── components/     # CountryCard, SearchBar, RegionFilter, Charts
│   ├── hooks/          # useCountries, useSearch custom hooks
│   └── App.jsx
├── index.html
└── vite.config.js
```

---

## 🛠️ Installation & Setup

1. **Clone & Install**

   ```bash
   git clone https://github.com/CoderGUY47/countries.git
   cd countries
   npm install
   ```

2. **Run Locally**

   ```bash
   npm run dev
   ```

---

## 🚢 Production Deployment

- **Hosting:** Deployed on **Vercel** via automatic Git integration.
- **Build Command:** `npm run build`
- **Output Directory:** `dist/`

---

## 🤝 Social & Contributing

<div align="center">

Produced with precision by **[CoderGUY47](https://github.com/CoderGUY47)**.

[![GitHub](https://img.shields.io/badge/GitHub-CoderGUY47-181717?style=for-the-badge&logo=github)](https://github.com/CoderGUY47)

</div>

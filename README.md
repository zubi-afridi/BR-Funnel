# BR Funnel - High-Performance Landing Page

<div align="center">
  <p>A modern, high-converting React landing page built for agencies focused on scaling revenue through Email & SMS marketing.</p>
</div>

---

## 🚀 Key Features and Functionality

*   **Responsive & Mobile-Optimized:** Flawless experience across desktop, tablet, and mobile devices.
*   **Scroll-Triggered Animations:** Seamless reveal effects powered by Framer Motion to keep users engaged.
*   **Advanced Navigation:** Intersection Observer-based smooth scrolling that precisely syncs URL paths with the active viewport section.
*   **Dynamic UI Components:** Features a custom Revenue Framework timeline, interactive Booking Calendar, and robust Portfolio/Success Stories sections.
*   **Modern Design System:** Premium aesthetics featuring glassmorphism elements, custom gradients, and a cohesive dark-themed visual language.

## 🛠️ Technologies and Tools Used

*   **[React 19](https://react.dev/)**: Modern UI component architecture.
*   **[TypeScript](https://www.typescriptlang.org/)**: Strict static typing for resilient, maintainable code.
*   **[Vite](https://vitejs.dev/)**: Next-generation lightning-fast frontend tooling.
*   **[Tailwind CSS v4](https://tailwindcss.com/)**: Utility-first CSS framework for rapid and highly customizable styling.
*   **[Framer Motion](https://www.framer.com/motion/)**: Production-ready animation library for React.
*   **[Ant Design (antd)](https://ant.design/)**: Enterprise-class UI design language and component library.
*   **[React Router DOM](https://reactrouter.com/)**: Powerful routing and navigation.

## ⚙️ Installation and Setup Instructions

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

1.  **Clone the repository** (if applicable):
    ```bash
    git clone https://github.com/your-username/br-funnel.git
    cd br-funnel
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will automatically open or be available at `http://localhost:5173`.

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 📖 Usage Guide

*   **Development:** The main entry point is `src/main.tsx` and the core routing wrapper is `src/App.tsx`. The landing page structure is assembled in `src/pages/Home.tsx`.
*   **Styling:** Global styles and Tailwind imports are located in `src/index.css`. Component-specific styles utilize Tailwind classes directly within TSX files.
*   **Modifying Content:** Update copy or images directly in the respective module under `src/sections/` (e.g., `Hero.tsx`, `CTASection.tsx`).

## 📂 Project Structure Overview

```text
br-funnel/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Images, SVG icons, and media
│   ├── components/         # Reusable UI elements (Buttons, Containers, Layouts)
│   ├── layouts/            # Page layout wrappers (e.g., MainLayout.jsx)
│   ├── pages/              # Top-level page components (e.g., Home.tsx)
│   ├── sections/           # Modular landing page sections (Hero, Services, etc.)
│   ├── theme/              # Design tokens and theme configuration
│   ├── utils/              # Helper functions and shared configs (e.g., animationVariants)
│   ├── App.tsx             # Root React component and Router provider
│   ├── index.css           # Global stylesheet and Tailwind entry
│   └── main.tsx            # React DOM rendering entry point
├── package.json            # Project dependencies and scripts
├── vite.config.ts          # Vite configuration
└── tailwind.config.js*     # Tailwind setup (handled via v4 Vite plugin)
```

## 📸 Screenshots / UI Preview

*(Replace the placeholder descriptions below with actual screenshots of your project)*

### Hero Section
![Hero Section Placeholder](https://via.placeholder.com/800x400.png?text=Hero+Section+Screenshot)
> The high-impact introductory section featuring animated statistics and strategic call-to-actions.

### Revenue Framework
![Revenue Framework Placeholder](https://via.placeholder.com/800x400.png?text=Revenue+Framework+Screenshot)
> Visually engaging timeline detailing the process.

## 📌 Important Notes & Assumptions

*   **Navigation IDs:** The smooth scrolling logic requires specific HTML `id` attributes on sections in `Home.tsx` to function properly (e.g., `#contact`, `#case-studies`).
*   **React 19 Compatibility:** Ensure any freshly installed third-party libraries are compatible with React 19.
*   **Animations:** Reveal animations rely on viewport visibility. Ensure wrapper heights are properly defined to prevent thrashing.

## 🚀 Future Improvements

*   **Backend Integration:** Wire up the Booking Calendar and CTA forms to a backend CRM or email API (e.g., SendGrid, HubSpot).
*   **Dynamic CMS:** Implement a headless CMS (like Sanity or Strapi) to manage Portfolio and Success Stories data dynamically.
*   **Dark/Light Mode:** Implement a user-facing toggle that hooks into the Tailwind theme configuration.
*   **Performance:** Enable lazy loading for below-the-fold sections and optimize heavyweight assets to improve initial load times.

## 🤝 Author / Contributing

*   **Author:** The BR Funnel Team
*   **Contributions:** Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

---
*Built with ❤️ focusing on high-performance web standards.*

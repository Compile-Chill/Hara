# 🌟 Hara - Personalized Skin Care Routines Consultant

Hara is a web app created with Next.js, React and TypeScript that generates personalized skin care routines.

Using an interactive questionnaire and data analysis, it recommends products based on the user's skin type, habits and budget. It also allows for tracking and adjusting the routine over time.

It is a useful solution for brands or projects looking to offer automated skincare recommendations, with a modern, accessible and scalable approach.

---

### 🖼️ Preview

![demo1](./assets/demo1.JPG)

![demo2](./assets/demo2.JPG)

### ✨ Demo in action

![Demo](./assets/demo.gif)

---

## 📂 Project structure

```
frontend-hara/
├── .gitignore              # Files and folders ignored by Git
├── eslint.config.mjs       # ESLint configuration for code quality and consistency
├── next.config.js          # Next.js project configuration
├── package.json            # Project metadata, dependencies, and scripts
├── README.md               # Main project documentation
├── tsconfig.json           # TypeScript configuration
├── yarn.lock               # Yarn lockfile for consistent dependency versions
└── src/                    # Application source code
    └── app/                # Main app directory following Next.js 13+ convention
        ├── layout.tsx      # Root layout that wraps all pages
        ├── page.tsx        # Main landing page (home)
        ├── globals.css     # Global styles for the entire app
        └── components/     # Reusable UI components used in the main layout/page
            ├── BestsellerSection.tsx   # Section highlighting best-selling products
            ├── Footer.tsx              # Website footer component
            ├── HeroSection.tsx         # Hero section with main CTA (call to action)
            └── Navbar.tsx              # Top navigation bar
    └── hooks/               # Custom React hooks for reusable logic
        └── useLanguage.ts   # Detects browser language and dynamically loads locale messages
    └── i18n/                # Internationalization (i18n) configuration
        ├── config.ts        # i18n setup and language switch logic
        └── messages/        # Translation files organized by language
            ├── en.json      # English translations
            ├── es.json      # Spanish translations
            └── fr.json      # French translations
```
---

## 📄 License

This project is licensed under the MIT license.

## 📚 Sources of information

* Next.js official documentation: https://nextjs.org/docs

* Official TypeScript documentation: https://www.typescriptlang.org/docs

* ESLint Guide: https://eslint.org/docs/latest/

* Yarn guide: https://yarnpkg.com/getting-started

* Domain Driven Design (DDD) in frontend: https://khalilstemmler.com/articles/domain-driven-design-intro/

* React components and props: https://react.dev/learn/passing-props-to-a-component

* Tailwind CSS: https://tailwindcss.com/docs/installation/using-vite


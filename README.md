# Hara - Personalized Skin Care Routines Consultant 

Hara is a platform designed to help people build personalized skin care routines. Through an interactive questionnaire and data analysis, it offers recommendations tailored to each user.

## 📂 Project Structure

The frontend is based on React with TypeScript and follows a modular structure (DDD - Domain Driven Design) for easy scalability and maintenance.

- [`/public`](#public)
  - [`index.html`](#indexhtml): Main HTML file
  - [`favicon.ico`](#faviconico): Site icon
- [`/src`](#src)
  - [`/modules`](#modules)
    - [`/auth/`](#auth): Authentication
    - [`/profile/`](#profile): User profile
    - [`/evaluation/`](#evaluation): Skin evaluation
    - [`/routines/`](#routines): Personalized routines
    - [`/products/`](#products): Recommended products
    - [`/community/`](#community): Community and recommendations
  - [`/shared`](#shared)
    - [`components/`](#components): Global components (buttons, headers, etc.)
    - [`hooks/`](#hooks): Reusable hooks
    - [`services/`](#services): Global services
    - [`styles/`](#styles): Global styles
    - [`i18n/`](#i18n): Internationalization
  - [`App.tsx`](#apptsx): Main component
  - [`main.tsx`](#maintsx): Entry point
- [`/`](#root)
  - [`package.json`](#packagejson): Dependencies and scripts
  - [`tsconfig.json`](#tsconfigjson): TypeScript configuration
  - [`yarn.lock`](#yarnlock): Yarn lock file
  - [`.gitignore`](#gitignore): Files to ignore by Git
  - [`README.md`](#readmemd): Project documentation


## 🛠️ Installation and Setup

### 1️⃣ Clone the repository

```git clone -b feat/init-project https://github.com/Compile-Chill/Project-Part-1```

cd hara

### 2️⃣ Install dependencies

``` Install dependencies ```

``` Run the project ```

### 3️⃣ Run the project

```yarn dev```

## 🌍 Internationalization (i18n)

Hara uses ```i18next``` to manage multiple languages. Translation files are located in ```src/shared/i18n/```. By default, the language is English (```en```). You can change it in the app using ```i18n.changeLanguage('es')```.


## 📌 Technologies Used

• React with TypeScript

• Vite for development environment

• i18next for internationalization

• Yarn as a package manager

## 📜 License

This project is licensed under the MIT license.

## Links 

• Guide on project structure in React: https://react.dev/learn#scaling-up-with-reducer-and-context
• React: Building and organizing components: https://react.dev/learn#defining-a-component
• Adding React to an existing project: https://react.dev/learn add-react-to-an-existing-project#using-react-for-a-part-of-your-existing-page
•React Router - Route definition: https://reactrouter.com/home#react-router-as-a-library
• Official React hooks guide: https://react.dev/reference/react/useState
• Styled Components: https://styled-components.com/
• package.json documentation: https://docs.npmjs.com/cli/v9/configuring-npm/package-json
•Official Git documentation: https://git-scm.com/docs/gitignore




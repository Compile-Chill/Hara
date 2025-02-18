# Skin Care Advisor - Structure for the frontend

This is the folder structure for the frontend of the Skin Care Advisor project, organized in a modular way based on domains.

## /public
- **index.html**: Main HTML file for the application.
- **favicon.ico**: Site icon.

## /src
### /modules
- **/auth**: Authentication module.
  - **components/**: Components related to authentication (e.g., login form, registration form).
  - **hooks/**: Authentication-specific hooks (e.g., useAuth).
  - **services/**: API calls for authentication (e.g., login, registration, password recovery).
  - **pages/**: Pages for login, registration, password recovery.

- **/profile**: User profile module.
  - **components/**: Components related to the user profile (e.g., profile form, profile display).
  - **hooks/**: Hooks specific to user profile management.
  - **services/**: API calls for user profile data.
  - **pages/**: Pages for viewing and editing the user profile.

- **/evaluation**: Skin evaluation module.
  - **components/**: Components for the skin evaluation process.
  - **hooks/**: Hooks for managing evaluation data.
  - **services/**: API calls related to skin evaluation.
  - **pages/**: Pages for initiating and viewing the skin evaluation.

- **/routines**: Personalized routines module.
  - **components/**: Components for displaying and managing skin care routines.
  - **hooks/**: Hooks for managing routine data.
  - **services/**: API calls related to personalized routines.
  - **pages/**: Pages for creating, viewing, and editing routines.

- **/products**: Recommended products module.
  - **components/**: Components for displaying recommended products.
  - **hooks/**: Hooks for managing product data.
  - **services/**: API calls related to recommended products.
  - **pages/**: Pages for browsing and comparing products.

- **/community**: Community and recommendations module.
  - **components/**: Components related to community interactions (e.g., reviews, ratings).
  - **hooks/**: Hooks for managing community data.
  - **services/**: API calls related to the community features.
  - **pages/**: Pages for viewing and interacting with the community.

### /shared
- **components/**: Global components used across multiple modules (e.g., buttons, headers, footers).
- **hooks/**: Reusable hooks used across multiple modules (e.g., useFetch, useLocalStorage).
- **services/**: Global API calls shared across modules.
- **styles/**: Shared styles, such as global styles or themes.

### Main Files
- **App.jsx**: Main component of the application.
- **main.jsx**: Entry point of the application.

## Root Files
- **package.json**: Project dependencies and scripts.
- **.gitignore**: Files and folders to exclude from Git.
- **README.md**: Project documentation.  

## Links
- Guide on project structure in React: https://react.dev/learn#scaling-up-with-reducer-and-context
- React: Building and organizing components: https://react.dev/learn#defining-a-component
- Adding React to an existing project: https://react.dev/learn/add-react-to-an-existing-project#using-react-for-a-part-of-your-existing-page
- React Router - Route definition: https://reactrouter.com/home#react-router-as-a-library
- Official React hooks guide: https://react.dev/reference/react/useState
- Styled Components: https://styled-components.com/
- package.json documentation: https://docs.npmjs.com/cli/v9/configuring-npm/package-json
- Official Git documentation: https://git-scm.com/docs/gitignore
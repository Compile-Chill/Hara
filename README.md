#  Skin Care Advisor - Structure for the frontend

Skin Care Advisor is a platform that helps users create personalized skincare routines based on their skin type, habits, and budget.

With this modular structure, it will be easier to scale the project and maintain an orderly code:

## public/
- index.html: Main HTML file.
- favicon.ico: Application icon.
- manifest.json: PWA configuration.

## src/
- assets/: Images, fonts, and static files.
- components/: Reusable UI components.
- pages/: Main application pages.
- hooks/: Custom hooks for state logic.
- services/: Services to handle business logic and API interactions.
- store/: Folder for global state management (if using Redux or Context API).
- styles/: Global and component-specific styles.
- utils/: Utility functions.

## Other Files
- .env: Sensitive environment variables.
- package.json: Project dependencies and configurations.
- .gitignore: Files that should be ignored by Git.

### Links
- Guide on project structure in React: https://react.dev/learn#scaling-up-with-reducer-and-context
- React: Building and organizing components: https://react.dev/learn#defining-a-component
- Adding React to an existing project: https://react.dev/learn/add-react-to-an-existing-project#using-react-for-a-part-of-your-existing-page
- React Router - Route definition: https://reactrouter.com/home#react-router-as-a-library
- Official React hooks guide: https://react.dev/reference/react/useState
- Styled Components: https://styled-components.com/
- package.json documentation: https://docs.npmjs.com/cli/v9/configuring-npm/package-json
- Official Git documentation: https://git-scm.com/docs/gitignore




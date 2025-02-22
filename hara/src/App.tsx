import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t("hello_world")}</h1>
      <button onClick={() => i18n.changeLanguage("es")}>ES</button>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
    </div>
  );
}

export default App;
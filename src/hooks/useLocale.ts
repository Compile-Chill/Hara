import { useEffect, useState } from "react";

export function useLocale() {
  const [locale, setLocale] = useState("es")

  useEffect(() => {
    setLocale(navigator.language || "es");
  }, []);

  return locale;
}
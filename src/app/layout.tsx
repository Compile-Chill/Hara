import { ReactNode } from "react";
import { cookies } from "next/headers";
import { defaultLocale, locales } from "@/i18n/config";

export default async function RootLayout({ children }: { children: ReactNode }) {
  // Leer el idioma desde las cookies
  const locale = cookies().get("locale")?.value || defaultLocale;

  // Cargar traducciones
  let messages;
  try {
    messages = (await import(`@/i18n/messages/${locale}.json`)).default;
  } catch (error) {
    messages = (await import(`@/i18n/messages/${defaultLocale}.json`)).default;
  }

  return (
    <html lang={locale}>
      <body>
        <h1>{messages.greeting}</h1>
        {children}
      </body>
    </html>
  );
}

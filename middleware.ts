import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./src/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignorar archivos estáticos y rutas internas de Next.js
  if (pathname.startsWith("/_next") || pathname.includes(".")) return;

  // Detectar idioma del usuario desde el navegador
  const acceptLanguage = request.headers.get("accept-language");
  const userLocale = acceptLanguage?.split(",")[0].split("-")[0] || defaultLocale;

  // Determinar el idioma final
  const locale = locales.includes(userLocale as any) ? userLocale : defaultLocale;

  // Guardar idioma en cookies
  const response = NextResponse.next();
  response.cookies.set("locale", locale, { path: "/" });

  return response;
}

export const config = {
  matcher: "/((?!api|_next|.*\\..*).*)",
};
import type { Metadata } from "next";
import { Outfit, Noto_Nastaliq_Urdu } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageProvider";
import { COOKIE_NAME, defaultLocale, getDir, isLocale } from "./i18n/config";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const notoUrdu = Noto_Nastaliq_Urdu({
  variable: "--font-urdu",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Global Pharmaceutical",
  description: "",
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get(COOKIE_NAME)?.value;
  const locale = isLocale(cookieValue) ? cookieValue : defaultLocale;
  const dir = getDir(locale);

  return (
    <html
      lang={locale}
      dir={dir}
      suppressHydrationWarning
      className={`${outfit.variable} ${notoUrdu.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider initialLocale={locale}>{children}</LanguageProvider>
      </body>
    </html>
  );
}

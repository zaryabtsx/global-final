export const locales = ["en", "ur"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// Locales that render right-to-left.
export const rtlLocales: Locale[] = ["ur"];

export const COOKIE_NAME = "NEXT_LOCALE";

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

export function getDir(locale: Locale): "rtl" | "ltr" {
  return rtlLocales.includes(locale) ? "rtl" : "ltr";
}

// Metadata for the header language switcher.
export const LANGUAGES: {
  value: Locale;
  label: string;
  nativeLabel: string;
  flag: string;
}[] = [
  { value: "en", label: "English (US)", nativeLabel: "English", flag: "/United-States.png" },
  { value: "ur", label: "Urdu", nativeLabel: "اردو", flag: "" },
];

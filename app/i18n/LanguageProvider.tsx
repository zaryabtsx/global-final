"use client";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { dictionaries, type Dictionary } from "./dictionaries";
import {
  COOKIE_NAME,
  defaultLocale,
  getDir,
  isLocale,
  type Locale,
} from "./config";

interface I18nContextValue {
  locale: Locale;
  dir: "rtl" | "ltr";
  setLocale: (locale: Locale) => void;
  t: (path: string) => string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tRaw: <T = any>(path: string) => T;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function lookup(dict: Dictionary, path: string): unknown {
  return path
    .split(".")
    .reduce<unknown>((acc, key) => {
      if (acc && typeof acc === "object" && key in (acc as object)) {
        return (acc as Record<string, unknown>)[key];
      }
      return undefined;
    }, dict);
}

export function LanguageProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(
    isLocale(initialLocale) ? initialLocale : defaultLocale
  );

  // Rehydrate the user's previously saved locale on the client, since the
  // server/static build always renders with defaultLocale now.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(COOKIE_NAME);
      if (saved && isLocale(saved) && saved !== locale) {
        setLocaleState(saved as Locale);
        document.documentElement.lang = saved;
        document.documentElement.dir = getDir(saved as Locale);
      }
    } catch {
      /* ignore storage errors */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    const dir = getDir(next);
    document.cookie = `${COOKIE_NAME}=${next}; path=/; max-age=31536000; SameSite=Lax`;
    try {
      window.localStorage.setItem(COOKIE_NAME, next);
    } catch {
      /* ignore storage errors */
    }
    document.documentElement.lang = next;
    document.documentElement.dir = dir;
  }, []);

  const value = useMemo<I18nContextValue>(() => {
    const dict = dictionaries[locale] ?? dictionaries[defaultLocale];
    const fallback = dictionaries[defaultLocale];
    const tRaw = <T,>(path: string): T => {
      const found = lookup(dict, path);
      if (found !== undefined) return found as T;
      return lookup(fallback, path) as T;
    };
    const t = (path: string): string => {
      const found = lookup(dict, path) ?? lookup(fallback, path);
      if (typeof found === "string") return found;
      return path;
    };
    return { locale, dir: getDir(locale), setLocale, t, tRaw };
  }, [locale, setLocale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return ctx;
}

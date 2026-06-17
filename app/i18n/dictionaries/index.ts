import en from "./en";
import ur from "./ur";
import type { Locale } from "../config";

export type Dictionary = typeof en;

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  ur,
};

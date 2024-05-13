import { InitOptions } from "i18next";

export const fallbackLng = "pl";
export const languages = [fallbackLng, "en"] as const;
export const cookieName = "i18next";
export const defaultNS = "translation";
export const namespaces = [defaultNS] as const;
export type Language = (typeof languages)[number];
export type Namespace = (typeof namespaces)[number];

export function getOptions(lng = fallbackLng, ns = defaultNS): InitOptions {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}

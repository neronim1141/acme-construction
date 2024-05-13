import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions, Language, Namespace } from "./settings";

const initI18next = async (lng: Language) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: Language, namespace: Namespace) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lng));
  return i18nInstance;
};

export async function getTranslation(
  lng: Language,
  ns?: Namespace | Namespace[]
) {
  const i18nextInstance = await initI18next(lng);
  return {
    t: i18nextInstance.getFixedT<Namespace>(
      lng,
      Array.isArray(ns) ? ns[0] : ns
    ),
    i18n: i18nextInstance,
  };
}

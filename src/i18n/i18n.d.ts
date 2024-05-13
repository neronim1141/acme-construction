import type resources from "./locales";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: (typeof resources)[keyof typeof resources];
  }
}

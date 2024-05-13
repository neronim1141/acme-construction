"use client";
import { useTranslation } from "@/i18n";
import { PageProps } from "../layout";
export default function Home({ params: { lang } }: PageProps) {
  const { t } = useTranslation(lang);
  return <>{t("title")}</>;
}

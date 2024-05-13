import { PageProps } from "./layout";
import { getTranslation } from "@/i18n";
export default async function Home({ params: { lang } }: PageProps) {
  const { t } = await getTranslation(lang);
  return <>{t("to-second-page")}</>;
}

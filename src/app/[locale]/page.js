"use client";

import { useTranslation } from "../../i18n/client";
import LanguageSwitcher from "../../Components/LanguageSwitcher/LanguageSwitcher";

export default function Home({ params: { lng } }) {
  const { t } = useTranslation(lng, "common");

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-end mb-4">
        <LanguageSwitcher />
      </div>

      <div className="text-center">
        <h1 className="display-4 mb-4">{t("welcome")} to DigitalSurf</h1>
        <p className="lead">
          This is a test page to demonstrate internationalization.
        </p>
      </div>
    </div>
  );
}

import React from "react";
import { useTranslation } from "react-i18next";
import css from "./ButtonTranslate.module.scss";

export function ButtonTranslate() {
  const { i18n } = useTranslation();
  const lngs = {
    en: { nativeName: "Eng", ico: "/images/langEng.png" },
    ru: { nativeName: "Ru", ico: "/images/langRu.png" },
  };
  return (
    <div style={{ marginTop: "40px" }}>
      {Object.keys(lngs).map((lng) => {
        return (
          <button
            key={lng}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
            className={
              i18n.resolvedLanguage === lng ? css.buttonActive : css.button
            }
          >
            <img src={lngs[lng].ico} alt="language" />
          </button>
        );
      })}
    </div>
  );
}

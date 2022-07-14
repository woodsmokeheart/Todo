import React from "react";
import css from "./EmptyBlock.module.scss";
import { useTranslation } from "react-i18next";

function EmptyBlock() {
  const { t } = useTranslation();
  return (
    <div className={css.wrapper}>
      <img className={css.img} src="/images/list.png" alt="language" />
      <p className={css.text}>{t("Write your first task")}</p>
    </div>
  );
}

export default EmptyBlock;

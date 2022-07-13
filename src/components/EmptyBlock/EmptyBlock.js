import React from "react";
import css from "./EmptyBlock.module.scss";
import { useTranslation } from "react-i18next";

function EmptyBlock() {
  const { t } = useTranslation();
  return <p className={css.text}>{t("Write your first task")}</p>;
}

export default EmptyBlock;

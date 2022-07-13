import React from "react";
import css from "./Form.module.scss";
import { useTranslation } from "react-i18next";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const { t } = useTranslation();

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form className={css.form}>
      <div className={css.inputContainer}>
        <div className={css.inputbox}>
          <input
            value={inputText}
            onChange={inputTextHandler}
            type="text"
            placeholder={t("Add task...")}
          />
        </div>
        <button
          className={css.btnSubmit}
          onClick={submitTodoHandler}
          type="submit"
        >
          {t("Create")}
        </button>
      </div>
      <div className={css.select}>
        <select className={css.filter} onChange={statusHandler} name="todos">
          <option value="all">{t("All")}</option>
          <option value="completed">{t("Completed")}</option>
          <option value="uncompleted">{t("Uncompleted")}</option>
        </select>
      </div>
    </form>
  );
};

export default Form;

import React from "react";
import css from "./Form.module.scss";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
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
            placeholder="Add task..."
          />
        </div>
        <button
          className={css.btnSubmit}
          onClick={submitTodoHandler}
          type="submit"
        >
          Create
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={css.select}>
        <select className={css.filter} onChange={statusHandler} name="todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;

import React, { useState } from "react";
import css from "./Todo.module.scss";
import { useTranslation } from "react-i18next";

const Todo = ({ text, todos, setTodos, todo }) => {
  const [show, setShow] = useState(false);
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className={css.todo}>
      <Buttons
        completeHandler={completeHandler}
        deleteHandler={deleteHandler}
        show={show}
        setShow={setShow}
        text={text}
        todo={todo}
      />
      <p className={show ? css.showText : css.text}>{text}</p>
    </div>
  );
};

export default Todo;

function Buttons({
  completeHandler,
  deleteHandler,
  text,
  show,
  setShow,
  todo,
}) {
  const { t } = useTranslation();
  return (
    <div className={css.buttons}>
      <div className={css.status}>
        <span style={{ color: todo?.completed ? "#00CC33" : "#CC3300" }}>
          {todo?.completed ? t("Completed") : t("Uncompleted")}
        </span>
      </div>
      <div>
        <button className={css.button} onClick={completeHandler}>
          <i className="ri-checkbox-circle-line" />
        </button>
        <button className={css.button} onClick={deleteHandler}>
          <i className="ri-close-circle-line" />
        </button>
        {text.length >= 84 ? (
          <button className={css.button} onClick={() => setShow(!show)}>
            <i className={show ? "ri-eye-2-line" : "ri-eye-2-fill"} />
          </button>
        ) : null}
      </div>
    </div>
  );
}

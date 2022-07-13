import React, { useState } from "react";
import css from "./Todo.module.scss";

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
      <p className={show ? css.showText : css.text}>{text}</p>
      <div>
        <button className={css.button} onClick={completeHandler}>
          <i className="ri-add-circle-line"></i>
        </button>
        <button className={css.button} onClick={deleteHandler}>
          <i className="ri-close-circle-line"></i>
        </button>
        {text.length >= 84 ? (
          <button className={css.button} onClick={() => setShow(!show)}>
            <i className={show ? "ri-eye-2-line" : "ri-eye-2-fill"} />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Todo;

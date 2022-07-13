import React from "react";
import Todo from "../Todo/Todo";
import EmptyBlock from "../EmptyBlock/EmptyBlock";

function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <>
      {todos.length >= 1 ? (
        <>
          {filteredTodos.map((todo) => (
            <Todo
              setTodos={setTodos}
              todos={todos}
              key={todo.id}
              todo={todo}
              text={todo.text}
            />
          ))}
        </>
      ) : (
        <EmptyBlock />
      )}
    </>
  );
}
export default TodoList;

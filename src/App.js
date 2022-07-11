import { useEffect, useState } from "react";
import "./App.scss";
import Form from "./components/Form/Form";
import Todo from "./components/Todo/Todo";
import EmptyBlock from "./components/EmptyBlock/EmptyBlock";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };
  return (
    <div className="App">
      <div className="wrapper">
        <header>
          <h1>Your Todo</h1>
        </header>
        <Form
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
          setStatus={setStatus}
        />
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
      </div>
    </div>
  );
}

export default App;

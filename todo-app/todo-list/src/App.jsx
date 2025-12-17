import { useState } from "react";
import Input from "./components/Input";
import List from "./components/List";
import "./components/Todo.css";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text, date) {
    setTodos([...todos, { text, date }]);
  }

  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <>
      <h2>TODO List</h2>

      <Input addTodo={addTodo} />

      <List todos={todos} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;

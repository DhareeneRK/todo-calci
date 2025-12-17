import { useState } from "react";

function Input({ addTodo }) {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  function handleAdd() {
    if (text === "" || date === "") return;
    addTodo(text, date);
    setText("");
    setDate("");
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button className="add-btn" onClick={handleAdd}>
        Add
      </button>
    </>
  );
}

export default Input;

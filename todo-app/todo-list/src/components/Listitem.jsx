function Listitems({ todos, deleteTodo }) {
  return todos.map((item, index) => (
    <li className="todo-row" key={index}>
      <span>{item.text}</span>
      <span>{item.date}</span>
      <button className="delete-button" onClick={() => deleteTodo(index)}>
        Delete
      </button>
    </li>
  ));
}

export default Listitems;

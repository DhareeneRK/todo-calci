import Item from "./Item";

function List({ todos, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <Item
          key={index}
          text={todo.text}
          date={todo.date}
          onDelete={() => deleteTodo(index)}
        />
      ))}
    </ul>
  );
}

export default List;

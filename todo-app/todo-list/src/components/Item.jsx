function Item({ text, date, onDelete }) {
  function handleComplete() {
    alert("Task Completed!");
  }

  return (
    <li>
      {text} - {date}

      <button className="complete-btn" onClick={handleComplete}>
        Complete
      </button>

      <button className="delete-btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

export default Item;

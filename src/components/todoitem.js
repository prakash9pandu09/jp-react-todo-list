const TodoItem = ({ item, removeItem, editItem }) => {
  return (
    <li className="list-group-item text-capitalize d-flex my4 justify-content-between">
      <h6>{item.item}</h6>
      <div className="todo-icon">
        <span className="mx-2 text-success" onClick={() => editItem(item.id)}>
          <i className="fas fa-pen"></i>
        </span>
        <span className="mx-2 text-danger" onClick={() => removeItem(item.id)}>
          <i className="fas fa-trash"></i>
        </span>
      </div>
    </li>
  );
};

export default TodoItem;

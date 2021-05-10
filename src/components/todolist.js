import TodoItem from "./todoitem";
const TodoList = ({ todoList, removeItem, editItem, clearTodoList }) => {
  return (
    <ul className="list-group my-5">
      <h3 className="text-center text-capitalize">todo list</h3>
      {todoList.map((item) => {
        return (
          <TodoItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}

      <button
        className="btn btn-danger btn-block text-capitalize mt-3"
        onClick={clearTodoList}
      >
        clear list
      </button>
    </ul>
  );
};

export default TodoList;

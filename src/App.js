import { useState } from "react";
import "./App.css";
import TodoInput from "./components/todoinput";
import TodoList from "./components/todolist";

import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid/";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoItem, setTodoItem] = useState("");
  const [isEditItem, setIsEditItem] = useState(false);

  let editableItem;
  const handleChange = (e) => {
    setTodoItem(e.target.value);
  };
  const addItem = (e, item) => {
    let newItem = { id: uuid(), item: item };
    setTodoList([...todoList, newItem]);
    setTodoItem("");
    setIsEditItem(false);
    e.preventDefault();
  };
  const removeItem = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
    editableItem = todoList.find((item) => item.id === id);
    setTodoItem(editableItem.item);
    setIsEditItem(true);
  };
  const clearTodoList = () => {
    setTodoList([]);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <TodoInput
            todoItem={todoItem}
            addItem={addItem}
            handleChange={handleChange}
            isEditItem={isEditItem}
          />
          <TodoList
            todoList={todoList}
            removeItem={removeItem}
            editItem={editItem}
            clearTodoList={clearTodoList}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

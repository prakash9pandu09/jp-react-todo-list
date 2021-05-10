const TodoInput = ({ todoItem, addItem, handleChange, isEditItem }) => {
  return (
    <div className="container">
      <h3 className="text-center text-capitalize">Todo Input</h3>
      <div className="card card-body my-3">
        <form>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book fa-2x"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="enter todo item"
              value={todoItem}
              onChange={handleChange}
            />
          </div>
          <button
            className={`${
              isEditItem ? "btn-success" : "btn-primary"
            } btn btn-block mt-3 text-capitalize w-100`}
            onClick={(e) => {
              addItem(e, todoItem);
            }}
          >
            {isEditItem ? "edit item" : "add item"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoInput;

const App = () => {
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <form className="todo__form">
        <div className="todo__field field">
          <label
            className="field__label"
            htmlFor="new-task"
          >
            New task
          </label>
          <input
            className="field__input"
            id="new-task"
            placeholder=" "
            autoComplete="off"
          />
        </div>
        <button className="button" type="submit">Add</button>
      </form>
      <form className="todo__form">
        <div className="todo__field field">
          <label
            className="field__label"
            htmlFor="search-task"
          >
            Search task
          </label>
          <input
            className="field__input"
            id="search-task"
            placeholder=" "
            autoComplete="off"
            type="search"
          />
        </div>
      </form>
      <div className="todo__info">
        <div className="todo__total-tasks">Total tasks: <span>0</span></div>
        <button className="todo__delete-all-button" type="button">Delete all</button>
      </div>
      <ul className="todo__list">
        <li className="todo__item todo-item">
          <input
            className="todo-item__checkbox"
            id="task-1"
            type="checkbox"
            checked
          />
          <label
            className="todo-item__label"
            htmlFor="task-1"
          >
            Task 1
          </label>
          <button
            className="todo-item__delete-button"
            aria-label="Delete"
            title="Delete"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="#757575"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </li>
        <li className="todo__item todo-item">
          <input
            className="todo-item__checkbox"
            id="task-2"
            type="checkbox"
          />
          <label
            className="todo-item__label"
            htmlFor="task-2"
          >
            Task 2
          </label>
          <button
            className="todo-item__delete-button"
            aria-label="Delete"
            title="Delete"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="#757575"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </li>
      </ul>
      <div className="todo__empty-message"></div>
    </div>
  )
}

export default App

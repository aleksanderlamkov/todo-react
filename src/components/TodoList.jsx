import TodoItem from './TodoItem'

const TodoList = () => {
  const hasTasks = true

  if (!hasTasks) {
    return <div className="todo__empty-message"></div>
  }

  return (
    <ul className="todo__list">
      <TodoItem />
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
  )
}

export default TodoList

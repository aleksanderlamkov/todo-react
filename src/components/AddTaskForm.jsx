import Field from './Field'
import Button from './Button'

const AddTaskForm = (props) => {
  const {
    addTask,
    newTaskTitle,
    setNewTaskTitle,
    newTaskInputRef,
  } = props

  const onSubmit = (event) => {
    event.preventDefault()
    addTask()
  }

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="todo__field"
        label="New task title"
        id="new-task"
        value={newTaskTitle}
        onInput={(event) => setNewTaskTitle(event.target.value)}
        ref={newTaskInputRef}
      />
      <Button type="submit">Add</Button>
    </form>
  )
}

export default AddTaskForm

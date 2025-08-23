import Field from './Field'
import Button from './Button'

const AddTaskForm = () => {
  return (
    <form className="todo__form">
      <Field
        className="todo__field"
        label="New task title"
        id="new-task"
      />
      <Button type="submit">Add</Button>
    </form>
  )
}

export default AddTaskForm

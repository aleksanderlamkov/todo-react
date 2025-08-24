import {TasksProvider} from '../context/TasksContext'
import Todo from '../components/Todo'

const TasksPage = () => {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  )
}

export default TasksPage

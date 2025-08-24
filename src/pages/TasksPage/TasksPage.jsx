import {TasksProvider} from '@/entities/todo'
import Todo from '@/widgets/Todo'

const TasksPage = () => {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  )
}

export default TasksPage

import Todo from './components/Todo'
import { TasksProvider } from './context/TasksContext'

const App = () => {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  )
}

export default App

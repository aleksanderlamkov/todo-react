import Field from '@/shared/ui/Field'
import { useContext } from 'react'
import { TasksContext } from '@/entities/todo'

const SearchTaskForm = (props) => {
  const { styles } = props

  const {
    searchQuery,
    setSearchQuery,
  } = useContext(TasksContext)

  return (
    <form
      className={styles.form}
      onSubmit={(event) => event.preventDefault()}
    >
      <Field
        className={styles.field}
        label="Search task"
        id="search-task"
        type="search"
        value={searchQuery}
        onInput={(event) => setSearchQuery(event.target.value)}
      />
    </form>
  )
}

export default SearchTaskForm

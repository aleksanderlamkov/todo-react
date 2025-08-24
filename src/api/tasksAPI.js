const URL = 'http://localhost:3001/tasks'

const headers = {
  'Content-Type': 'application/json',
}

const tasksAPI = {
  getAll: () => {
    return fetch(URL).then((response) => response.json())
  },

  add: (task) => {
    return fetch(URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(task),
    })
      .then((response) => response.json())
  },

  delete: (id) => {
    return fetch(`${URL}/${id}`, { method: 'DELETE' })
  },

  deleteAll: (tasks) => {
    return Promise.all(
      tasks.map(({ id }) => tasksAPI.delete(id))
    )
  },

  toggleComplete: (id, isDone) => {
    return fetch(`${URL}/${id}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({ isDone })
    })
  },
}

export default tasksAPI

import { useTodosStore } from '../store/todos'
import { Todo } from './Todo'

export const Todos = () => {
  const { todos, filterSelected, TODO_FILTERS } = useTodosStore()

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <ul key={todos.id}>
      {filteredTodos.map((todo) => {
        const { id, title, completed } = todo

        return (
          <li key={id} className={`group`}>
            <Todo id={id} title={title} completed={completed} />
          </li>
        )
      })}
    </ul>
  )
}

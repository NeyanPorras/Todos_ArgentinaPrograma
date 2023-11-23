import { useTodosStore } from '../store/todos.jsx'

export const Todo = ({ id, title, completed }) => {
  const { removeTodoItem, completeTodoItem } = useTodosStore()

  const handleClick = () => {
    removeTodoItem({ id })
  }

  const handleChange = (e) => {
    completeTodoItem({ id, completed: e.target.checked })
  }
  const checkStyle = completed
    ? 'bg-checked bg-no-repeat bg-[right]'
    : 'bg-unchecked bg-no-repeat bg-[right]'

  const taskCompleted = completed ? 'line-through text-[#d9d9d9] ' : ''
  return (
    <div className={`border-t-2 text-2xl p-3 h-16 flex  gap-x-6 relative `}>
      <label className={`${checkStyle} w-10 `}>
        <input
          className='opacity-0'
          type='checkbox'
          onChange={handleChange}
          checked={completed}
        />
      </label>

      <p className={`w-full text-start ${taskCompleted}`}>{title}</p>
      <button
        className='text-red-600/50 font-semibold hidden after:content-["x"] group-hover:block absolute right-0 pr-3'
        onClick={handleClick}
      ></button>
    </div>
  )
}

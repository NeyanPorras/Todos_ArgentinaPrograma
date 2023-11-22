import { useTodosStore } from '../store/todos'
import { Filters } from './Filters'

export const Footer = () => {
  const { clearCompletedTodos, todos } = useTodosStore()
  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.length - activeCount
  const stackedEffect =
    'absolute inset-0 h-14 md:h-12 shadow-[0_1px_1px_rgba(0,0,0,0.2),0_8px_0_-3px_#f6f6f6,0_9px_1px_-3px_rgba(0,0,0,0.2),0_16px_0_-6px_#f6f6f6,0_17px_2px_-6px_rgba(0,0,0,0.2)]'
  return (
    <footer
      className={`grid grid-cols-6 items-center h-14 md:h-12 relative text-sm border-t-2 font-medium`}
    >
      <span className={stackedEffect}></span>
      <span className='col-span-2'>
        <strong className='font-medium'>{activeCount}</strong>{' '}
        {activeCount !== 1 ? 'tareas pendientes' : 'tarea pendiente'}
      </span>
      <Filters />
      {completedCount > 0 && (
        <button
          className='col-span-2 z-10 bg-black text-white shadow-lg w-fit p-1 justify-self-center rounded'
          onClick={() => clearCompletedTodos()}
        >
          Borrar completadas
        </button>
      )}
    </footer>
  )
}

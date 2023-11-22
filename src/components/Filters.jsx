import { FILTERS_BUTTONS } from '../utils/consts'
import { useTodosStore } from '../store/todos'

export const Filters = () => {
  const { filterSelected, setFilterSelected } = useTodosStore()

  return (
    <ul className='col-span-2 grid grid-cols-2  sm:flex sm:gap-2 z-10'>
      {Object.entries(FILTERS_BUTTONS).map(([key, { literal }]) => {
        const isSelected = key === filterSelected
        const focusStyle = isSelected ? 'bg-rose-500/40' : ''
        const center = key === 'completed' ? 'col-span-2' : ''
        return (
          <li key={crypto.randomUUID()} className={`${center}`}>
            <button
              className={`${focusStyle} shadow-md hover:bg-rose-600/40  outline-rose-600 rounded p-1`}
              onClick={(e) => {
                e.preventDefault()
                setFilterSelected(key)
              }}
            >
              {literal}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

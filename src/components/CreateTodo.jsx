import { useState } from 'react'
import { useTodosStore } from '../store/todos'

export const CreateTodo = () => {
  const [inputValue, setInputValue] = useState('')
  const { addTodoItem } = useTodosStore()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue !== '') addTodoItem({ title: inputValue })
    setInputValue('')
  }
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className='flex'>
      <label className='content-[""] p-6'></label>
      <input
        className='italic text-2xl w-full p-4 border-0 outline-none '
        type='text'
        onChange={handleChange}
        value={inputValue}
        placeholder=' ¿Que quieres hacer?'
        autoFocus
      />
    </form>
  )
}

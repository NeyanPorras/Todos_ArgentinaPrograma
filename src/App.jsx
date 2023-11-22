import { useState } from 'react'
import './App.css'
import { Footer } from './components/Footer.jsx'
import { Todos } from './components/Todos.jsx'
import { TODO_FILTERS } from '../utils/consts.js'
import { Header } from './components/Header.jsx'

const mockTodos = [
  {
    id: '1',
    title: 'todo1',
    completed: false
  },
  {
    id: '2',
    title: 'todo2',
    completed: false
  },
  {
    id: '3',
    title: 'todo3',
    completed: false
  }
]

function App() {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState(TODO_FILTERS.ALL)

  // Eliminar un itemTask del todo list
  const handleRemove = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  // controlador de todos completadas
  const handleCompleted = ({ id, completed }) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }
  // controlador del cambio de estado de mi filter de todos
  const handleFilterChange = (filter) => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  const handleAddTodo = ({ title }) => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }
    const newTodos = { ...todos, newTodo }
    setTodos(newTodos)
  }
  // cantidad de todos que aun no esten completos
  const activeCount = todos.filter((todo) => !todo.completed).length
  // todos completados
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })
  return (
    <div className='todoapp'>
      <Header onAddTodo={handleAddTodo} />
      <Todos
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App

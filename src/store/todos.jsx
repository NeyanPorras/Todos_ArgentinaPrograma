import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { TODO_FILTERS } from '../utils/consts'

//create recibe un cb y en el cb devolvemos el estado global(store)
// const mockTodos = [
//   {
//     id: '1',
//     title: 'todo1',
//     completed: false
//   },
//   {
//     id: '2',
//     title: 'todo2',
//     completed: false
//   },
//   {
//     id: '3',
//     title: 'todo3',
//     completed: false
//   }
// ]

export const useTodosStore = create(
  persist(
    (set) => ({
      todos: [],
      filterSelected: TODO_FILTERS.ALL,
      setFilterSelected: (key) => set({ filterSelected: key }),
      TODO_FILTERS: TODO_FILTERS,
      removeTodoItem: ({ id }) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id)
        })),
      addTodoItem: ({ title }) => {
        const newTodo = { title, id: crypto.randomUUID(), completed: false }

        set((state) => ({ todos: [...state.todos, newTodo] }))
      },
      completeTodoItem: ({ id, completed }) =>
        set((state) => ({
          todos: state.todos.map((todo) => {
            if (todo.id === id) {
              return { ...todo, completed }
            }
            return todo
          })
        })),
      clearCompletedTodos: () => {
        set((state) => ({
          todos: state.todos.filter((todo) => !todo.completed)
        }))
      }
    }),
    {
      name: 'todos',
      partialize: (state) => ({ todos: state.todos })
    }
  )
)

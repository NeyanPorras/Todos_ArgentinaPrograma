import { CreateTodo } from './CreateTodo'

export const Header = () => {
  return (
    <header>
      <h1 className='text-7xl sm:text-8xl text-red-400/60 absolute -top-28 w-full '>
        todos
      </h1>
      <CreateTodo />
    </header>
  )
}

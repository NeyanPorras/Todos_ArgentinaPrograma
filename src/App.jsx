import { Header } from './components/Header.jsx'
import { Todos } from './components/Todos.jsx'
import { Footer } from './components/Footer.jsx'

function App() {
  return (
    <div className='shadow-xl my-28 relative border border-black/10 border-b-0 min-w-[390px]'>
      <Header />
      <Todos />
      <Footer />
    </div>
  )
}

export default App

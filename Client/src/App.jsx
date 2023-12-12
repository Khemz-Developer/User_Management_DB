
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='max-w-7xl container mx-auto px-4'>
      <Navbar></Navbar>
      <Outlet/>

    </div>
  )
}

export default App

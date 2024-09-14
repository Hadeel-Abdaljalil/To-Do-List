import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './App.css'
import ToDoList from './Component/ToDoList/ToDoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToDoList/>
    </>
  )
}

export default App

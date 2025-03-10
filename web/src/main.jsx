import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TodoList from './todolist.jsx'
import Todolist2 from './Todolist2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todolist2 />
  </StrictMode>
)

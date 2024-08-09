import { useEffect, useState } from 'react'
import './App.css'
import {ToDoProvider} from './contexts'
import ToDoForm from './components/ToDoForm'
import ToDoItem from './components/ToDoItem'

function App() {

  const [todos, setTodos] = useState([])
  
  const addTodo = (todo) => {
    setTodos((prev) => [{...todo},...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((curr) => (curr.id === id) ? todo : curr))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((val) => val.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id) ? {...prevTodo,comlpeted: !prevTodo.comlpeted} : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <ToDoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <ToDoForm /> 
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id}
              className='w-full'>
                <ToDoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  )
}

export default App

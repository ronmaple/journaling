import './styles.css'

import { v4 as uuidv4 } from 'uuid'
import { useState, useEffect } from 'react'
import TodoForm from './TodoForm/TodoForm'
import TodoList from './TodoList/TodoList'

function App() {
  const [todoList, setTodoList] = useState(
    () => {
      return JSON.parse(localStorage.getItem('ITEMS') || '[]')
    }
  )

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todoList))
  }, [todoList])

  const handleSubmit = (title) => {
    setTodoList((todos) => {
      return [...todos, { id: uuidv4(), title, completed: false }]
    })
  }

  const handleDelete = (id) => {
    setTodoList((todos) => {
      return todos.filter((todo) => todo.id !== id)
    })
  }

  const handleCheck = (id, completed) => {
    setTodoList((todos) => {
      return todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  return (
    <>
      <TodoForm onHandleSubmit={handleSubmit} />
      <h1 className="header">Todo List</h1>
      <TodoList
        onHandleDelete={handleDelete}
        onHandleCheck={handleCheck}
        todoList={todoList}
      />
    </>
  )
}

export default App

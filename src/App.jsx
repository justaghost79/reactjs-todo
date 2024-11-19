import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {
  
  const [todos, setTodos] = useState([])
  const [ todoValue, setTodoValue ] = useState('')

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddedTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  function handleDelete(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  function handleEditedTodos(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDelete(index)
  }
  useEffect(() => {
    if (!localStorage) {
      return
    }
  
    let localTodos = localStorage.getItem('todos')
    if(!localTodos) {
      return
    }
    console.log(localTodos)
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])
  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddedTodos={handleAddedTodos} />
      <TodoList todos = {todos} handleEditedTodos={handleEditedTodos} handleDelete={handleDelete} />
    </>
  )
}

export default App

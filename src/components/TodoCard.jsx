import React from 'react'


export default function TodoCard(props) {
  const { children, handleDelete, index, handleEditedTodos} = props
  return (
    <li className='todoItem' >
      {children}
      <div className='actionsContainer'>
        
        
        <button onClick={() =>{
          handleEditedTodos(index)
        }}>
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button onClick={() => {
          handleDelete(index)
        }}>
          <i className="fa-regular fa-trash-can"></i>  
        </button>
      </div>
    </li>
  )
}

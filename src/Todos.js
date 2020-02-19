import React, { Component } from 'react';

const Todos = ({ todos, deleteTodo }) => {

  console.log(todos)

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div key={todo.id}>
          <li className='item'>
            <p className="text ">{todo.content}</p>
            <i onClick={() => { deleteTodo(todo.id) }} className="fa fa-trash-o de" job="delete" id={todo.id}></i>
          </li>
        </div>
      )
    })
  ) : (
      <p style={{
        color: 'blue',
        position: 'relative',
        padding: '0',
        margin: '0',
        fontSize: '20px',
        left: '20%',
        top: '30px'
      }} >You have no To-Dos left! <span role='img'>👍</span> </p>
    )

  return (
    <div id="list">

      {todoList}

    </div >
  );
}

export default Todos;
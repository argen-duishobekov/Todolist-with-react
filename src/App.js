import React from 'react'
import TodoList from './Todo/TodoList'

function App() {
  const todos = [
    {
      title: 'Учурда тапшырма жок...'
    }
  ]
  return (
    <div className="wrapper">
      <h1>Let's do it</h1>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;

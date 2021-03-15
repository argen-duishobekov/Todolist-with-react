import React from 'react'
import ProTypes from 'prop-types'
import TodoItem from './Todoitem'

 function TodoList(props) {
    return (
        <ul className = 'main'>
            {props.todos.map((todo) => {
                return <TodoItem todo={todo}/>
            })}
        </ul>
    )
}

export default TodoList
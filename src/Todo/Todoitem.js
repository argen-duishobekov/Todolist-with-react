import React from 'react'


export default function TodoItem({todo}) {
    return (
        <li className='mainblock'>
            <input className='textIn' type = 'placeholder' value = 'Gonna do ...' />
            <input className='date' type = 'date'/>
            <button className ='btn'>Add</button>
            <span className='task'>
                {todo.title}
            </span>
        </li>
    )
}
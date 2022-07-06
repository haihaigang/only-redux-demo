import React from 'react'

const Todo = ({ todo, remove }) => {
    console.log('todo render')
    return (
        <div>{todo.id} {todo.name} <a href="#" onClick={remove} data-id={todo.id}>remove</a></div>
    )
}

Todo.displayName = 'Todo'

export default React.memo(Todo)

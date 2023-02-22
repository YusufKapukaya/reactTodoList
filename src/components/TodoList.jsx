import React from 'react'
import Todo from './Todo'

function TodoList({ todos, settodos, filteredTodos }) {
    return (

        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo
                        text={todo.text}
                        key={todo.id}
                        todo={todo}
                        todos={todos}
                        settodos={settodos}
                    />
                ))}
            </ul>
        </div>

    )
}

export default TodoList
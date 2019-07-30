import React from "react";

const Todos = ({todos}) => {
console.log(todos);
const todoList = todos.length ? (
    todos.map(todo => {
        return (
            <div className="collection-item" key={todo.id}>
                <span>{todo.content}</span>
            </div>
        )
    })
) : (
    <p className="center">you have no Todo's YaaaY!</p>
)

    return (
        <div className="todos collection">
            {todoList}
        </div>
    )

}






export default Todos

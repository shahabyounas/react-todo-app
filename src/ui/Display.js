import React from "react"

export default function Display(props) {
  const todoList = props.list.filter(todo => !todo.isDone)
  const completedTodoList = props.list.filter(todo => todo.isDone)
  const completeTodo = (e, bool = true) => {
    const updateList = props.list.map(todo => {
      if (todo.desp === e.target.id) todo.isDone = bool
      return todo
    })

    props.updateArr(updateList)
  }

  return (
    <div className="todo_border">
      <div className="todo_list">
        Todo List:
        {
          <ul>
            {todoList.map(todo => (
              <li key={todo.desp} id={todo.desp} onClick={completeTodo}>
                {todo.desp}
              </li>
            ))}
          </ul>
        }
      </div>
      <div className="todo_done_list">
        Todo Done:
        {
          <ul>
            {completedTodoList.map(todo => (
              <li
                key={todo.desp}
                id={todo.desp}
                onClick={e => completeTodo(e, false)}
              >
                {todo.desp}
              </li>
            ))}
          </ul>
        }
      </div>
    </div>
  )
}

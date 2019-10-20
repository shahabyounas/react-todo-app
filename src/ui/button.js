import React from "react"

const MyButton = props => {
  const handleClick = e => {
    if (
      !props.task.desp ||
      props.list.find(todo => todo.desp === props.task.desp)
    )
      return false
    props.updateArr([...props.list, props.task])

    props.inputValue("")
  }

  return (
    <button className="todo_button" onClick={e => handleClick()}>
      Add Todo
    </button>
  )
}

export default MyButton

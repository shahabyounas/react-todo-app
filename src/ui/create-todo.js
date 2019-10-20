import React from "react"

const CreateTodo = props => {
  const handleChange = e => {
    props.handleValue(e.target.value)
  }

  return (
    <div className="align_center">
      <input
        placeholder="Enter Todo text"
        onChange={handleChange}
        value={props.task.desp || ""}
      />
    </div>
  )
}

export default CreateTodo

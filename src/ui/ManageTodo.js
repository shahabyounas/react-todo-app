import React from "react"
import MyButton from "../ui/button"
import CreateTodo from "../ui/create-todo"
import Display from "../ui/Display"

function ManageToDo() {
  const [todo, setTodo] = React.useState("")
  const [todoList, setTodoList] = React.useState([])

  const handleValue = val => setTodo({ desp: val, isDone: false })
  const updateArr = val => setTodoList(val)

  return (
    <div className="align_center">
      <CreateTodo handleValue={handleValue} task={todo} />
      <MyButton
        updateArr={updateArr}
        task={todo}
        list={todoList}
        inputValue={handleValue}
      />
      <Display list={todoList} updateArr={updateArr} />
    </div>
  )
}

export default ManageToDo

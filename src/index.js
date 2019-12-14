import React from "react"
import ReactDom from "react-dom"
import ManageTodo from "../src/ui/ManageTodo"
import "../src/App.css"

const App = () => {
  return (
    <>
      <h1 className="align_center">Todo App CI/CD Test AWS Codepipeline</h1>
      <ManageTodo />
    </>
  )
}

ReactDom.render(<App />, document.getElementById("root"))

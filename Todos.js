import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem";

export default function Todos(props) {
  return (
    <div className = "container">
      <h3 className= "text-center" my-3>Todos List</h3>
      {/* {props.todos} */}
      <TodoItem todo = {props.todos[0]}/>
      <button className="btn btn danger">Delete</button>
    </div>
  )
}

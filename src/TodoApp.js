import React from "react";
import TodoList from "./component/TodoList";
import TodoInput from "./component/TodoInput";
import "./styles.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoList />
      <TodoInput />
    </div>
  );
}
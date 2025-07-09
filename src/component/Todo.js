import React from "react";
import { connect } from "react-redux";

const Todo = ({ todo }) => (
  <li className="todo-item">
    <span className="todo-text">{todo}</span>
  </li>
);

export default connect(
  null
)(Todo);
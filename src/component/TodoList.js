import React, {Component} from "react";
import Todo from "./Todo";
import {fetchTodos} from "../actions";
import {connect} from "react-redux";

class TodoList extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos } = this.props.data;
    
    return (
      <ul className="todo-list">
        {todos && todos.length
        ? todos.map((todo, index) => {
          return <Todo key={`todo-${index}`} todo={todo.task}/>;
        })
        : <li className="no-todos">No todos, yay!</li>}
      </ul>
    );
  }
}

const mapStateToProps = ({data = {}, isLoadingData = false}) => ({
  data,
  isLoadingData
});

const mapDispatchToProps = {
  fetchTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class TodoInput extends React.Component {
  state = {
    input: "",
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.input.trim()) {
      this.props.addTodo({ task: this.state.input });
      this.setState({ input: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { addTodo })(TodoInput);
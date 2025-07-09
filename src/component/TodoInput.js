import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class TodoInput extends React.Component {
  state = {
    input: "",
  };

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { input } = this.state;
    
    if (input.trim()) {
      try {
        await this.props.addTodo({ task: input.trim() });
        this.setState({ input: "" });
      } catch (error) {
        // Error is handled by Redux state
      }
    }
  };

  render() {
    const { input } = this.state;

    return (
      <div className="add-todo-container">
        <form onSubmit={this.handleSubmit} className="add-todo-form">
          <input
            type="text"
            value={input}
            onChange={this.handleInputChange}
            placeholder="What needs to be done?"
            className="add-todo-input"
          />
          <button
            type="submit" 
            className="add-todo-button"
            disabled={!input.trim()}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput); 
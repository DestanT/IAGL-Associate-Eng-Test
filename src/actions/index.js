import axios from "axios";
import { FETCH_TODOS, ADD_TODO } from "./types";

export function fetchTodos() {
  return function(dispatch) {
    return axios.get("http://localhost:9091/api/todo").then(({ data }) => {
      dispatch(setTodos(data));
    });
  };
}

export function addTodo(todo) {
  return function(dispatch) {
    return axios.post("http://localhost:9091/api/todo", todo).then(({ data }) => {
      dispatch(addTodoAction(data));
    });
  };
}

function setTodos(data) {
  return {
    type: FETCH_TODOS,
    payload: data
  };
}

function addTodoAction(data) {
  return {
    type: ADD_TODO,
    payload: data
  };
}
import axios from "axios";
import { FETCH_TODOS, ADD_TODO } from "./types";

const API_URL = "http://localhost:9091/api/todo";

export function fetchTodos() {
  return function(dispatch) {
    return axios.get(API_URL).then(({ data }) => {
      dispatch(setTodos(data));
    });
  };
}

export function addTodo(todo) {
  return function(dispatch) {
    return axios.post(API_URL, todo).then(({ data }) => {
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
import { FETCH_TODOS, ADD_TODO } from "../actions/types";

const initialState = {
  data: { todos: [] },
  isLoadingData: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return { 
        ...state,
        isLoadingData: false,
        data: { todos: action.payload.todos }
      };
    case ADD_TODO:
      return { 
        ...state, 
        isLoadingData: false,
        data: { todos: [...state.data.todos, action.payload] }
      };
    default:
      return state;
  }
}
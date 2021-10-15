import ACTION_TYPES from './../actions/actionTypes';

const initialState = {
  todos: [],
  error: null,
  isFetching: false,
};

function todosReducer (state = initialState, action) {
  const { type } = action;

  switch (type) {
    case ACTION_TYPES.GET_TODOS_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }

    case ACTION_TYPES.GET_TODOS_SUCCESS: {
      const { tasks } = action;
      const newTodos = [...tasks];
      return {
        ...state,
        isFetching: false,
        todos: newTodos,
      };
    }

    case ACTION_TYPES.GET_TODOS_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error: error,
      };
    }

    case ACTION_TYPES.CREATE_TODO_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }

    case ACTION_TYPES.CREATE_TODO_SUCCESS: {
      const { task } = action;
      const { todos } = state;
      const newTodos = [...todos, task];
      return {
        ...state,
        todos: newTodos,
        isFetching: false,
      };
    }

    case ACTION_TYPES.CREATE_TODO_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    case ACTION_TYPES.DELETE_TODO_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }

    case ACTION_TYPES.DELETE_TODO_SUCCESS: {
      const { id } = action;
      const { todos } = state;
      const newTodos = [...todos];
      newTodos.splice(
        newTodos.findIndex(todo => todo.id === id),
        1
      );
      return {
        ...state,
        isFetching: false,
        todos: newTodos,
      };
    }

    case ACTION_TYPES.DELETE_TODO_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    case ACTION_TYPES.UPDATE_TODO_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }

    case ACTION_TYPES.UPDATE_TODO_SUCCESS: {
      const { task } = action;
      const { todos } = state;
      const newTodos = [...todos];
      newTodos.splice(
        newTodos.findIndex(todo => todo.id === task.id),
        1
      );
      const newestTodos = [...newTodos, task]; /// AAAA!!! ну пока так, потом разберусь

      return {
        ...state,
        todos: newestTodos,
        isFetching: false,
      };
    }

    case ACTION_TYPES.UPDATE_TODO_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }

    default:
      return state;
  }
}

export default todosReducer;

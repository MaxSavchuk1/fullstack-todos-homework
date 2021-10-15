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
      const { todos } = action;
      const newTodos = [...todos];
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
      const { todo } = action;
      const { todos } = state;
      const newTodos = [...todos, todo];
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
      const { deletedTodo } = action;
      const { todos } = state;
      const newTodos = [...todos];
      newTodos.splice(
        newTodos.findIndex(todo => todo.id === deletedTodo[0].id),
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

    case ACTION_TYPES.STATUS_TODO_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }

    case ACTION_TYPES.STATUS_TODO_SUCCESS: {
      const { id } = action;
      const { todos } = state;
      const newTodos = [...todos];
      const index = newTodos.findIndex(todo => todo.id === id);
      newTodos[index].isDone = !newTodos[index].isDone;
      return {
        ...state,
        todos: newTodos,
        isFetching: false,
      };
    }

    case ACTION_TYPES.STATUS_TODO_ERROR: {
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

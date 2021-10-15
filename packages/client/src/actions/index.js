import ACTION_TYPES from './actionTypes';

export const getTodosAction = () => ({
  type: ACTION_TYPES.GET_TODOS_ACTION,
});

export const getTodosRequest = () => ({
  type: ACTION_TYPES.GET_TODOS_REQUEST,
});

export const getTodosSuccess = todos => ({
  type: ACTION_TYPES.GET_TODOS_SUCCESS,
  todos,
});

export const getTodosError = error => ({
  type: ACTION_TYPES.GET_TODOS_ERROR,
  error,
});

export const createTodoAction = todo => ({
  type: ACTION_TYPES.CREATE_TODO_ACTION,
  todo,
});

export const createTodoRequest = () => ({
  type: ACTION_TYPES.CREATE_TODO_REQUEST,
});

export const createTodoSuccess = todo => ({
  type: ACTION_TYPES.CREATE_TODO_SUCCESS,
  todo,
});

export const createTodoError = error => ({
  type: ACTION_TYPES.CREATE_TODO_ERROR,
  error,
});

export const deleteTodoAction = id => ({
  type: ACTION_TYPES.DELETE_TODO_ACTION,
  id,
});

export const deleteTodoRequest = () => ({
  type: ACTION_TYPES.DELETE_TODO_REQUEST,
});

export const deleteTodoSuccess = deletedTodo => ({
  type: ACTION_TYPES.DELETE_TODO_SUCCESS,
  deletedTodo,
});

export const deleteTodoError = error => ({
  type: ACTION_TYPES.DELETE_TODO_ERROR,
  error,
});

export const statusTodoAction = id => ({
  type: ACTION_TYPES.STATUS_TODO_ACTION,
  id,
});

export const statusTodoRequest = () => ({
  type: ACTION_TYPES.STATUS_TODO_REQUEST,
});

export const statusTodoSuccess = id => ({
  type: ACTION_TYPES.STATUS_TODO_SUCCESS,
  id,
});

export const statusTodoError = error => ({
  type: ACTION_TYPES.STATUS_TODO_ERROR,
  error,
});

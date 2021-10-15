import { put } from 'redux-saga/effects';
import * as API from '../api';
import * as ACT from '../actions';

export function * getTodosSaga () {
  yield put(ACT.getTodosRequest());
  try {
    const { data: todos } = yield API.getTodos();
    yield put(ACT.getTodosSuccess(todos));
  } catch (error) {
    yield put(ACT.getTodosError(error));
  }
}

export function * createTodoSaga (action) {
  const { todo } = action;
  yield put(ACT.createTodoRequest());
  try {
    const { data: newTodo } = yield API.createTodo(todo);
    yield put(ACT.createTodoSuccess(newTodo));
  } catch (error) {
    yield put(ACT.createTodoError(error));
  }
}

export function * deleteTodoSaga (action) {
  const { id } = action;
  yield put(ACT.deleteTodoRequest());
  try {
    const { data: deletedTodo } = yield API.deleteTodo(id);
    yield put(ACT.deleteTodoSuccess(deletedTodo));
  } catch (error) {
    yield put(ACT.deleteTodoError(error));
  }
}

export function * statusTodoSaga (action) {
  const { id } = action;
  yield put(ACT.statusTodoRequest());
  try {
    const { data: index } = yield API.statusTodo(id);
    yield put(ACT.statusTodoSuccess(index));
  } catch (error) {
    yield put(ACT.statusTodoError(error));
  }
}

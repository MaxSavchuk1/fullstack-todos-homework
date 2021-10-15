import { put } from 'redux-saga/effects';
import * as API from '../api';
import * as ACT from '../actions';

export function * getTodosSaga () {
  yield put(ACT.getTodosRequest());
  try {
    const {
      data: { data: tasks },
    } = yield API.getTasks();
    yield put(ACT.getTodosSuccess(tasks));
  } catch (error) {
    yield put(ACT.getTodosError(error));
  }
}

export function * createTodoSaga (action) {
  const { todo } = action;
  yield put(ACT.createTodoRequest());
  try {
    const {
      data: { data: task },
    } = yield API.createTask(todo);
    yield put(ACT.createTodoSuccess(task));
  } catch (error) {
    yield put(ACT.createTodoError(error));
  }
}

export function * deleteTodoSaga (action) {
  const { id } = action;
  yield put(ACT.deleteTodoRequest());
  try {
    yield API.deleteTask(id);
    yield put(ACT.deleteTodoSuccess(id));
  } catch (error) {
    yield put(ACT.deleteTodoError(error));
  }
}

export function * updateTodoSaga (action) {
  const { id } = action;
  yield put(ACT.updateTodoRequest());
  try {
    yield API.updateTask(id);
    yield put(ACT.updateTodoSuccess(id));
  } catch (error) {
    yield put(ACT.updateTodoError(error));
  }
}

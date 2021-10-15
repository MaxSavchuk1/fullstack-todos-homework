import { takeLatest } from 'redux-saga/effects';
import {
  createTodoSaga,
  deleteTodoSaga,
  getTodosSaga,
  statusTodoSaga,
} from './todosSagas';
import ACTION_TYPES from '../actions/actionTypes';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.GET_TODOS_ACTION, getTodosSaga);
  yield takeLatest(ACTION_TYPES.CREATE_TODO_ACTION, createTodoSaga);
  yield takeLatest(ACTION_TYPES.DELETE_TODO_ACTION, deleteTodoSaga);
  yield takeLatest(ACTION_TYPES.STATUS_TODO_ACTION, statusTodoSaga);
}

export default rootSaga;

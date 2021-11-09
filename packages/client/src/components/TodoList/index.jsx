import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './TodoList.module.sass';
import * as actionCreators from './../../actions';
import TodoPagination from '../TodoPagination';

function TodoList () {
  const { todos, error, isFetching, tasksAmount } = useSelector(
    state => state.todos
  );
  const dispatch = useDispatch();
  const {
    updateTodoAction,
    getTodosAction,
    deleteTodoAction,
  } = bindActionCreators(actionCreators, dispatch);

  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);

  const getTodos = () => {
    getTodosAction({
      limit,
      offset,
    });
  };

  useEffect(() => {
    getTodos();
  }, [todos.length, offset, limit]);

  const mapTodo = ({ taskBody, isDone, id }) => {
    const deleteHandler = () => {
      deleteTodoAction(id);
    };
    const changeStatusHandler = () => {
      isDone = !isDone;
      updateTodoAction(id, isDone);
    };
    return (
      <li key={id} className={styles.listItem}>
        <input
          type='checkbox'
          checked={isDone}
          onChange={changeStatusHandler}
        />
        {taskBody}
        <button onClick={deleteHandler}>
          <DeleteIcon fontSize='small' />
        </button>
      </li>
    );
  };

  return (
    <>
      <div className={styles.statusMessage}>
        {isFetching && <p>Loading...</p>}
        {error && <p>Error</p>}
      </div>
      <ul className={styles.listContainer}>{todos.map(mapTodo)}</ul>
      <TodoPagination
        tasksAmount={tasksAmount}
        limit={limit}
        setLimit={setLimit}
        setOffset={setOffset}
      />
    </>
  );
}

export default TodoList;

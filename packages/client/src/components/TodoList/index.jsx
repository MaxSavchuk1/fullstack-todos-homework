import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './TodoList.module.sass';
import * as actionCreators from './../../actions';

function TodoList () {
  const { todos, error, isFetching } = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const {
    updateTodoAction,
    getTodosAction,
    deleteTodoAction,
  } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    getTodosAction();
  }, []);

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
      {isFetching && <div>Loading...</div>}
      {error && <div>ERROR</div>}
      <ul className={styles.listContainer}>{todos.map(mapTodo)}</ul>
    </>
  );
}

export default TodoList;

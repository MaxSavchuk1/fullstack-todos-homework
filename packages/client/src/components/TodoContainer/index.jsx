import React from 'react';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';
import styles from './TodoContainer.module.sass';

function TodoContainer () {
  return (
    <div className={styles.todoContainer}>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default TodoContainer;

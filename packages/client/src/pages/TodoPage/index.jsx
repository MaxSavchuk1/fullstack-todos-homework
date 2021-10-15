import React from 'react';
import TodoContainer from '../../components/TodoContainer';
import styles from './TodoPage.module.sass';

function TodoPage () {
  return (
    <div className={styles.pageContainer}>
      <TodoContainer />
    </div>
  );
}

export default TodoPage;

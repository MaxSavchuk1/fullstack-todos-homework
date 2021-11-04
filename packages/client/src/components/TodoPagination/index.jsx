import React from 'react';
import styles from './TodoPagination.module.sass';

function TodoPagination ({ amount }) {
  const limit = 5; // да, по-хорошему с сервера надо передавать еще и LIMIT
  const totalPages = Math.ceil(amount / limit);
  const pagination = [];
  for (let i = 1; i <= totalPages; i++) {
    pagination.push(i);
  }
  const paginationMappingFunc = (el, i) => <li key={i}>{el}</li>;
  return (
    <>
      {amount / limit > 1 && (
        <ul className={styles.pagesList}>
          {pagination.map(paginationMappingFunc)}
        </ul>
      )}
    </>
  );
}

export default TodoPagination;

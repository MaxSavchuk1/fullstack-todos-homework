import React from 'react';
import styles from './TodoPagination.module.sass';

function TodoPagination ({ tasksAmount, limit, setLimit, setOffset }) {
  const totalPages = Math.ceil(tasksAmount / limit);
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const pagesMapping = (el, i) => (
    <li key={i} onClick={e => setOffset(+e.target.innerText)}>
      {el}
    </li>
  );
  return (
    <>
      {tasksAmount / limit > 1 && (
        <>
          <br />
          <span>Page:</span>
          <ul className={styles.pagesList}>{pages.map(pagesMapping)}</ul>
        </>
      )}
      <div style={{ marginTop: 15 + 'px' }}>
        <span style={{ marginRight: 15 + 'px' }}>Tasks on page:</span>
        <button style={{ marginRight: 15 + 'px' }} onClick={() => setLimit(5)}>
          5
        </button>
        <button onClick={() => setLimit(10)}>10</button>
      </div>
    </>
  );
}

export default TodoPagination;
